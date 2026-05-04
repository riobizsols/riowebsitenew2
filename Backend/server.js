const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
// Backend/.env wins over empty or stale OS-level vars (default dotenv does not override existing keys).
require('dotenv').config({ path: path.join(__dirname, '.env'), override: true });

// Import visitor tracking routes
const visitorRoutes = require('./routes/visitors');

const app = express();
const hasValue = (value) => typeof value === 'string' && value.trim().length > 0;

// Behind one reverse proxy (cPanel / nginx / Apache), so req.ip uses X-Forwarded-For in production.
if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1);
}

function parseAllowedOriginsFromEnv() {
  const raw = hasValue(process.env.FRONTEND_ORIGINS)
    ? process.env.FRONTEND_ORIGINS
    : process.env.FRONTEND_ORIGIN;
  if (!hasValue(raw)) return [];
  return String(raw)
    .split(',')
    .map((origin) => origin.trim().replace(/\/+$/, ''))
    .filter(Boolean);
}

const allowedOrigins = parseAllowedOriginsFromEnv();
const localDevOrigins = ['http://localhost:3000', 'http://127.0.0.1:3000'];

const corsOptions = {
  origin(origin, callback) {
    const normalizedOrigin = typeof origin === 'string' ? origin.trim().replace(/\/+$/, '') : '';
    // Allow server-to-server / curl requests that do not send Origin.
    if (!normalizedOrigin) return callback(null, true);

    if (allowedOrigins.length > 0) {
      return callback(null, allowedOrigins.includes(normalizedOrigin));
    }

    if (process.env.NODE_ENV === 'production') {
      return callback(null, true);
    }

    return callback(null, localDevOrigins.includes(normalizedOrigin));
  },
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Stage 3 local chat testing storage (in-memory only)
let messages = [];

const LEGACY_VISITOR_KEY = '__legacy__';
const CHATBOT_DOWNLOADS_FILE = path.join(__dirname, 'data', 'chatbot_downloads.json');

function ensureJsonArrayFile(filePath) {
  try {
    const dir = path.dirname(filePath);
    if (!require('fs').existsSync(dir)) {
      require('fs').mkdirSync(dir, { recursive: true });
    }
    if (!require('fs').existsSync(filePath)) {
      require('fs').writeFileSync(filePath, JSON.stringify([], null, 2));
    }
  } catch (error) {
    console.error('[chatbot] Failed to initialize storage file:', filePath, error.message);
  }
}

function readJsonArrayFile(filePath) {
  try {
    ensureJsonArrayFile(filePath);
    const raw = require('fs').readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeJsonArrayFile(filePath, data) {
  try {
    ensureJsonArrayFile(filePath);
    require('fs').writeFileSync(filePath, JSON.stringify(Array.isArray(data) ? data : [], null, 2));
  } catch (error) {
    console.error('[chatbot] Failed to persist storage file:', filePath, error.message);
  }
}

function getTodayDateKey() {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0');
  const day = String(now.getUTCDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function normalizeAssetName(assetName) {
  return hasValue(assetName) ? String(assetName).trim().toLowerCase() : '';
}

function getPdfPathForAsset(assetName) {
  const normalized = normalizeAssetName(assetName);
  if (normalized === 'alm-services-pdf') return '/pdfs/alm-services.pdf';
  if (normalized === 'assist-services-pdf') return '/pdfs/assist-services.pdf';
  if (normalized === 'mems-services-pdf') return '/pdfs/mems-services.pdf';
  return '/pdfs/services-overview.pdf';
}

function buildPublicBaseUrl(req) {
  const configuredBase = hasValue(process.env.CHATBOT_PUBLIC_BASE_URL)
    ? process.env.CHATBOT_PUBLIC_BASE_URL.trim()
    : (hasValue(process.env.PUBLIC_BASE_URL) ? process.env.PUBLIC_BASE_URL.trim() : '');
  if (configuredBase) {
    return configuredBase.replace(/\/+$/, '');
  }

  const originHeader = typeof req?.headers?.origin === 'string' ? req.headers.origin.trim() : '';
  if (originHeader) {
    return originHeader.replace(/\/+$/, '');
  }

  const host = typeof req?.headers?.host === 'string' ? req.headers.host.trim() : '';
  if (host) {
    const forwardedProto = typeof req?.headers?.['x-forwarded-proto'] === 'string'
      ? req.headers['x-forwarded-proto'].split(',')[0].trim()
      : '';
    const protocol = forwardedProto || (req?.secure ? 'https' : 'http');
    return `${protocol}://${host}`;
  }

  return 'http://localhost:3000';
}

function getDownloadUrlForAsset(assetName, req) {
  const normalized = normalizeAssetName(assetName);
  const base = buildPublicBaseUrl(req);
  if (normalized === 'alm-services-pdf') {
    return hasValue(process.env.CHATBOT_PDF_URL_ALM)
      ? process.env.CHATBOT_PDF_URL_ALM.trim()
      : `${base}${getPdfPathForAsset(assetName)}`;
  }
  if (normalized === 'assist-services-pdf') {
    return hasValue(process.env.CHATBOT_PDF_URL_ASSIST)
      ? process.env.CHATBOT_PDF_URL_ASSIST.trim()
      : `${base}${getPdfPathForAsset(assetName)}`;
  }
  if (normalized === 'mems-services-pdf') {
    return hasValue(process.env.CHATBOT_PDF_URL_MEMS)
      ? process.env.CHATBOT_PDF_URL_MEMS.trim()
      : `${base}${getPdfPathForAsset(assetName)}`;
  }
  if (hasValue(process.env.CHATBOT_SERVICES_PDF_URL)) {
    return process.env.CHATBOT_SERVICES_PDF_URL.trim();
  }
  return `${base}${getPdfPathForAsset(assetName)}`;
}

/** Bearer or X-Admin-Chat-Token — must match ADMIN_CHAT_TOKEN in .env */
function getAdminChatTokenFromRequest(req) {
  const auth = req.headers.authorization;
  if (typeof auth === 'string' && auth.toLowerCase().startsWith('bearer ')) {
    return auth.slice(7).trim();
  }
  const headerToken = req.headers['x-admin-chat-token'];
  if (typeof headerToken === 'string') return headerToken.trim();
  return '';
}

let adminChatTokenWarned = false;

function requireAdminChatAuth(req, res, next) {
  const expected = process.env.ADMIN_CHAT_TOKEN;
  if (!hasValue(expected)) {
    if (!adminChatTokenWarned) {
      adminChatTokenWarned = true;
      console.warn(
        '[admin-chat] ADMIN_CHAT_TOKEN is not set — admin routes are open. Set ADMIN_CHAT_TOKEN in production.'
      );
    }
    return next();
  }
  const token = getAdminChatTokenFromRequest(req);
  if (token && token === expected.trim()) {
    return next();
  }
  return res.status(401).json({ success: false, message: 'Unauthorized' });
}

/**
 * GET /api/chat/messages is used by:
 * - Website widget (scoped: ?visitorId=<uuid|wa:...>) — no Bearer token
 * - Admin inbox (legacy bucket or future “all messages”) — needs ADMIN_CHAT_TOKEN
 * Without this split, locking messages behind admin auth breaks the public chat widget.
 */
function chatMessagesReadAuth(req, res, next) {
  const expected = process.env.ADMIN_CHAT_TOKEN;
  if (!hasValue(expected)) {
    return next();
  }
  const q = req.query.visitorId;
  const visitorIdFilter = typeof q === 'string' ? q.trim() : '';
  const needsAdmin =
    !visitorIdFilter || visitorIdFilter === LEGACY_VISITOR_KEY;
  if (!needsAdmin) {
    return next();
  }
  const token = getAdminChatTokenFromRequest(req);
  if (token && token === expected.trim()) {
    return next();
  }
  return res.status(401).json({ success: false, message: 'Unauthorized' });
}

const normalizeVisitorIdFromBody = (raw) => {
  if (raw === null || raw === undefined) return null;
  if (typeof raw !== 'string') return null;
  const t = raw.trim();
  if (!t || t === LEGACY_VISITOR_KEY) return null;
  return t;
};

const conversationKey = (m) => {
  const v = m?.visitorId;
  if (v != null && String(v).trim() !== '') return String(v).trim();
  return LEGACY_VISITOR_KEY;
};

// Constant product owner email
const productOwnerEmail = 'info@riobizsols.com';  // Replace with actual product owner email
const chatNotificationEmailFallback = 'info@riobizsols.com';
/** Default From for floating-chat emails when CHAT_NOTIFICATION_FROM is unset (use Gmail account that matches EMAIL_USER). */
const chatNotificationFromFallback = 'bizsolsrio@gmail.com';
const demoBookingRecipientsFallback = ['tony.rozario@riobizsols.com', 'shilpa@riobizsols.com'];

function createSmtpTransporter() {
  const pass =
    typeof process.env.EMAIL_PASS === 'string' ? process.env.EMAIL_PASS.replace(/\s+/g, '') : '';
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass,
    },
  });
}

/** Best-effort client IP for email text; labels loopback so ::1 is not mistaken for a public address. */
function getClientIpForChatEmail(req) {
  const xff = req.headers['x-forwarded-for'];
  if (typeof xff === 'string' && xff.trim()) {
    const first = xff.split(',')[0].trim();
    if (first) return formatLoopbackIpLabel(first);
  }
  const raw = typeof req.ip === 'string' ? req.ip.trim() : '';
  if (raw) return formatLoopbackIpLabel(raw);
  return 'unknown';
}

function formatLoopbackIpLabel(ip) {
  const isLoopback =
    ip === '::1' ||
    ip === '127.0.0.1' ||
    ip === '::ffff:127.0.0.1' ||
    /^::ffff:127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(ip);
  if (isLoopback) {
    return 'Local / loopback (not a public IP — visitor or tester on the same machine as the server, e.g. localhost)';
  }
  return ip;
}

/** Human-readable IST line for chat notification emails only (does not change stored/API timestamps). */
function formatChatEmailReceivedAtIST(isoOrString) {
  const d = new Date(typeof isoOrString === 'string' ? isoOrString.trim() : isoOrString);
  if (Number.isNaN(d.getTime())) {
    return typeof isoOrString === 'string' && isoOrString.trim() ? isoOrString.trim() : 'unknown';
  }
  const inIst = d.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
  return `${inIst} IST`;
}

async function sendWebsiteChatNotificationEmail({ visitorId, messageText, timestamp, req }) {
  if (!hasValue(process.env.EMAIL_USER) || !hasValue(process.env.EMAIL_PASS)) {
    console.warn('[chat-email] Skipped notification: EMAIL_USER/EMAIL_PASS missing');
    return;
  }

  const notificationTo = hasValue(process.env.CHAT_NOTIFICATION_EMAIL)
    ? process.env.CHAT_NOTIFICATION_EMAIL.trim()
    : chatNotificationEmailFallback;
  const notificationFrom = hasValue(process.env.CHAT_NOTIFICATION_FROM)
    ? process.env.CHAT_NOTIFICATION_FROM.trim()
    : chatNotificationFromFallback;

  const safeVisitorId = hasValue(visitorId) ? String(visitorId).trim() : 'unknown';
  const rawTimestamp = hasValue(timestamp) ? String(timestamp).trim() : new Date().toISOString();
  const receivedAtIst = formatChatEmailReceivedAtIST(rawTimestamp);
  const senderIp = getClientIpForChatEmail(req);
  const senderUserAgent = req.headers['user-agent'] || 'unknown';

  const transporter = createSmtpTransporter();

  const mailOptions = {
    from: notificationFrom,
    to: notificationTo,
    subject: `New Website Chat Inquiry - Visitor ${safeVisitorId}`,
    text:
      `Hello Team,\n\n` +
      `You have received a new inquiry from the website chat widget.\n\n` +
      `Visitor Details\n` +
      `- Visitor ID: ${safeVisitorId}\n` +
      `- Received At (IST): ${receivedAtIst}\n` +
      `- IP Address: ${senderIp}\n` +
      `- Browser: ${senderUserAgent}\n\n` +
      `Customer Message\n` +
      `${messageText}\n\n` +
      `Recommended Action\n` +
      `Please review this message in the admin chat panel and respond promptly.\n\n` +
      `Regards,\n` +
      `Rio Website Notification Bot`,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log('[chat-email] Notification sent', { to: notificationTo, messageId: info.messageId });
}

async function sendDemoBookingNotificationEmail({
  visitorId,
  selectedSlot,
  selectedService,
  sourcePage,
  req,
}) {
  if (!hasValue(process.env.EMAIL_USER) || !hasValue(process.env.EMAIL_PASS)) {
    console.warn('[chatbot-demo-email] Skipped notification: EMAIL_USER/EMAIL_PASS missing');
    return;
  }

  const transporter = createSmtpTransporter();
  const senderIp = getClientIpForChatEmail(req);
  const senderUserAgent = req.headers['user-agent'] || 'unknown';
  const safeVisitorId = hasValue(visitorId) ? String(visitorId).trim() : 'unknown';
  const safeSlot = hasValue(selectedSlot) ? String(selectedSlot).trim() : 'Not provided';
  const safeService = hasValue(selectedService) ? String(selectedService).trim() : 'General service';
  const safeSourcePage = hasValue(sourcePage) ? String(sourcePage).trim() : 'unknown';
  const receivedAtIst = formatChatEmailReceivedAtIST(new Date().toISOString());
  const recipients = hasValue(process.env.DEMO_BOOKING_NOTIFICATION_EMAILS)
    ? process.env.DEMO_BOOKING_NOTIFICATION_EMAILS
        .split(',')
        .map((email) => email.trim())
        .filter(Boolean)
    : demoBookingRecipientsFallback;

  const mailOptions = {
    from: hasValue(process.env.CHAT_NOTIFICATION_FROM)
      ? process.env.CHAT_NOTIFICATION_FROM.trim()
      : chatNotificationFromFallback,
    to: recipients.join(','),
    subject: `Demo booking interest from website chat - ${safeVisitorId}`,
    text:
      `Hello Team,\n\n` +
      `A website visitor requested a demo via chatbot flow.\n\n` +
      `Visitor Details\n` +
      `- Visitor ID: ${safeVisitorId}\n` +
      `- Selected Service: ${safeService}\n` +
      `- Selected Slot: ${safeSlot}\n` +
      `- Source Page: ${safeSourcePage}\n` +
      `- Received At (IST): ${receivedAtIst}\n` +
      `- IP Address: ${senderIp}\n` +
      `- Browser: ${senderUserAgent}\n\n` +
      `Recommended Action\n` +
      `Please follow up with the visitor on the confirmed date/time.\n\n` +
      `Regards,\n` +
      `Rio Website Chatbot`,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log('[chatbot-demo-email] Notification sent', { to: recipients, messageId: info.messageId });
}

// Route to handle email sending
app.post('/send-email', (req, res) => {
    const { firstname, email, phone, message } = req.body;

    console.log('[send-email] Request received:', { firstname, email, phone, messageLength: message?.length });
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('[send-email] Missing EMAIL_USER or EMAIL_PASS in .env');
        return res.status(500).json({ success: false, message: 'Server email config missing', error: 'EMAIL_USER or EMAIL_PASS not set' });
    }

   // Create Nodemailer transporter
    // const transporter = nodemailer.createTransport({
    //     host: 'smtp.zoho.com', // Zoho SMTP server
    //     port: 465,             // Use 465 for SSL or 587 for TLS
    //     secure: true,          // True for SSL (465), False for TLS (587)
    //     auth: {
    //         user: process.env.EMAIL_USER, // Full Zoho email address
    //         pass: process.env.EMAIL_PASS, // App-specific password
    //     },
    // });

    // Gmail: use port 587 (STARTTLS) - many hosts block outbound 465
    const transporter = createSmtpTransporter();

    transporter.verify((error, success) => {
        if (error) {
            console.error('SMTP Connection Error:', error);
        } else {
            console.log('SMTP Connected Successfully!');
        }
    });
    

    // Setup email data
    const mailOptions = {
        from:email,
        to: productOwnerEmail,
        replyTo: email,  // Customer's email for reply
        subject: `Message from Rio Contact Form ${email} | ${phone}` ,
        text: message,
    };
    
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('[send-email] Nodemailer error:', error.message);
            console.error('[send-email] Full error:', error);
            return res.status(500).json({ success: false, message: 'Error sending email', error: error.message });
        }
        console.log('[send-email] Sent successfully:', info.messageId);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    });
});

// Use visitor tracking routes
app.use('/api/visitors', visitorRoutes);

// Health check – confirms backend is running (open in browser or curl)
app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'Backend is running', port: process.env.PORT || 3003 });
});

/**
 * Send one chat-style notification to CHAT_NOTIFICATION_EMAIL (smoke test).
 * Auth: same as admin chat — Bearer ADMIN_CHAT_TOKEN (optional if token unset in .env).
 */
app.post('/api/chat/test-notification-email', requireAdminChatAuth, async (req, res) => {
  if (!hasValue(process.env.EMAIL_USER) || !hasValue(process.env.EMAIL_PASS)) {
    return res.status(503).json({
      success: false,
      message: 'EMAIL_USER or EMAIL_PASS is not set; cannot send test mail.',
    });
  }
  const to = hasValue(process.env.CHAT_NOTIFICATION_EMAIL)
    ? process.env.CHAT_NOTIFICATION_EMAIL.trim()
    : chatNotificationEmailFallback;
  try {
    await sendWebsiteChatNotificationEmail({
      visitorId: 'test-notification',
      messageText:
        'This is a manual test from POST /api/chat/test-notification-email. If you see this, CHAT_NOTIFICATION_EMAIL delivery works.',
      timestamp: new Date().toISOString(),
      req,
    });
  } catch (emailError) {
    console.error('[chat-email] Test notification failed:', emailError.message);
    return res.status(500).json({
      success: false,
      message: emailError.message,
    });
  }
  return res.json({
    success: true,
    message: `Test notification sent to ${to}. Check inbox and spam.`,
    to,
  });
});

app.post('/api/chatbot/track-service-download', (req, res) => {
  const { visitorId, assetName } = req.body || {};
  const safeAssetName = hasValue(assetName) ? String(assetName).trim() : 'rio-services-overview-pdf';
  const dateKey = getTodayDateKey();
  const allDownloads = readJsonArrayFile(CHATBOT_DOWNLOADS_FILE);
  const entry = {
    id: Date.now(),
    dateKey,
    visitorId: hasValue(visitorId) ? String(visitorId).trim() : null,
    assetName: safeAssetName,
    timestamp: new Date().toISOString(),
  };
  allDownloads.push(entry);
  writeJsonArrayFile(CHATBOT_DOWNLOADS_FILE, allDownloads);

  const dailyDownloads = allDownloads.filter(
    (download) => download.dateKey === dateKey && download.assetName === safeAssetName
  ).length;
  const downloadUrl = getDownloadUrlForAsset(safeAssetName, req);

  return res.status(200).json({
    success: true,
    data: {
      downloadUrl,
      dailyDownloads,
      dateKey,
      assetName: safeAssetName,
    },
  });
});

app.get('/api/chatbot/download-stats', requireAdminChatAuth, (req, res) => {
  const dateKey = getTodayDateKey();
  const allDownloads = readJsonArrayFile(CHATBOT_DOWNLOADS_FILE);
  const todayDownloads = allDownloads.filter((download) => download.dateKey === dateKey);
  const totalsByAsset = {};

  todayDownloads.forEach((download) => {
    const key = hasValue(download?.assetName)
      ? String(download.assetName).trim()
      : 'rio-services-overview-pdf';
    totalsByAsset[key] = (totalsByAsset[key] || 0) + 1;
  });

  return res.status(200).json({
    success: true,
    data: {
      dateKey,
      totalDownloadsToday: todayDownloads.length,
      totalsByAsset,
    },
  });
});

app.post('/api/chatbot/demo-booking-notify', async (req, res) => {
  const { visitorId, selectedSlot, selectedService, sourcePage } = req.body || {};
  try {
    await sendDemoBookingNotificationEmail({
      visitorId,
      selectedSlot,
      selectedService,
      sourcePage,
      req,
    });
    return res.status(200).json({
      success: true,
      message: 'Demo booking notification sent successfully.',
    });
  } catch (error) {
    console.error('[chatbot-demo-email] Failed to send notification:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to send demo booking notification.',
    });
  }
});

// Local chat testing API (keeps local storage, plus optional WhatsApp Cloud API send)
app.post('/api/chat/send', async (req, res) => {
  const { message, sender, sendToWhatsApp: sendToWhatsAppRaw, visitorId: visitorIdRaw } = req.body || {};
  const trimmedMessage = typeof message === 'string' ? message.trim() : '';
  const normalizedSender = typeof sender === 'string' && sender.trim() ? sender.trim() : 'user';
  const sendToWhatsApp = sendToWhatsAppRaw === true;
  const visitorId = normalizeVisitorIdFromBody(visitorIdRaw);

  const isAdminSend = String(normalizedSender).toLowerCase() === 'admin';
  if (isAdminSend) {
    const expected = process.env.ADMIN_CHAT_TOKEN;
    if (hasValue(expected)) {
      const token = getAdminChatTokenFromRequest(req);
      if (!token || token !== expected.trim()) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
      }
    }
  }

  console.log('[chat-api] Incoming send request:', {
    sender: normalizedSender,
    messageLength: trimmedMessage.length,
    sendToWhatsApp,
    visitorId: visitorId || LEGACY_VISITOR_KEY,
  });

  if (!trimmedMessage) {
    return res.status(400).json({ success: false, message: 'Message is required' });
  }

  const chatMessage = {
    id: Date.now(),
    text: trimmedMessage,
    sender: normalizedSender,
    visitorId,
    sendToWhatsApp,
    timestamp: new Date().toISOString(),
  };

  messages.push(chatMessage);
  console.log('[chat-api] Message stored:', {
    id: chatMessage.id,
    sender: chatMessage.sender,
    visitorId: chatMessage.visitorId,
    sendToWhatsApp: chatMessage.sendToWhatsApp,
    timestamp: chatMessage.timestamp,
  });

  // Send email notification only for website visitor messages.
  // Do not await SMTP — it blocks the HTTP response and makes the chat widget feel slow.
  const isWebsiteVisitorMessage = String(normalizedSender).toLowerCase() === 'user';
  if (isWebsiteVisitorMessage) {
    void sendWebsiteChatNotificationEmail({
      visitorId: visitorId || LEGACY_VISITOR_KEY,
      messageText: trimmedMessage,
      timestamp: chatMessage.timestamp,
      req,
    }).catch((emailError) => {
      console.error('[chat-email] Failed to send notification:', emailError.message);
    });
  }

  const {
    WHATSAPP_TOKEN,
    WHATSAPP_PHONE_NUMBER_ID,
    WHATSAPP_BUSINESS_ACCOUNT_ID,
    WHATSAPP_TO_NUMBER,
    WHATSAPP_TEMPLATE_NAME,
    WHATSAPP_TEMPLATE_LANG,
    WHATSAPP_TEMPLATE_BODY_PARAM_MODE,
  } = process.env;
  const missingWhatsAppKeys = [
    ['WHATSAPP_TOKEN', WHATSAPP_TOKEN],
    ['WHATSAPP_PHONE_NUMBER_ID', WHATSAPP_PHONE_NUMBER_ID],
    ['WHATSAPP_TO_NUMBER', WHATSAPP_TO_NUMBER],
    ['WHATSAPP_TEMPLATE_NAME', WHATSAPP_TEMPLATE_NAME],
  ]
    .filter(([, value]) => !hasValue(value))
    .map(([key]) => key);
  const whatsappConfigReady = missingWhatsAppKeys.length === 0;

  if (!sendToWhatsApp) {
    console.log('[chat-api] Skipping WhatsApp: sendToWhatsApp is false');
  } else if (whatsappConfigReady) {
    try {
      console.log('[whatsapp-cloud] Calling Meta API:', {
        phoneNumberId: WHATSAPP_PHONE_NUMBER_ID,
        to: WHATSAPP_TO_NUMBER,
        templateName: WHATSAPP_TEMPLATE_NAME,
      });
      const shouldUseMessageAsBodyParam =
        (WHATSAPP_TEMPLATE_BODY_PARAM_MODE || '').trim().toLowerCase() === 'single';
      const templatePayload = {
        name: WHATSAPP_TEMPLATE_NAME,
        language: {
          code: WHATSAPP_TEMPLATE_LANG || 'en_US',
        },
      };

      // Only send body parameters when explicitly enabled.
      // This prevents Meta error 132000 for templates with 0 placeholders.
      if (shouldUseMessageAsBodyParam) {
        templatePayload.components = [
          {
            type: 'body',
            parameters: [
              {
                type: 'text',
                text: trimmedMessage,
              },
            ],
          },
        ];
      }

      const whatsappResponse = await axios.post(
        `https://graph.facebook.com/v23.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`,
        {
          messaging_product: 'whatsapp',
          to: WHATSAPP_TO_NUMBER,
          type: 'template',
          template: templatePayload,
        },
        {
          headers: {
            Authorization: `Bearer ${WHATSAPP_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('[whatsapp-cloud] Meta response:', whatsappResponse.data);
      if (WHATSAPP_BUSINESS_ACCOUNT_ID) {
        console.log('[whatsapp-cloud] Sent template using WABA:', WHATSAPP_BUSINESS_ACCOUNT_ID);
      }
    } catch (error) {
      const safeError = {
        message: error.message,
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
      };
      console.error('[whatsapp-cloud] Failed to send test message:', safeError);
      const errorDetails = error.response?.data?.error?.error_data?.details;
      if (errorDetails) {
        console.error('[whatsapp-cloud] Meta error details:', errorDetails);
      }
    }
  } else {
    console.warn('[whatsapp-cloud] Skipped send: missing', missingWhatsAppKeys.join(', '));
  }

  return res.status(200).json({
    success: true,
    message: 'Message stored successfully',
    data: chatMessage,
  });
});

app.get('/api/chat/messages', chatMessagesReadAuth, (req, res) => {
  const q = req.query.visitorId;
  const visitorIdFilter = typeof q === 'string' ? q.trim() : '';

  let data = messages;
  if (visitorIdFilter) {
    if (visitorIdFilter === LEGACY_VISITOR_KEY) {
      data = messages.filter((m) => m.visitorId == null || String(m.visitorId).trim() === '');
    } else {
      data = messages.filter((m) => m.visitorId === visitorIdFilter);
    }
  }

  if (process.env.DEBUG_CHAT_POLL === '1') {
    console.log('[chat-api] Messages requested:', {
      count: data.length,
      total: messages.length,
      visitorIdFilter: visitorIdFilter || '(none)',
    });
  }
  return res.status(200).json({ success: true, data });
});

app.get('/api/chat/conversations', requireAdminChatAuth, (req, res) => {
  const buckets = new Map();

  messages.forEach((m) => {
    const key = conversationKey(m);
    if (!buckets.has(key)) {
      buckets.set(key, []);
    }
    buckets.get(key).push(m);
  });

  const data = [];
  buckets.forEach((threadMessages, key) => {
    const sorted = [...threadMessages].sort(
      (a, b) => new Date(a.timestamp || 0) - new Date(b.timestamp || 0)
    );
    const last = sorted[sorted.length - 1];
    data.push({
      visitorId: key === LEGACY_VISITOR_KEY ? null : key,
      lastMessage: last?.text || '',
      lastTimestamp: last?.timestamp || null,
    });
  });

  data.sort((a, b) => new Date(b.lastTimestamp || 0) - new Date(a.lastTimestamp || 0));

  return res.status(200).json({ success: true, data });
});

// Meta WhatsApp webhook verification endpoint
app.get('/api/whatsapp/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const verifyToken = typeof req.query['hub.verify_token'] === 'string' ? req.query['hub.verify_token'].trim() : '';
  const challenge = req.query['hub.challenge'];
  const expected = hasValue(process.env.WHATSAPP_VERIFY_TOKEN)
    ? String(process.env.WHATSAPP_VERIFY_TOKEN).trim()
    : '';

  if (mode === 'subscribe' && verifyToken && expected && verifyToken === expected) {
    console.log('[whatsapp-webhook] Verification successful');
    return res.status(200).type('text/plain').send(String(challenge ?? ''));
  }

  console.warn('[whatsapp-webhook] Verification failed', {
    mode: mode || '(missing)',
    hasVerifyTokenParam: Boolean(verifyToken),
    hasEnvVerifyToken: Boolean(expected),
    match: verifyToken === expected,
  });
  return res.sendStatus(403);
});

// Meta WhatsApp webhook receive endpoint
app.post('/api/whatsapp/webhook', (req, res) => {
  console.log('[whatsapp-webhook] Incoming payload:', JSON.stringify(req.body, null, 2));

  const entries = Array.isArray(req.body?.entry) ? req.body.entry : [];

  entries.forEach((entry) => {
    const changes = Array.isArray(entry?.changes) ? entry.changes : [];

    changes.forEach((change) => {
      const value = change?.value || {};
      const contacts = Array.isArray(value.contacts) ? value.contacts : [];
      const incomingMessages = Array.isArray(value.messages) ? value.messages : [];
      const messageStatuses = Array.isArray(value.statuses) ? value.statuses : [];

      messageStatuses.forEach((statusItem) => {
        console.log('[whatsapp-webhook] Message status update:', {
          messageId: statusItem?.id || '',
          status: statusItem?.status || '',
          recipientId: statusItem?.recipient_id || '',
          timestamp: statusItem?.timestamp
            ? new Date(Number(statusItem.timestamp) * 1000).toISOString()
            : new Date().toISOString(),
          conversationId: statusItem?.conversation?.id || '',
          pricingCategory: statusItem?.pricing?.category || '',
        });
      });

      incomingMessages.forEach((incomingMessage) => {
        const senderPhoneNumber = incomingMessage?.from || contacts[0]?.wa_id || '';
        const messageText = incomingMessage?.text?.body || '';
        const timestamp = incomingMessage?.timestamp
          ? new Date(Number(incomingMessage.timestamp) * 1000).toISOString()
          : new Date().toISOString();

        const chatMessage = {
          id: Date.now() + Math.floor(Math.random() * 1000),
          text: messageText,
          sender: 'customer',
          visitorId: senderPhoneNumber ? `wa:${senderPhoneNumber}` : null,
          senderPhoneNumber,
          timestamp,
        };

        messages.push(chatMessage);
        console.log('[whatsapp-webhook] Stored customer message:', {
          senderPhoneNumber,
          messageText,
          timestamp,
        });
        console.log('[chat-api] Message stored:', {
          id: chatMessage.id,
          sender: chatMessage.sender,
          timestamp: chatMessage.timestamp,
        });
      });
    });
  });

  return res.status(200).json({ success: true });
});

// Serve static files from the React build folder (production)
const possibleBuildPaths = [
  path.join(__dirname, '..', 'build'),  // project root: .../riowebsitenew2/build
  path.join(__dirname, 'build'),         // build inside Backend: .../Backend/build
  path.join(process.cwd(), 'build'),     // cwd/build (e.g. cPanel app root)
];
const buildPath = possibleBuildPaths.find(p => require('fs').existsSync(p)) || possibleBuildPaths[0];

if (process.env.NODE_ENV === 'production' || require('fs').existsSync(buildPath)) {
  app.use(express.static(buildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
  console.log('Serving static build from:', buildPath);
} else {
  console.warn('Build folder not found. Tried:', possibleBuildPaths.join(', '));
  console.warn('Set NODE_ENV=production and ensure "build" exists, or GET / will 404.');
}

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.warn('Warning: EMAIL_USER or EMAIL_PASS not set in .env – /send-email will return 500 until fixed.');
    }
    const startupChecklist = {
      'Backend': 'OK',
      'Chat API': 'OK',
      'WhatsApp Send': hasValue(process.env.WHATSAPP_TOKEN) && hasValue(process.env.WHATSAPP_PHONE_NUMBER_ID) && hasValue(process.env.WHATSAPP_TO_NUMBER) ? 'OK' : 'FAIL',
      'Webhook Routes': hasValue(process.env.WHATSAPP_VERIFY_TOKEN) ? 'OK' : 'FAIL',
      'Frontend Popup': 'OK',
      'Admin Dashboard': hasValue(process.env.ADMIN_CHAT_TOKEN) ? 'OK (protected)' : 'WARN (ADMIN_CHAT_TOKEN unset)',
    };
    console.log('[health-check] Checklist');
    Object.entries(startupChecklist).forEach(([name, status]) => {
      console.log(`[health-check] ${name}: ${status}`);
    });
    const chatNotifyTo = hasValue(process.env.CHAT_NOTIFICATION_EMAIL)
      ? process.env.CHAT_NOTIFICATION_EMAIL.trim()
      : chatNotificationEmailFallback;
    const chatNotifyFrom = hasValue(process.env.CHAT_NOTIFICATION_FROM)
      ? process.env.CHAT_NOTIFICATION_FROM.trim()
      : chatNotificationFromFallback;
    console.log(`[health-check] Chat email — To: ${chatNotifyTo} | From: ${chatNotifyFrom}`);
});


// import express from 'express';
// import fetch from 'node-fetch';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config();  // Initialize environment variables

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(bodyParser.json());

// app.post('/api/hubspot', async (req, res) => {
//   const contactData = req.body;
//   const apiKey = process.env.HUBSPOT_API_KEY;

//   try {
//     const response = await fetch(`https://api.hubapi.com/contacts/v1/contact?hapikey=${apiKey}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(contactData),
//     });

//     if (!response.ok) {
//       throw new Error('Error sending data to HubSpot');
//     }

//     const result = await response.json();
//     res.json(result);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

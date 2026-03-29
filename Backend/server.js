const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({ path: path.join(__dirname, '.env') });
require('dotenv').config();

// Import visitor tracking routes
const visitorRoutes = require('./routes/visitors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Stage 3 local chat testing storage (in-memory only)
let messages = [];

const hasValue = (value) => typeof value === 'string' && value.trim().length > 0;

const LEGACY_VISITOR_KEY = '__legacy__';

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
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

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

  console.log('[chat-api] Messages requested:', {
    count: data.length,
    total: messages.length,
    visitorIdFilter: visitorIdFilter || '(none)',
  });
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

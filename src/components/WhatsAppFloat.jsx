import React, { useCallback, useEffect, useRef, useState } from 'react';
import './WhatsAppFloat.css';
import { getApiBaseUrl } from '../utils/urlHelper';

const DEFAULT_SUPPORT_MESSAGE = {
  id: 'support_welcome',
  bubbleClass: 'support',
  text: 'Hi there 👋\nWelcome to RIO Biz Solutions!\nHow can we help you today?',
};

const VISITOR_STORAGE_KEY = 'rio_website_chat_visitor_id';

const INITIAL_CHAT_OPTIONS = [
  { id: 'explore_services', label: 'Explore Our Services' },
  { id: 'request_demo', label: 'Request a Demo / Consultation' },
  { id: 'enquiry', label: 'Enquiry' },
];

const SERVICE_PDF_OPTIONS = [
  { id: 'service_pdf_alm', label: 'Asset Lifecycle Management (ALM)', assetName: 'alm-services-pdf' },
  { id: 'service_pdf_assist', label: 'Assist', assetName: 'assist-services-pdf' },
  { id: 'service_pdf_mems', label: 'MEMS', assetName: 'mems-services-pdf' },
];

const ENQUIRY_CHANNEL_OPTIONS = [
  { id: 'call', label: 'Call' },
  { id: 'whatsapp', label: 'WhatsApp' },
  { id: 'email', label: 'Email' },
];

/** Shown after user picks “Explore Our Services” — lists all three offerings */
const EXPLORE_INTRO_MESSAGE =
  'Great! We offer end-to-end business solutions.\n\nPlease choose a service PDF below.';

/** Shown after enquiry thank-you, before the main menu buttons */
const POST_ENQUIRY_MAIN_MENU_MESSAGE =
  'We offer end-to-end business solutions.\n\nPlease choose an option from the menu below.';

/** After a successful Calendly booking from the inline embed (postMessage) */
const DEMO_BOOKING_THANK_YOU_MESSAGE =
  'Thank you for booking! We look forward to speaking with you.';

/** RIO Biz Solutions — demo / consultation scheduling */
const RIO_CALENDLY_URL = 'https://calendly.com/bizsolsrio/riobizsols-demo-consultation';

/**
 * After a Calendly booking, send users back to the site with this query so we reopen chat.
 * Also set the same URL in Calendly: Event type → Confirmation page → “Redirect to an external site”.
 * Example: https://riobizsols.com/?rio_chat=open (or your current path + ?rio_chat=open)
 */
const RIO_CHAT_RETURN_QUERY = 'rio_chat';
const RIO_CHAT_RETURN_VALUE = 'open';

function buildReturnToChatUrl() {
  if (typeof window === 'undefined') return '';
  const { origin, pathname, search, hash } = window.location;
  const path = pathname || '/';
  const params = new URLSearchParams(search);
  params.delete(RIO_CHAT_RETURN_QUERY);
  const rest = params.toString();
  const base = `${origin}${path}`;
  const sep = rest ? '&' : '?';
  return `${base}${rest ? `?${rest}${sep}` : '?'}${RIO_CHAT_RETURN_QUERY}=${RIO_CHAT_RETURN_VALUE}${hash || ''}`;
}

/** Calendly may honor redirect_url; if not, set the same return URL in the Calendly dashboard. */
function calendlyUrlWithReturnToChat() {
  const returnUrl = buildReturnToChatUrl();
  if (!returnUrl) return RIO_CALENDLY_URL;
  const sep = RIO_CALENDLY_URL.includes('?') ? '&' : '?';
  return `${RIO_CALENDLY_URL}${sep}redirect_url=${encodeURIComponent(returnUrl)}`;
}

const CALENDLY_WIDGET_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js';

function loadCalendlyWidgetScript() {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('no window'));
      return;
    }
    if (window.Calendly) {
      resolve();
      return;
    }
    const existing = document.querySelector(`script[src="${CALENDLY_WIDGET_SCRIPT}"]`);
    if (existing) {
      const deadline = Date.now() + 15000;
      const tick = () => {
        if (window.Calendly) {
          resolve();
          return;
        }
        if (Date.now() > deadline) {
          reject(new Error('Calendly script timeout'));
          return;
        }
        window.setTimeout(tick, 50);
      };
      tick();
      return;
    }
    const script = document.createElement('script');
    script.src = CALENDLY_WIDGET_SCRIPT;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Calendly script failed to load'));
    document.body.appendChild(script);
  }).then(() => {
    if (!window.Calendly) throw new Error('Calendly API unavailable');
  });
}

function consumeChatReturnQuery() {
  if (typeof window === 'undefined') return false;
  const params = new URLSearchParams(window.location.search);
  if (params.get(RIO_CHAT_RETURN_QUERY) !== RIO_CHAT_RETURN_VALUE) return false;
  params.delete(RIO_CHAT_RETURN_QUERY);
  const rest = params.toString();
  const next = `${window.location.pathname}${rest ? `?${rest}` : ''}${window.location.hash}`;
  window.history.replaceState({}, document.title, next);
  return true;
}

/** Calendly inline/popup widgets notify the parent via postMessage when a meeting is booked */
function isCalendlyEventScheduled(event) {
  const origin = typeof event.origin === 'string' ? event.origin : '';
  if (!origin.includes('calendly.com')) return false;
  const name = event.data && typeof event.data.event === 'string' ? event.data.event : '';
  return name === 'calendly.event_scheduled';
}

function getOrCreateVisitorId() {
  if (typeof window === 'undefined') return '';
  try {
    let id = localStorage.getItem(VISITOR_STORAGE_KEY);
    if (id && id.trim()) return id.trim();
    id =
      typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
        ? crypto.randomUUID()
        : `visitor_${Date.now()}_${Math.random().toString(36).slice(2, 12)}`;
    localStorage.setItem(VISITOR_STORAGE_KEY, id);
    return id;
  } catch {
    return `visitor_${Date.now()}_${Math.random().toString(36).slice(2, 12)}`;
  }
}

function renderMessageWithLinks(text) {
  const rawText = typeof text === 'string' ? text : '';
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = rawText.split(urlRegex);

  return parts.map((part, index) => {
    if (/^https?:\/\//.test(part)) {
      const isPdfLink = /\.pdf(\?|#|$)/i.test(part);
      return (
        <a
          key={`msg-link-${index}`}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-chat-link"
          download={isPdfLink}
        >
          {isPdfLink ? 'Download PDF' : 'Open link'}
        </a>
      );
    }
    return <React.Fragment key={`msg-text-${index}`}>{part}</React.Fragment>;
  });
}

function sanitizeLegacyExploreMessage(value) {
  const text = typeof value === 'string' ? value : '';
  if (!text.includes('Please choose a service PDF below')) return text;

  const cleaned = text
    .split('\n')
    .filter((line) => !line.trim().startsWith('✓'))
    .join('\n')
    .replace(
      'Great! We offer end-to-end business solutions including:',
      'Great! We offer end-to-end business solutions.'
    )
    .replace(/\n{3,}/g, '\n\n');

  return cleaned
    .replace(
      /Great!\s*\n+\s*Please choose a service PDF below\./,
      'Great! We offer end-to-end business solutions.\n\nPlease choose a service PDF below.'
    )
    .trim();
}

function isValidEmail(value) {
  const email = typeof value === 'string' ? value.trim() : '';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false;

  const lowerEmail = email.toLowerCase();
  return (
    lowerEmail.endsWith('.com') ||
    lowerEmail.endsWith('.in') ||
    lowerEmail.endsWith('.org') ||
    lowerEmail.endsWith('.net') ||
    lowerEmail.endsWith('.co.in')
  );
}

function isValidPhoneNumber(value) {
  const phone = typeof value === 'string' ? value.trim() : '';
  if (!phone) return false;

  // Allow international number characters.
  if (!/^\+?[0-9()\-\s]+$/.test(phone)) return false;
  const digits = phone.replace(/\D/g, '');
  // E.164 allows up to 15 digits; enforce minimum 10 for contactability.
  if (digits.length < 10 || digits.length > 15) return false;

  // Reject repeated single-digit patterns like 0000000000, 1111111111.
  if (/^(\d)\1+$/.test(digits)) return false;

  // Reject obvious sequential placeholders.
  const commonDummyNumbers = new Set([
    '0123456789',
    '1234567890',
    '0987654321',
    '9876543210',
  ]);
  if (commonDummyNumbers.has(digits)) return false;

  return true;
}

export default function WhatsAppFloat() {
  const [visitorId] = useState(() => getOrCreateVisitorId());
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const [showInitialOptions, setShowInitialOptions] = useState(true);
  const [showServicePdfOptions, setShowServicePdfOptions] = useState(false);
  /** Enquiry wizard: null | 'info' | 'channel' | 'contact' | 'name' */
  const [enquiryStep, setEnquiryStep] = useState(null);
  const [enquiryChannel, setEnquiryChannel] = useState(null);
  /** Inline Calendly embed after “Request a Demo / Consultation” */
  const [showCalendlyEmbed, setShowCalendlyEmbed] = useState(false);
  const calendlyHostRef = useRef(null);
  /** Avoid duplicate thank-you + menu when Calendly fires more than once */
  const demoBookingCompleteHandledRef = useRef(false);

  const [messages, setMessages] = useState([DEFAULT_SUPPORT_MESSAGE]);

  const normalizeChatMessage = (m) => {
    if (!m) return null;
    const rawSender = typeof m.sender === 'string' ? m.sender.trim().toLowerCase() : '';
    const bubbleClass = rawSender === 'user' ? 'user' : 'support';
    const rawText = typeof m.message === 'string' ? m.message : (m.text || '');
    const text = sanitizeLegacyExploreMessage(rawText);
    return {
      id: m.id,
      bubbleClass,
      text,
      timestamp: m.timestamp,
    };
  };

  const fetchMessages = useCallback(
    async ({ silent = false } = {}) => {
      if (!visitorId) return;
      if (!silent) {
        setIsLoadingMessages(true);
        setError('');
      }
      try {
        const qs = new URLSearchParams({ visitorId });
        const res = await fetch(`${getApiBaseUrl()}/api/chat/messages?${qs.toString()}`);
        if (!res.ok) {
          throw new Error(`Failed to load messages (${res.status})`);
        }
        const data = await res.json();

        const backendMessages = Array.isArray(data?.data) ? data.data : [];
        const normalized = backendMessages
          .map(normalizeChatMessage)
          .filter(Boolean)
          .sort((a, b) => {
            const ta = a.timestamp ? new Date(a.timestamp).getTime() : 0;
            const tb = b.timestamp ? new Date(b.timestamp).getTime() : 0;
            return ta - tb;
          });

        setMessages(normalized.length ? normalized : [DEFAULT_SUPPORT_MESSAGE]);
        setShowInitialOptions((prev) => {
          const hasUserMessages = normalized.some((message) => message.bubbleClass === 'user');
          // Keep menu visible when explicitly re-opened after a completed flow.
          return prev || !hasUserMessages;
        });
        if (!silent) setError('');
      } catch (err) {
        if (!silent) {
          setError('Unable to load chat messages right now.');
          console.warn('Failed to fetch chat messages:', err);
        }
      } finally {
        if (!silent) {
          setIsLoadingMessages(false);
        }
      }
    },
    [visitorId]
  );

  useEffect(() => {
    if (!isChatOpen || !visitorId) return undefined;

    fetchMessages({ silent: false });
    const intervalId = setInterval(() => {
      fetchMessages({ silent: true });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isChatOpen, visitorId, fetchMessages]);

  /** Re-open chat when user returns from Calendly with ?rio_chat=open */
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!consumeChatReturnQuery()) return;
    setIsChatOpen(true);
    setShowInitialOptions(true);
    setShowServicePdfOptions(false);
    setEnquiryStep(null);
    setEnquiryChannel(null);
    setShowCalendlyEmbed(false);
  }, []);

  useEffect(() => {
    if (!showCalendlyEmbed) return undefined;
    const host = calendlyHostRef.current;
    if (!host) return undefined;

    let cancelled = false;
    loadCalendlyWidgetScript()
      .then(() => {
        if (cancelled || !host || !window.Calendly) return;
        host.innerHTML = '';
        window.Calendly.initInlineWidget({
          url: calendlyUrlWithReturnToChat(),
          parentElement: host,
        });
      })
      .catch((err) => {
        console.warn('Calendly embed failed:', err);
        if (!cancelled) {
          setError('Could not load the booking calendar. Please try again.');
          setShowCalendlyEmbed(false);
          setShowInitialOptions(true);
        }
      });

    return () => {
      cancelled = true;
      host.innerHTML = '';
    };
  }, [showCalendlyEmbed]);

  const sendChatMessage = useCallback(
    async ({ message, sender }) => {
      const trimmedMessage = typeof message === 'string' ? message.trim() : '';
      if (!trimmedMessage || !visitorId) return false;
      const res = await fetch(`${getApiBaseUrl()}/api/chat/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmedMessage,
          sender,
          visitorId,
          sendToWhatsApp: false,
        }),
      });
      if (res.ok && sender === 'user') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'generate_lead'
        });
      }
      return res.ok;
    },
    [visitorId]
  );

  const sendSupportMessage = useCallback(
    async (text) => {
      const ok = await sendChatMessage({ message: text, sender: 'support' });
      if (ok) {
        await fetchMessages({ silent: true });
      }
    },
    [sendChatMessage, fetchMessages]
  );

  useEffect(() => {
    if (showCalendlyEmbed) {
      demoBookingCompleteHandledRef.current = false;
    }
  }, [showCalendlyEmbed]);

  useEffect(() => {
    if (!showCalendlyEmbed || !visitorId) return undefined;

    const onMessage = (event) => {
      if (!isCalendlyEventScheduled(event)) return;
      if (demoBookingCompleteHandledRef.current) return;
      demoBookingCompleteHandledRef.current = true;

      void (async () => {
        try {
          await sendSupportMessage(DEMO_BOOKING_THANK_YOU_MESSAGE);
          await sendSupportMessage(POST_ENQUIRY_MAIN_MENU_MESSAGE);
        } catch (err) {
          console.warn('Post-booking chat messages failed:', err);
        } finally {
          setShowCalendlyEmbed(false);
          setShowInitialOptions(true);
        }
      })();
    };

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [showCalendlyEmbed, visitorId, sendSupportMessage]);

  const notifyDemoBookingInterest = useCallback(async () => {
    if (!visitorId) return;
    const sourcePage =
      typeof window !== 'undefined' && window.location
        ? `${window.location.origin}${window.location.pathname}${window.location.search}${window.location.hash}`
        : 'unknown';
    try {
      await fetch(`${getApiBaseUrl()}/api/chatbot/demo-booking-notify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visitorId,
          selectedService: 'Demo / Consultation (chatbot request)',
          selectedSlot: 'Inline scheduler opened in chat',
          sourcePage,
        }),
      });
    } catch (err) {
      console.warn('Demo booking notify call failed:', err);
    }
  }, [visitorId]);

  const startExploreServicesFlow = useCallback(async () => {
    await sendSupportMessage(EXPLORE_INTRO_MESSAGE);
    setShowServicePdfOptions(true);
  }, [sendSupportMessage]);

  const handleServicePdfSelect = async (serviceOption) => {
    if (isSending || !visitorId) return;
    setIsSending(true);
    setError('');
    try {
      const userOk = await sendChatMessage({ message: serviceOption.label, sender: 'user' });
      if (!userOk) throw new Error('Failed to send PDF selection');
      await fetchMessages({ silent: true });

      const trackingRes = await fetch(`${getApiBaseUrl()}/api/chatbot/track-service-download`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visitorId,
          assetName: serviceOption.assetName,
        }),
      });
      if (!trackingRes.ok) throw new Error(`Failed to track download (${trackingRes.status})`);
      const trackingData = await trackingRes.json();
      const downloadUrl = trackingData?.data?.downloadUrl || 'https://riobizsols.com';

      await sendSupportMessage(
        `Great! Here is your ${serviceOption.label} PDF:\n` +
          `${downloadUrl}\n\n` +
          'Thank you for downloading.\n\nPlease choose an option from the main menu below.'
      );
      setShowServicePdfOptions(false);
      setShowInitialOptions(true);
    } catch (err) {
      setError('Unable to fetch PDF right now.');
      console.warn('Service PDF selection error:', err);
    } finally {
      setIsSending(false);
    }
  };

  const handleInitialOptionSelect = async (optionLabel) => {
    if (isSending || !visitorId) return;
    setShowInitialOptions(false);
    setShowServicePdfOptions(false);
    setEnquiryStep(null);
    setEnquiryChannel(null);
    setIsSending(true);
    setError('');
    try {
      const userOk = await sendChatMessage({ message: optionLabel, sender: 'user' });
      if (!userOk) throw new Error('Failed to send option');

      if (optionLabel === 'Explore Our Services') {
        await fetchMessages({ silent: true });
        await startExploreServicesFlow();
      } else if (optionLabel === 'Request a Demo / Consultation') {
        await fetchMessages({ silent: true });
        void notifyDemoBookingInterest();
        await sendSupportMessage(
          "Awesome! We'd love to show you how our solutions can help your business 🚀\n\n" +
            'Pick a date and time in the calendar below.'
        );
        setShowCalendlyEmbed(true);
      } else if (optionLabel === 'Enquiry') {
        await fetchMessages({ silent: true });
        await sendSupportMessage('Let us know what info you are looking for?');
        setEnquiryStep('info');
      } else {
        await fetchMessages({ silent: true });
      }
    } catch (err) {
      setError('Unable to send message right now.');
      console.warn('Initial option error:', err);
      setShowInitialOptions(true);
      setShowCalendlyEmbed(false);
      setEnquiryStep(null);
      setEnquiryChannel(null);
    } finally {
      setIsSending(false);
    }
  };

  const handleCalendlyBack = () => {
    setShowCalendlyEmbed(false);
    setShowInitialOptions(true);
  };

  const handleEnquiryChannelSelect = async (label) => {
    if (isSending || !visitorId || enquiryStep !== 'channel') return;
    setIsSending(true);
    setError('');
    try {
      const userOk = await sendChatMessage({ message: `Preferred contact: ${label}`, sender: 'user' });
      if (!userOk) throw new Error('Failed to send channel choice');
      await fetchMessages({ silent: true });

      const channelKey = label === 'Call' ? 'call' : label === 'WhatsApp' ? 'whatsapp' : 'email';
      setEnquiryChannel(channelKey);

      let nextPrompt = '';
      if (channelKey === 'email') {
        nextPrompt = 'Please enter your email address.';
      } else if (channelKey === 'whatsapp') {
        nextPrompt = 'Please enter your WhatsApp number.';
      } else {
        nextPrompt = 'Please enter your phone number.';
      }
      await sendSupportMessage(nextPrompt);
      setEnquiryStep('contact');
    } catch (err) {
      setError('Unable to continue right now.');
      console.warn('Enquiry channel error:', err);
    } finally {
      setIsSending(false);
    }
  };

  const handleSend = async () => {
    const trimmedMessage = inputText.trim();
    if (!trimmedMessage || isSending || !visitorId) return;

    if (enquiryStep === 'channel') {
      setError('Please choose Call, WhatsApp, or Email above.');
      return;
    }

    setShowInitialOptions(false);
    setIsSending(true);
    setError('');
    try {
      if (enquiryStep === 'info') {
        const userOk = await sendChatMessage({ message: trimmedMessage, sender: 'user' });
        if (!userOk) throw new Error('Failed to send');
        await fetchMessages({ silent: true });
        await sendSupportMessage('How would you like us to connect with you?');
        setInputText('');
        setEnquiryStep('channel');
        return;
      }

      if (enquiryStep === 'contact') {
        if (enquiryChannel === 'email') {
          const emailOk = isValidEmail(trimmedMessage);
          if (!emailOk) {
            setError('That email address looks invalid. Please use a format like name@company.com.');
            return;
          }
        } else {
          const phoneOk = isValidPhoneNumber(trimmedMessage);
          if (!phoneOk) {
            setError(
              enquiryChannel === 'whatsapp'
                ? 'Please enter a valid WhatsApp number.'
                : 'Please enter a valid phone number.'
            );
            return;
          }
        }
        const userOk = await sendChatMessage({ message: trimmedMessage, sender: 'user' });
        if (!userOk) throw new Error('Failed to send');
        await fetchMessages({ silent: true });
        await sendSupportMessage('Your good name please');
        setInputText('');
        setEnquiryStep('name');
        return;
      }

      if (enquiryStep === 'name') {
        const userOk = await sendChatMessage({ message: trimmedMessage, sender: 'user' });
        if (!userOk) throw new Error('Failed to send');
        await fetchMessages({ silent: true });
        await sendSupportMessage(
          'Thank you! We have received your enquiry and our team will get in touch using the details you shared.'
        );
        await sendSupportMessage(POST_ENQUIRY_MAIN_MENU_MESSAGE);
        setInputText('');
        setEnquiryStep(null);
        setEnquiryChannel(null);
        setShowInitialOptions(true);
        return;
      }

      const res = await fetch(`${getApiBaseUrl()}/api/chat/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmedMessage,
          sender: 'user',
          visitorId,
          sendToWhatsApp: false,
        }),
      });
      if (!res.ok) {
        throw new Error(`Failed to send message (${res.status})`);
      }
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'generate_lead'
      });
      setInputText('');
      await fetchMessages({ silent: true });
    } catch (err) {
      setError('Unable to send message right now.');
      console.warn('Failed to send chat message:', err);
    } finally {
      setIsSending(false);
    }
  };

  const handleChatOpen = () => {
    setIsChatOpen(true);
  };

  const enquiryInputPlaceholder =
    enquiryStep === 'info'
      ? 'What information are you looking for?'
      : enquiryStep === 'contact' && enquiryChannel === 'email'
        ? 'Enter your email'
        : enquiryStep === 'contact'
          ? 'Enter your phone number'
          : enquiryStep === 'name'
            ? 'Your good name'
            : 'Type your message...';

  return (
    <>
      {isChatOpen && (
        <div
          className={`whatsapp-chat-popup${showCalendlyEmbed ? ' whatsapp-chat-popup--calendly' : ''}`}
          role="dialog"
          aria-label="Chat with us"
        >
          <div className="whatsapp-chat-header">
            <h3>{showCalendlyEmbed ? 'Book a demo' : 'Chat with us'}</h3>
            <button
              type="button"
              className="whatsapp-chat-close"
              onClick={() => {
                setIsChatOpen(false);
                setShowCalendlyEmbed(false);
              }}
              aria-label="Close chat popup"
            >
              ×
            </button>
          </div>

          <div
            className={`whatsapp-chat-messages${showCalendlyEmbed ? ' whatsapp-chat-messages--compact' : ''}`}
            aria-live="polite"
          >
            {isLoadingMessages && (
              <div className="whatsapp-chat-bubble whatsapp-chat-bubble-support">Loading messages...</div>
            )}
            {messages.map((chatMessage) => (
              <div
                key={chatMessage.id}
                className={`whatsapp-chat-bubble whatsapp-chat-bubble-${chatMessage.bubbleClass}`}
              >
                {renderMessageWithLinks(chatMessage.text)}
              </div>
            ))}
            {showInitialOptions && (
              <div className="whatsapp-chat-options" aria-label="Chatbot main options">
                {INITIAL_CHAT_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className="whatsapp-chat-option-button"
                    onClick={() => handleInitialOptionSelect(option.label)}
                    disabled={isSending}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
            {showServicePdfOptions && (
              <div className="whatsapp-chat-options" aria-label="Service PDF choices">
                {SERVICE_PDF_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className="whatsapp-chat-option-button whatsapp-chat-option-button-secondary"
                    onClick={() => handleServicePdfSelect(option)}
                    disabled={isSending}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
            {enquiryStep === 'channel' && (
              <div className="whatsapp-chat-options" aria-label="Preferred contact method">
                {ENQUIRY_CHANNEL_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className="whatsapp-chat-option-button whatsapp-chat-option-button-secondary"
                    onClick={() => handleEnquiryChannelSelect(option.label)}
                    disabled={isSending}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
            {error && <div className="whatsapp-chat-bubble whatsapp-chat-bubble-support">{error}</div>}
          </div>

          {showCalendlyEmbed && (
            <div className="whatsapp-calendly-stack">
              <div className="whatsapp-calendly-toolbar">
                <button type="button" className="whatsapp-calendly-back" onClick={handleCalendlyBack}>
                  ← Back to menu
                </button>
              </div>
              <div
                ref={calendlyHostRef}
                className="whatsapp-calendly-host"
                aria-label="Book a demo or consultation"
              />
            </div>
          )}

          {!showCalendlyEmbed && (
            <div className="whatsapp-chat-input-row">
              <input
                type="text"
                className="whatsapp-chat-input"
                placeholder={enquiryInputPlaceholder}
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value);
                  if (error) setError('');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                disabled={isSending || enquiryStep === 'channel'}
              />
              <button
                type="button"
                className="whatsapp-chat-send"
                onClick={handleSend}
                disabled={isSending || enquiryStep === 'channel'}
              >
                Send
              </button>
            </div>
          )}
        </div>
      )}

      <button
        type="button"
        className="whatsapp-float"
        onClick={handleChatOpen}
        aria-label="Open chat popup"
        title="Chat with us"
      >
        <span className="whatsapp-float-inner">
          <span className="whatsapp-bot-icon" aria-hidden="true">
            <span className="whatsapp-bot-orbit" />
            <span className="whatsapp-bot-antenna" />
            <span className="whatsapp-bot-face">
              <span className="whatsapp-bot-visor" />
              <span className="whatsapp-bot-mouth" />
            </span>
            <span className="whatsapp-bot-spark" />
          </span>
        </span>
      </button>
    </>
  );
}

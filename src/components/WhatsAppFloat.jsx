import React, { useCallback, useEffect, useState } from 'react';
import './WhatsAppFloat.css';
import { FaWhatsapp } from 'react-icons/fa';
import { getApiBaseUrl } from '../utils/urlHelper';

const DEFAULT_SUPPORT_MESSAGE = {
  id: 'support_welcome',
  bubbleClass: 'support',
  text: 'Welcome! Let us know what you need and our team will get back to you.',
};

const VISITOR_STORAGE_KEY = 'rio_website_chat_visitor_id';

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

export default function WhatsAppFloat() {
  const [visitorId] = useState(() => getOrCreateVisitorId());
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  const [messages, setMessages] = useState([DEFAULT_SUPPORT_MESSAGE]);

  /** 'user' = right-aligned bubble; anything else uses support (left) styling */
  const normalizeChatMessage = (m) => {
    if (!m) return null;
    const rawSender = typeof m.sender === 'string' ? m.sender.trim().toLowerCase() : '';
    const bubbleClass = rawSender === 'user' ? 'user' : 'support';
    const text = typeof m.message === 'string' ? m.message : (m.text || '');
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

  const handleSend = async () => {
    const trimmedMessage = inputText.trim();
    if (!trimmedMessage || isSending || !visitorId) return;

    setIsSending(true);
    setError('');
    try {
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
      setInputText('');
      await fetchMessages({ silent: true });
    } catch (err) {
      setError('Unable to send message right now.');
      console.warn('Failed to send chat message:', err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {isChatOpen && (
        <div className="whatsapp-chat-popup" role="dialog" aria-label="Chat with us">
          <div className="whatsapp-chat-header">
            <h3>Chat with us</h3>
            <button
              type="button"
              className="whatsapp-chat-close"
              onClick={() => setIsChatOpen(false)}
              aria-label="Close chat popup"
            >
              ×
            </button>
          </div>

          <div className="whatsapp-chat-messages" aria-live="polite">
            {isLoadingMessages && <div className="whatsapp-chat-bubble whatsapp-chat-bubble-support">Loading messages...</div>}
            {messages.map((chatMessage) => (
              <div
                key={chatMessage.id}
                className={`whatsapp-chat-bubble whatsapp-chat-bubble-${chatMessage.bubbleClass}`}
              >
                {chatMessage.text}
              </div>
            ))}
            {error && <div className="whatsapp-chat-bubble whatsapp-chat-bubble-support">{error}</div>}
          </div>

          <div className="whatsapp-chat-input-row">
            <input
              type="text"
              className="whatsapp-chat-input"
              placeholder="Type your message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <button
              type="button"
              className="whatsapp-chat-send"
              onClick={handleSend}
              disabled={isSending}
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        className="whatsapp-float"
        onClick={() => setIsChatOpen(true)}
        aria-label="Open chat popup"
        title="Chat with us"
      >
        <span className="whatsapp-float-inner">
          <FaWhatsapp className="whatsapp-float-icon" aria-hidden="true" />
        </span>
      </button>
    </>
  );
}

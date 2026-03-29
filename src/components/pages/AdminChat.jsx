import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getApiBaseUrl } from '../../utils/urlHelper';
import './AdminChat.css';
import { FiSearch, FiSend, FiUser } from 'react-icons/fi';

/** Must match Backend/server.js LEGACY_VISITOR_KEY for ?visitorId= filter */
const LEGACY_VISITOR_QUERY = '__legacy__';

/** sessionStorage key — token must match server ADMIN_CHAT_TOKEN */
const ADMIN_CHAT_TOKEN_STORAGE_KEY = 'rio_admin_chat_token';

function conversationLabel(c) {
  if (c.visitorId == null) return 'Legacy / no visitor ID';
  if (String(c.visitorId).startsWith('wa:')) return `WhatsApp ${String(c.visitorId).slice(3)}`;
  return String(c.visitorId).length > 36 ? `${String(c.visitorId).slice(0, 8)}…` : String(c.visitorId);
}

function conversationVisitorIdLine(c) {
  if (c.visitorId == null) return 'visitorId: (none)';
  return `ID: ${String(c.visitorId)}`;
}

/** Map API visitorId (null = legacy) to internal selection key */
function visitorIdToSelectionKey(visitorId) {
  return visitorId == null ? LEGACY_VISITOR_QUERY : visitorId;
}

function isAdminMessage(item) {
  return String(item?.sender || '').toLowerCase() === 'admin';
}

function inboundSenderLabel(sender) {
  const s = String(sender || '').toLowerCase();
  if (s === 'user') return 'Visitor';
  if (s === 'customer') return 'WhatsApp';
  if (s === 'support') return 'Support';
  return 'Contact';
}

function formatMessageTime(ts) {
  if (!ts) return '';
  try {
    return new Date(ts).toLocaleString(undefined, { dateStyle: 'short', timeStyle: 'short' });
  } catch {
    return '';
  }
}

export default function AdminChat() {
  const [authToken, setAuthToken] = useState(() => {
    try {
      return sessionStorage.getItem(ADMIN_CHAT_TOKEN_STORAGE_KEY) || '';
    } catch {
      return '';
    }
  });
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [conversations, setConversations] = useState([]);
  const [selectedKey, setSelectedKey] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isLoadingList, setIsLoadingList] = useState(true);
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const messagesScrollRef = useRef(null);

  const authFetchHeaders = useMemo(
    () => (authToken ? { Authorization: `Bearer ${authToken}` } : {}),
    [authToken]
  );

  const clearAuth = useCallback(() => {
    try {
      sessionStorage.removeItem(ADMIN_CHAT_TOKEN_STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setAuthToken('');
    setConversations([]);
    setSelectedKey(null);
    setMessages([]);
  }, []);

  const loadConversations = useCallback(async ({ silent = false } = {}) => {
    if (!authToken) return;
    if (!silent) {
      setIsLoadingList(true);
      setError('');
    }
    try {
      const res = await fetch(`${getApiBaseUrl()}/api/chat/conversations`, {
        headers: authFetchHeaders,
      });
      if (res.status === 401) {
        clearAuth();
        if (!silent) setLoginError('Session expired or invalid token. Sign in again.');
        return;
      }
      if (!res.ok) throw new Error(`Failed to load conversations (${res.status})`);
      const data = await res.json();
      const list = Array.isArray(data?.data) ? data.data : [];
      setConversations(list);
      setSelectedKey((prev) => {
        if (prev != null && list.some((c) => visitorIdToSelectionKey(c.visitorId) === prev)) {
          return prev;
        }
        if (list.length === 0) return null;
        return visitorIdToSelectionKey(list[0].visitorId);
      });
      if (!silent) setError('');
    } catch (err) {
      console.warn('Failed to load conversations:', err);
      if (!silent) {
        setError('Unable to load conversations right now.');
      }
    } finally {
      if (!silent) {
        setIsLoadingList(false);
      }
    }
  }, [authToken, authFetchHeaders, clearAuth]);

  const loadMessages = useCallback(async (selectionKey, { silent = false } = {}) => {
    if (!authToken) return;
    if (selectionKey == null) {
      setMessages([]);
      return;
    }
    if (!silent) {
      setIsLoadingMessages(true);
      setError('');
    }
    try {
      const qs = new URLSearchParams({ visitorId: selectionKey });
      const res = await fetch(`${getApiBaseUrl()}/api/chat/messages?${qs.toString()}`, {
        headers: authFetchHeaders,
      });
      if (res.status === 401) {
        clearAuth();
        if (!silent) setLoginError('Session expired or invalid token. Sign in again.');
        return;
      }
      if (!res.ok) throw new Error(`Failed to load messages (${res.status})`);
      const data = await res.json();
      setMessages(Array.isArray(data?.data) ? data.data : []);
      if (!silent) setError('');
    } catch (err) {
      console.warn('Failed to load admin chat messages:', err);
      if (!silent) {
        setError('Unable to load messages right now.');
        setMessages([]);
      }
    } finally {
      if (!silent) {
        setIsLoadingMessages(false);
      }
    }
  }, [authToken, authFetchHeaders, clearAuth]);

  useEffect(() => {
    if (!authToken) {
      setIsLoadingList(false);
      return;
    }
    loadConversations({ silent: false });
  }, [authToken, loadConversations]);

  useEffect(() => {
    if (!authToken) return;
    loadMessages(selectedKey, { silent: false });
  }, [authToken, selectedKey, loadMessages]);

  useEffect(() => {
    if (!authToken) return undefined;
    const id = setInterval(() => {
      loadConversations({ silent: true });
      if (selectedKey != null) {
        loadMessages(selectedKey, { silent: true });
      }
    }, 1000);
    return () => clearInterval(id);
  }, [authToken, selectedKey, loadConversations, loadMessages]);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    const t = loginPassword.trim();
    if (!t) {
      setLoginError('Enter the access token.');
      return;
    }
    try {
      sessionStorage.setItem(ADMIN_CHAT_TOKEN_STORAGE_KEY, t);
    } catch {
      setLoginError('Could not save session in this browser.');
      return;
    }
    setAuthToken(t);
    setLoginPassword('');
    setLoginError('');
  };

  const handleSendReply = async () => {
    const trimmedReply = replyText.trim();
    if (!trimmedReply || isSending || selectedKey == null) return;

    setIsSending(true);
    setError('');
    try {
      const visitorIdForBody = selectedKey === LEGACY_VISITOR_QUERY ? null : selectedKey;
      const res = await fetch(`${getApiBaseUrl()}/api/chat/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...authFetchHeaders,
        },
        body: JSON.stringify({
          message: trimmedReply,
          sender: 'admin',
          visitorId: visitorIdForBody,
          sendToWhatsApp: false,
        }),
      });

      if (res.status === 401) {
        clearAuth();
        setLoginError('Session expired or invalid token. Sign in again.');
        return;
      }
      if (!res.ok) {
        throw new Error(`Failed to send reply (${res.status})`);
      }

      setReplyText('');
      await loadConversations({ silent: true });
      await loadMessages(selectedKey, { silent: true });
    } catch (err) {
      console.warn('Failed to send admin reply:', err);
      setError('Unable to send reply right now.');
    } finally {
      setIsSending(false);
    }
  };

  const selectedConversationMeta =
    selectedKey == null
      ? null
      : conversations.find((c) => visitorIdToSelectionKey(c.visitorId) === selectedKey);

  const sortedMessages = useMemo(
    () =>
      [...messages].sort(
        (a, b) => new Date(a.timestamp || 0).getTime() - new Date(b.timestamp || 0).getTime()
      ),
    [messages]
  );

  const filteredConversations = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return conversations;
    return conversations.filter((c) => {
      const visitor = c.visitorId == null ? '' : String(c.visitorId);
      const preview = c.lastMessage == null ? '' : String(c.lastMessage);
      const time = c.lastTimestamp == null ? '' : String(c.lastTimestamp);
      return (
        visitor.toLowerCase().includes(q) ||
        preview.toLowerCase().includes(q) ||
        time.toLowerCase().includes(q)
      );
    });
  }, [conversations, searchQuery]);

  useEffect(() => {
    if (!messagesScrollRef.current) return;
    messagesScrollRef.current.scrollTop = messagesScrollRef.current.scrollHeight;
  }, [selectedKey, messages.length]);

  if (!authToken) {
    return (
      <main className="admin-chat-app">
        <h1 className="admin-chat-app-title">Support inbox</h1>
        <div className="admin-chat-login-card">
          <p className="admin-chat-login-intro">
            This page is restricted. Enter the same secret as <code>ADMIN_CHAT_TOKEN</code> in the
            server <code>.env</code> (not published in the frontend build).
          </p>
          <form className="admin-chat-login-form" onSubmit={handleAdminLogin}>
            <label className="admin-chat-login-label" htmlFor="admin-chat-token-input">
              Access token
            </label>
            <input
              id="admin-chat-token-input"
              className="admin-chat-login-input"
              type="password"
              autoComplete="off"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="Paste admin token"
            />
            {loginError ? (
              <p className="admin-chat-login-error" role="alert">
                {loginError}
              </p>
            ) : null}
            <button type="submit" className="admin-chat-login-submit">
              Sign in
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="admin-chat-app">
      <div className="admin-chat-app-header-row">
        <h1 className="admin-chat-app-title">Support inbox</h1>
        <button type="button" className="admin-chat-logout-btn" onClick={clearAuth}>
          Sign out
        </button>
      </div>

      <div className="admin-chat-layout">
        <aside className="admin-chat-sidebar" aria-label="Conversations">
          <div className="admin-chat-sidebar-header">Chats</div>
          <div className="admin-chat-sidebar-search">
            <FiSearch className="admin-chat-sidebar-search-icon" aria-hidden="true" />
            <input
              type="text"
              className="admin-chat-sidebar-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search visitors…"
              aria-label="Search conversations"
            />
          </div>
          <div className="admin-chat-conversation-list">
            {isLoadingList && <p className="admin-chat-sidebar-empty">Loading…</p>}
            {!isLoadingList && conversations.length === 0 && (
              <p className="admin-chat-sidebar-empty">No conversations yet.</p>
            )}
            {!isLoadingList &&
              filteredConversations.map((c) => {
                const key = visitorIdToSelectionKey(c.visitorId);
                const active = selectedKey === key;
                return (
                  <button
                    key={key}
                    type="button"
                    className={`admin-chat-conv-item${active ? ' admin-chat-conv-item--active' : ''}`}
                    onClick={() => setSelectedKey(key)}
                  >
                    <div className="admin-chat-conv-title">{conversationLabel(c)}</div>
                    <div className="admin-chat-conv-id">{conversationVisitorIdLine(c)}</div>
                    <div className="admin-chat-conv-preview">{c.lastMessage || '(no message)'}</div>
                    <div className="admin-chat-conv-time">
                      {c.lastTimestamp ? formatMessageTime(c.lastTimestamp) : '—'}
                    </div>
                  </button>
                );
              })}
          </div>
        </aside>

        <section className="admin-chat-main" aria-label="Active conversation">
          <header className="admin-chat-thread-header">
            {selectedKey == null ? (
              'Select a chat'
            ) : (
              <>
                {selectedConversationMeta
                  ? conversationLabel(selectedConversationMeta)
                  : conversationLabel({ visitorId: selectedKey === LEGACY_VISITOR_QUERY ? null : selectedKey })}
                <div className="admin-chat-thread-sub">
                  {selectedConversationMeta
                    ? conversationVisitorIdLine(selectedConversationMeta)
                    : conversationVisitorIdLine({ visitorId: selectedKey === LEGACY_VISITOR_QUERY ? null : selectedKey })}
                </div>
              </>
            )}
          </header>

          <div className="admin-chat-messages-scroll" ref={messagesScrollRef}>
            {selectedKey == null && (
              <p className="admin-chat-messages-placeholder">Select a conversation to view messages.</p>
            )}
            {selectedKey != null && isLoadingMessages && (
              <p className="admin-chat-messages-placeholder">Loading messages…</p>
            )}
            {selectedKey != null && !isLoadingMessages && error && (
              <div className="admin-chat-error-banner" role="alert">
                {error}
              </div>
            )}
            {selectedKey != null &&
              !isLoadingMessages &&
              !error &&
              messages.length === 0 && (
                <p className="admin-chat-messages-placeholder">No messages in this thread yet.</p>
              )}

            {selectedKey != null &&
              !isLoadingMessages &&
              sortedMessages.map((item) => {
                const admin = isAdminMessage(item);
                return (
                  <div
                    key={item.id}
                    className={`admin-chat-msg-row ${admin ? 'admin-chat-msg-row--outbound' : 'admin-chat-msg-row--inbound'}`}
                  >
                    {!admin && (
                      <div className="admin-chat-avatar admin-chat-avatar--inbound" aria-hidden="true">
                        <FiUser />
                      </div>
                    )}
                    <div className="admin-chat-bubble-wrap">
                      <span className="admin-chat-bubble-label">
                        {admin ? 'You' : inboundSenderLabel(item.sender)}
                      </span>
                      <div
                        className={`admin-chat-bubble ${admin ? 'admin-chat-bubble--outbound' : 'admin-chat-bubble--inbound'}`}
                      >
                        {item.text || item.message || ''}
                      </div>
                      <span className="admin-chat-bubble-time">{formatMessageTime(item.timestamp)}</span>
                    </div>
                    {admin && (
                      <div className="admin-chat-avatar admin-chat-avatar--outbound" aria-hidden="true">
                        <FiUser />
                      </div>
                    )}
                  </div>
                );
              })}
          </div>

          <footer className="admin-chat-compose">
            <input
              type="text"
              className="admin-chat-compose-input"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder={selectedKey == null ? 'Select a conversation…' : 'Type a message'}
              disabled={selectedKey == null}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSendReply();
                }
              }}
              aria-label="Reply message"
            />
            <button
              type="button"
              className="admin-chat-compose-send"
              onClick={handleSendReply}
              disabled={isSending || selectedKey == null}
              title="Send"
              aria-label="Send message"
            >
              {isSending ? 'Sending…' : 'Send'}
              <FiSend className="admin-chat-compose-send-icon" aria-hidden="true" />
            </button>
          </footer>
        </section>
      </div>
    </main>
  );
}

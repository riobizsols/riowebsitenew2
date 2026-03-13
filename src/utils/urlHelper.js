/**
 * Get the contact page URL
 * Always uses relative path so React Router handles navigation
 * Works correctly in both localhost and production environments
 */
export const getContactUrl = () => {
  return '/products/rio-alm/contact';
};

/**
 * API base URL for backend (send-email, visitor tracking).
 * - On localhost: use http://localhost:3003 so dev server talks to local backend.
 * - On production (riobizsols.com etc.): use '' so requests go to same origin.
 * One build works in both environments.
 */
export const getApiBaseUrl = () => {
  if (typeof window === 'undefined') return '';
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  return isLocal ? 'http://localhost:3003' : '';
};

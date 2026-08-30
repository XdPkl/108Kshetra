/**
 * Vitest global setup — jest-dom matchers and jsdom polyfills.
 */
import '@testing-library/jest-dom/vitest';

// jsdom does not enable storage in this configuration — provide an
// in-memory localStorage so the yatra stores behave as in a browser.
if (typeof window !== 'undefined' && !window.localStorage) {
  const backing = new Map();
  window.localStorage = {
    getItem: (key) => (backing.has(key) ? backing.get(key) : null),
    setItem: (key, value) => { backing.set(key, String(value)); },
    removeItem: (key) => { backing.delete(key); },
    clear: () => backing.clear(),
  };
}

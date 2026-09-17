/* =========================================================
   TurkmenSon — service worker
   Caches the app shell so the site keeps working offline /
   on a flaky connection, and works fine at any subpath (e.g.
   GitHub Pages project sites) because every URL below is
   resolved relative to this file's own location.
   ========================================================= */

const CACHE_VERSION = 'turkmenson-v1';

const APP_SHELL = [
  './',
  'index.html',
  'css/style.css',
  'js/icons.js',
  'js/data.js',
  'js/dictionary.js',
  'js/app.js',
  'manifest.json',
  'fonts/Vazirmatn-Regular.woff2',
  'fonts/Vazirmatn-Medium.woff2',
  'fonts/Vazirmatn-SemiBold.woff2',
  'fonts/Vazirmatn-Bold.woff2',
  'fonts/Vazirmatn-ExtraBold.woff2',
  'fonts/Vazirmatn-Black.woff2',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      // Resolve each path against the service worker's own URL so this
      // works whether the site lives at the domain root or a sub-path.
      const urls = APP_SHELL.map((p) => new URL(p, self.registration.scope).toString());
      return cache.addAll(urls);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // never touch cross-origin requests

  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
        }
        return res;
      }).catch(() => {
        // Offline and not cached: for page navigations, fall back to the
        // cached app shell so the SPA still boots.
        if (req.mode === 'navigate') {
          return caches.match(new URL('index.html', self.registration.scope).toString());
        }
        return cached;
      });
      return cached || network;
    })
  );
});

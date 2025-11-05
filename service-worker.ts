/// <reference lib="webworker" />

// FIX: Wrap the entire script in an IIFE to scope variables and avoid redeclaration errors.
(() => {
  const CACHE_NAME = 'real-estate-intake-v2'; // Increment version to force update
  const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    // Note: External CDN scripts are not cached by default with this strategy,
    // which is generally fine as they are often already cached by the browser.
  ];

  // Install the service worker and cache the app shell
  (self as unknown as ServiceWorkerGlobalScope).addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
        .catch(err => {
          console.error('Failed to open cache: ', err);
        })
    );
  });

  // Activate the service worker and clean up old caches
  (self as unknown as ServiceWorkerGlobalScope).addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
            return null;
          })
        );
      })
    );
  });

  // Intercept fetch requests and serve from cache if available
  (self as unknown as ServiceWorkerGlobalScope).addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // Cache hit - return response
          if (response) {
            return response;
          }
          // Not in cache - fetch from network
          return fetch(event.request);
        }
      )
    );
  });
})();

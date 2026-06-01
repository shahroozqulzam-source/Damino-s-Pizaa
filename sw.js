const CACHE_NAME = 'daminos-pizza-v7';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/menu-data.js',
  '/1.png',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
];

// Install — cache core assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — Network-First for all assets to prevent cache-locking, falling back to cache when offline
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  
  // Only intercept requests for same-origin or fonts/icons
  if (e.request.method !== 'GET') return;

  e.respondWith(
    fetch(e.request)
      .then(response => {
        if (response.ok) {
          const copy = response.clone();
          // Use a clean key for data.json to bypass query parameters
          const cacheKey = url.pathname.endsWith('/data.json') ? '/data.json' : e.request;
          caches.open(CACHE_NAME).then(cache => cache.put(cacheKey, copy));
        }
        return response;
      })
      .catch(() => {
        const cacheKey = url.pathname.endsWith('/data.json') ? '/data.json' : e.request;
        return caches.match(cacheKey);
      })
  );
});

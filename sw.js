self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
  // Базовый перехват запросов, чтобы браузер признал PWA
  e.respondWith(fetch(e.request));
});
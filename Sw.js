// sw.js simplificado
self.addEventListener('install', e => e.waitUntil(caches.open('pwa-cache')));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));

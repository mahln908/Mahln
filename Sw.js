// sw.js - Service Worker para PWA
const CACHE_NAME = 'sabor-de-casa-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/receita.html',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// Instalação do Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar requisições
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Retorna o arquivo do cache se encontrado
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

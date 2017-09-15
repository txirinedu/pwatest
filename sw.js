var dataCacheName = 'shell-app-data-v1';
var cacheName = 'shell-app-poc-v1';
var filesToCache = [
    '/pwatest/',
    '/pwatest/index.html',
    '/pwatest/manifest.json',
    /*'https://fonts.googleapis.com/css?family=Roboto',
    'https://fonts.googleapis.com/icon?family=Material+Icons', 
    'https://code.getmdl.io/1.3.0/material.indigo-pink.min.css',
    'https://code.getmdl.io/1.3.0/material.min.js',*/
    '/pwatest/assets/js/utils/utils.js',
    '/pwatest/assets/js/init.js',
    '/pwatest/assets/js/templates/loader.js'
    

];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    // e.waitUntil(
    caches.open(cacheName).then(function(cache) {
        console.log('[ServiceWorker] Caching app shell '  + filesToCache);
        return cache.addAll(filesToCache);
    });
    //);
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    //e.waitUntil(
    caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName && key !== dataCacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
        // );
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    console.log('[Service Worker] Fetch', event.request.url);
   
    var dataUrl = 'assets/data/';
    if (event.request.url.indexOf(dataUrl) > -1) {
    // Put data handler code here
        event.respondWith(
          fetch(event.request)
            .then(function(response) {
              return caches.open(dataCacheName).then(function(cache) {
                cache.put(event.request, response.clone());
                console.log('[ServiceWorker] Fetched&Cached Data');
                return response;
              });
            }).catch(function() {
                console.log('[ServiceWorker] Cached Data');
                return caches.match(event.request);
            })
        );
    } else {
        console.log('[ServiceWorker] Network Data for ' + event.request.url);
        event.respondWith(
            fetch(event.request).catch(function() {
                console.log('[ServiceWorker] Cached Data');
                return caches.match(event.request);
            })
        );
    }

});

self.addEventListener('foreignfetch', event => {
  // Assume that requestLogic() is a custom function that takes
  // a Request and returns a Promise which resolves with a Response.
  event.respondWith(
    requestLogic(event.request).then(response => {
      return {
        response: response,
        // Omit to origin to return an opaque response.
        // With this set, the client will receive a CORS response.
        origin: event.origin,
        // Omit headers unless you need additional header filtering.
        // With this set, only Content-Type will be exposed.
        headers: ['Content-Type']
      };
    })
  );
});
const CACHE_NAME = 'iodotcom'

// Assesto catche
const assetsToCache = [
  '/static/styles/main.css',
  '/_next/Feafzr1hQoi1mk8moQdXA/page/_error.js',
  '/_next/Feafzr1hQoi1mk8moQdXA/page/index.js',
  '/_next/Feafzr1hQoi1mk8moQdXA/page/about.js',
  '/static/images/me.jpg',
  '/static/images/logo-sprite.jpg',
  '/static/images/emojis/technologist.png',
  '/static/images/icons/arrow.png',
  '/static/images/icons/facebook.png',
  '/static/images/icons/github.png',
  '/static/images/icons/googleplus.png',
  '/static/images/icons/instagram.png',
  '/static/images/icons/linkedin.png',
  '/static/images/icons/mailbox.png',
  '/static/images/icons/paypal.png',
  '/static/images/icons/soundcloud.png',
  '/static/images/icons/spotify.png',
  '/static/images/icons/twitter.png',
  '/static/images/icons/whatsapp.png',
  'https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css',
  'https://fonts.googleapis.com/css?family=Lato:300,400,700',
  'https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2',
  'https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2',
  'https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2',
  'https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXiWtFCc.woff2',
  'https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2',
  'https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2'
]

self.addEventListener('install', (event) => {
  // waitUntil() ensures that the Service Worker will not
  // install until the code inside has successfully occurred
  event.waitUntil(
    // Create cache with the name supplied above and
    // return a promise for it
    caches.open(CACHE_NAME).then((cache) => {
      // Important to `return` the promise here to have `skipWaiting()`
      // fire after the cache has been updated.
      return cache.addAll(assetsToCache)
    }).then(() => {
      // `skipWaiting()` forces the waiting ServiceWorker to become the
      // active ServiceWorker, triggering the `onactivate` event.
      // Together with `Clients.claim()` this allows a worker to take effect
      // immediately in the client(s).
      return self.skipWaiting()
    })
  )
})

// Activate event
// Be sure to call self.clients.claim()
self.addEventListener('activate', () => {
  // `claim()` sets this worker as the active worker for all clients that
  // match the workers scope and triggers an `oncontrollerchange` event for
  // the clients.
  return self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  // Get current path
  const requestUrl = new URL(event.request.url)

  // Save all resources on origin path only
  if (requestUrl.origin === location.origin) {
    if (requestUrl.pathname === '/') {
      event.respondWith(
        // Open the cache created when install
        caches.open(CACHE_NAME).then((cache) => {
          // Go to the network to ask for that resource
          return fetch(event.request).then((networkResponse) => {
            // Add a copy of the response to the cache (updating the old version)
            cache.put(event.request, networkResponse.clone())
            // Respond with it
            return networkResponse
          }).catch(() => {
            // If there is no internet connection, try to match the request
            // to some of our cached resources
            return cache.match(event.request)
          })
        })
      )
    }
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response
        }


        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then((response) => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // IMPORTANT: Clone the response. A response is a stream
          // and because we want the browser to consume the response
          // as well as the cache consuming the response, we need
          // to clone it so we have two streams.
          const responseToCache = response.clone();

          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));

          return response;
        }
        );
      })
  )

  // event.respondWith(fetch(event.request).catch(() => caches.match(event.request)))

  // event.respondWith(
  //   caches.match(event.request).then((response) => response || fetch(event.request))
  // )
})
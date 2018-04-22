const cacheName = 'iodotcom'

// Assesto catche
const assetsToCache = [
  '/_next/static/style.css',
  '/_next/e53ad752-f9f3-4c03-9fd2-f3911ecb59df/page/_error.js',
  '/_next/e53ad752-f9f3-4c03-9fd2-f3911ecb59df/page/index.js',
  '/_next/e53ad752-f9f3-4c03-9fd2-f3911ecb59df/page/talks.js',
  '/static/images/me.jpg',
  '/static/images/logo-sprite.png',
  '/static/images/emojis/technologist.png'
]

self.addEventListener('install', (event) => {
  // waitUntil() ensures that the Service Worker will not
  // install until the code inside has successfully occurred
  event.waitUntil(
    // Create cache with the name supplied above and
    // return a promise for it
    caches.open(cacheName).then((cache) => {
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
self.addEventListener('activate', (event) => {
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
        caches.open(cacheName).then((cache) => {
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
    caches.match(event.request).then((response) => response || fetch(event.request))
  )
})

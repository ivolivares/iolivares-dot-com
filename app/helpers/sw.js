export async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      // const registration = await navigator.serviceWorker.getRegistration('/')
      // console.log(registration)
      // if (!registration) {
      //   await navigator.serviceWorker.register('/sw.js', {
      //     scope: '/'
      //   })

      //   console.log(`Registration successful`)
      // }
      const reg = await navigator.serviceWorker.register('/sw.js')
      // updatefound is fired if service-worker.js changes.
      reg.onupdatefound = () => {
        // The updatefound event implies that reg.installing is set see
        // https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
        const installingWorker = reg.installing

        installingWorker.onstatechange = function () {
          switch (installingWorker.state) {
          case 'installed':
            if (navigator.serviceWorker.controller) {
              // At this point, the old content will have been purged and the fresh content will
              // have been added to the cache.
              // It's the perfect time to display a "New content is available please refresh."
              // message in the page's interface.
              console.log('New or updated content is available.')
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a "Content is cached for offline use." message.
              console.log('Content is now available offline!')
            }
            break

          case 'redundant':
            console.error('The installing service worker became redundant.')
            break
          }
        }
      }

    } catch (e) {
      console.warn(`Registration failed: ${e}`)
    }
  }
}


// module.exports = () => {
//   if ('serviceWorker' in navigator) {
//       navigator.serviceWorker.getRegistration('/').then(function (registration) {
//         if (!registration) {
//           navigator.serviceWorker.register('/service-worker.js', {
//             scope: '/'
//           }).then(function (registration) {
//             console.log('Service worker registration succeeded:', registration)
//           }).catch(function (error) {
//             console.log('Service worker registration failed:', error)
//           })
//         }
//       }).catch(e => console.warn(`Registration failed: ${e}`))
//   } else {
//     console.log('Service workers are not supported.')
//   }
// }

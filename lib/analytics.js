/**
 * From Panelbear documentation and some inspirations from `useAnalytics` hook by Lee Robinson
 * @see https://panelbear.com/docs/integration-nextjs/
 * @see https://github.com/leerob/leerob.io/blob/main/lib/analytics.js
*/
import * as Panelbear from '@panelbear/panelbear-js'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useAnalytics = () => {
  const router = useRouter()

  useEffect(() => {
    Panelbear.load(process.env.NEXT_PUBLIC_PANELBEAR_SITE_ID, {
      honorDNT: true, // Ethical config
      debug: !(process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'),
    })

    // Trigger initial page view
    Panelbear.trackPageview()

    // Add on route change handler for client-side navigation
    const handleRouteChange = () => Panelbear.trackPageview()
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
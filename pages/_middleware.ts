import { NextRequest, NextResponse, NextFetchEvent } from 'next/server'
import { PERMANENT_REDIRECT } from 'http-status'

import securityHeaders from '@io/lib/securityHeaders'
import redirects from '@io/data/redirects'

export function middleware(req: NextRequest, _event: NextFetchEvent) {
  const { pathname } = req.nextUrl
  const redirectTo = redirects.filter(redirect => redirect.source === pathname)[0]
  
  console.debug(pathname)
  console.debug(redirectTo)
  
  if (redirectTo) {
    console.info('Redirecting...')
    return NextResponse.redirect(redirectTo.destination, PERMANENT_REDIRECT)
  }
  
  const response = NextResponse.next()
  return securityHeaders(response)
}

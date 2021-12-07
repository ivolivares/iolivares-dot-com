import { NextRequest, NextResponse, NextFetchEvent } from 'next/server'
import { PERMANENT_REDIRECT } from 'http-status'

import securityHeaders from '@io/lib/securityHeaders'
import redirects from '@io/data/redirects'

export function middleware(req: NextRequest, _event: NextFetchEvent) {
  const { pathname } = req.nextUrl
  const response = securityHeaders(NextResponse)

  console.debug(response)

  console.debug(pathname)
  const redirectTo = redirects.filter(redirect => {
    console.debug(redirect)
    return redirect.source === pathname
  })[0]

  console.debug(redirectTo)

  if (redirectTo) {
    console.debug('Redirecting...')
    return NextResponse.redirect(redirectTo.destination, PERMANENT_REDIRECT)
  }

  return response
}

import type { NextRequest, NextFetchEvent } from 'next/server'
import { NextResponse } from 'next/server'
import { PERMANENT_REDIRECT } from 'http-status'

import securityHeaders from '@io/lib/securityHeaders'
import redirects from '@io/data/redirects'

export function middleware(req: NextRequest, _event: NextFetchEvent) {
  const { pathname } = req.nextUrl
  const redirectTo = redirects.filter(redirect => pathname.includes(redirect.source))[0]
  
  if (redirectTo) {
    return NextResponse.redirect(redirectTo.destination, PERMANENT_REDIRECT)
  }
  
  const response = NextResponse.next()
  return securityHeaders(response)
}

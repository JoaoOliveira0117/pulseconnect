import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import getAuth from './utils/getAuth'

 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookie = getAuth(request)
  
  if (!cookie) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = { matcher: ["/home/:path*"] }
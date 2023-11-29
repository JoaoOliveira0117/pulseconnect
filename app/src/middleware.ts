import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
// eslint-disable-next-line consistent-return
export function middleware(request: NextRequest) {
	const cookie = request.cookies.get('jwt');

	if (!cookie) {
		return NextResponse.redirect(new URL('/auth', request.url));
	}
}

export const config = { matcher: ['/home/:path*'] };

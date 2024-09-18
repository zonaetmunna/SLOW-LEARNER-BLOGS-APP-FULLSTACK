import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const AuthRoutes = ['/login', '/signup'];

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Get the access token from cookies
	const accessToken = cookies().get('accessToken')?.value;

	// If access token is not found, redirect to login page unless on /login or /signup
	if (!accessToken) {
		if (AuthRoutes.includes(pathname)) {
			return NextResponse.next(); // Allow access to login and signup pages
		} else {
			return NextResponse.redirect(new URL('/login', request.url));
		}
	}

	// If access token is found, redirect to the dashboard if accessing login or signup page
	if (AuthRoutes.includes(pathname)) {
		return NextResponse.redirect(new URL('/dashboard', request.url));
	}

	// Allow access to all other routes if the token is present
	return NextResponse.next();
}

export const config = {
	matcher: ['/', '/login', '/signup', '/dashboard/:path*'],
};

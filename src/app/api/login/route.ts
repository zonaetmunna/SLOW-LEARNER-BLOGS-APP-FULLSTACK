import { NextResponse } from 'next/server';
import { login } from 'prisma/auth';

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { accessToken, refreshToken, needPasswordChange } = await login(body);

		// Create a response and set the refresh token cookie
		const response = NextResponse.json({
			message: 'Login successful',
			data: { accessToken, needPasswordChange },
		});

		// Set the refresh token in a cookie
		response.cookies.set('refreshToken', refreshToken, {
			httpOnly: true, // Prevents JavaScript access to the cookie
			secure: false, // Set to true in production
			// sameSite: 'Strict', // Helps protect against CSRF attacks
			// maxAge: 30 * 24 * 60 * 60, // 30 days
		});

		return response;
	} catch (error) {
		console.log('login error:', error);
		return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
	}
}

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		const refreshToken = await req.headers.getSetCookie();
		console.log('🚀 ~ POST ~ body:', refreshToken);
		const result = await refreshToken(refreshToken);
	} catch (error) {
		console.log('login error:', error);
		return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
	}
}

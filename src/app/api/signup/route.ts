import { NextResponse } from 'next/server';
import { signUp } from 'prisma/auth';

export async function POST(req: Request, res: NextResponse) {
	try {
		const body = await req.json();
		console.log(body);
		const user = await signUp(body);
		return NextResponse.json({ user, message: 'signup success' });
	} catch (error) {
		console.log('signup error:', error);
		return NextResponse.json({ message: 'Internal server error' });
	}
}

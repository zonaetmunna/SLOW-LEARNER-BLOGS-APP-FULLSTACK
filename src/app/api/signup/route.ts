import { NextResponse } from "next/server";
import { signUp } from "prisma/user";

export async function POST(req: Request, res: NextResponse) {
  try {
    const body = await req.json();
    console.log(body);
    const { username, email, password } = body;
    const user = await signUp({ username, email, password });
    return NextResponse.json({ user, message: "signup success" });
  } catch (error) {
    console.log("signup error:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

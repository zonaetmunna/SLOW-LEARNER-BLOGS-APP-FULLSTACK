import { NextResponse } from "next/server";
import { login } from "prisma/user";

export async function POST(req: Request, res: NextResponse) {
  try {
    const body: any = req.json();
    const { email, password } = body;
    const user = await login(email, password);
    return NextResponse.json({ user, message: "login success" });
  } catch (error) {
    console.log("login error:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

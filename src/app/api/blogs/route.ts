import { NextResponse } from "next/server";
import { createPost, getAllPosts } from "prisma/post";

export async function GET(req: Request, res: NextResponse) {
  try {
    const posts = await getAllPosts();
    return NextResponse.json({ posts, message: "get all posts success" });
  } catch (error) {
    console.log("post retrieval error:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
export async function POST(req: Request, res: NextResponse) {
  try {
    const body = await req.json();

    const post = await createPost(body);
    return NextResponse.json({ post, message: "create post success" });
  } catch (error) {
    console.log("post creation error:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

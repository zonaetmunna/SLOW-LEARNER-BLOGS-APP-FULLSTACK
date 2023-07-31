import { NextResponse } from "next/server";
import { deletePost, getPostById, updatePost } from "prisma/post";

export async function PUT(req: Request, res: NextResponse) {
  try {
    const id = req.url.split("/blogs/")[1];
    const body: any = req.json();
    console.log(body);
    const post = await updatePost(id, body);
    return NextResponse.json({ post, message: "update post success" });
  } catch (error) {
    console.log("post update error:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function GET(req: Request, res: NextResponse) {
  try {
    const id = req.url.split("/blogs/")[1];
    const post = await getPostById(id);
    return NextResponse.json({ post, message: "get post success" });
  } catch (error) {
    console.log("post retrieval error:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function DELETE(req: Request, res: NextResponse) {
  try {
    const id = req.url.split("/blogs/")[1];
    const post = await deletePost(id);
    return NextResponse.json({ post, message: "delete post success" });
  } catch (error) {
    console.log("post deletion error:", error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

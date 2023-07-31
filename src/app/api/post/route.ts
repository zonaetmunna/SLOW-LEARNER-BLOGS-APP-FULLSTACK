import { NextApiRequest, NextApiResponse } from "next";
import { createPost, getAllPosts, getPostById } from "prisma/post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { title, content, authorId } = req.body;
      const post = await createPost({ title, content, authorId });
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to create post" });
    }
  } else if (req.method === "GET") {
    try {
      const posts = await getAllPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch posts" });
    }
  } else if (req.method === "GET" && req.query.id) {
    const postId = req.query.id as string;

    try {
      const post = await getPostById(postId);
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "post not found" });
      }
    } catch (error) {
      console.log("post retrieval error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

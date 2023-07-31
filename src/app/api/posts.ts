import { NextApiRequest, NextApiResponse } from "next";
import { createPost, getAllPosts } from "prisma/post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const postData = req.body; // Assuming the request body contains the post data
      console.log(postData);
      const post = await createPost(postData);
      res.status(201).json(post);
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).json({ error: "Failed to create post" });
    }
  } else if (req.method === "GET") {
    try {
      const posts = await getAllPosts();
      res.status(200).json(posts);
    } catch (error) {
      console.error("Error retrieving posts:", error);
      res.status(500).json({ error: "Failed to retrieve posts" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

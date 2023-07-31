import { Like } from "@prisma/client";
import prisma from "./prisma";

// Function to create a new like
export async function createLike(likeData: Omit<Like, "id">): Promise<Like> {
  const like = await prisma.like.create({ data: likeData });
  return like;
}

// Function to get all likes for a specific post
export async function getLikesByPostId(postId: string): Promise<Like[]> {
  const likes = await prisma.like.findMany({ where: { postId } });
  return likes;
}

// Function to delete a like
export async function deleteLike(id: string): Promise<Like | null> {
  const like = await prisma.like.delete({ where: { id } });
  return like;
}

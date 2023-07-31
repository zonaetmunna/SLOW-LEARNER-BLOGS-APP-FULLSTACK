import { Comment } from "@prisma/client";
import prisma from "./prisma";

// Function to create a new comment
export async function createComment(
  commentData: Omit<Comment, "id">
): Promise<Comment> {
  const comment = await prisma.comment.create({ data: commentData });
  return comment;
}

// Function to get all comments for a specific post
export async function getCommentsByPostId(postId: string): Promise<Comment[]> {
  const comments = await prisma.comment.findMany({ where: { postId } });
  return comments;
}

// Function to update a comment
export async function updateComment(
  id: string,
  commentData: Partial<Comment>
): Promise<Comment | null> {
  const comment = await prisma.comment.update({
    where: { id },
    data: commentData,
  });
  return comment;
}

// Function to delete a comment
export async function deleteComment(id: string): Promise<Comment | null> {
  const comment = await prisma.comment.delete({ where: { id } });
  return comment;
}

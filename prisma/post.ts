import prisma from "./prisma";

interface Post {
  id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: Date | null; // Allow Date or null
  updatedAt: Date | null; // Allow Date or null
  authorId: string;
}

export async function createPost(post: Post): Promise<Post> {
  try {
    return await prisma.post.create({
      data: {
        ...post,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  } catch (error) {
    console.error("Error creating post:", error);
    throw new Error("Error creating post");
  }
}

export async function getPostById(id: string): Promise<Post | null> {
  try {
    return await prisma.post.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    throw new Error("Error fetching post by ID");
  }
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    return await prisma.post.findMany();
  } catch (error) {
    console.error("Error fetching all posts:", error);
    throw new Error("Error fetching all posts");
  }
}

export async function updatePost(id: string, post: Post): Promise<Post | null> {
  try {
    return await prisma.post.update({
      where: { id },
      data: {
        ...post,
        updatedAt: new Date(),
      },
    });
  } catch (error) {
    console.error("Error updating post:", error);
    throw new Error("Error updating post");
  }
}

export async function deletePost(id: string): Promise<Post | null> {
  try {
    return await prisma.post.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Error deleting post:", error);
    throw new Error("Error deleting post");
  }
}

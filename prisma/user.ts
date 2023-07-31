import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import prisma from "./prisma";

interface IUser {
  username: string;
  email: string;
  password: string;
}
export const signUp = async (data: IUser): Promise<User> => {
  try {
    // const saltRounds = 10;
    // const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(data);
    const user = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: data.password,
      },
    });
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user");
  }
};

export async function login(
  email: string,
  password: string
): Promise<User | null> {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return null; // User not found
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return null; // Invalid password
  }

  return user;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const user = await prisma.user.findUnique({ where: { email } });
  return user;
}

export async function getAllUsers(): Promise<User[]> {
  const users = await prisma.user.findMany();
  return users;
}

export async function updateUser(
  userId: string,
  userData: Partial<User>
): Promise<User | null> {
  const user = await prisma.user.update({
    where: { id: userId },
    data: userData,
  });
  return user;
}

export async function deleteUser(userId: string): Promise<User | null> {
  const user = await prisma.user.delete({ where: { id: userId } });
  return user;
}

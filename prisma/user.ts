import { User } from '@prisma/client';
import prisma from './prisma';

export async function getUserByEmail(email: string): Promise<User | null> {
	const user = await prisma.user.findUnique({ where: { email } });
	return user;
}

export async function getAllUsers(): Promise<User[]> {
	const users = await prisma.user.findMany();
	return users;
}

export async function updateUser(userId: string, userData: Partial<User>): Promise<User | null> {
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

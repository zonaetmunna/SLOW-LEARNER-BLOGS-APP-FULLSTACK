import config from '@/config';
import { createToken } from '@/utils/createToken';
import { verifyToken } from '@/utils/verifyToken';
import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import prisma from './prisma';

export const signUp = async (data: User) => {
	try {
		// check if user already exists
		const existingUser = await prisma.user.findUnique({
			where: {
				email: data.email,
			},
		});

		if (existingUser) {
			throw new Error('User already exists');
		}

		// hash password
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(data.password, saltRounds);

		// create user at db
		const user = await prisma.user.create({
			data: {
				username: data.username,
				email: data.email,
				password: hashedPassword,
			},
		});

		return user;
	} catch (error) {
		console.error('Error creating user:', error);
		throw new Error('Error creating user');
	}
};

export async function login(data: { email: string; password: string }) {
	console.log('🚀 ~ login12 ~ data:', data);
	if (!data.email) {
		throw new Error('Email is required');
	}

	// check if user exists
	const user = await prisma.user.findUnique({
		where: { email: data.email },
	});

	console.log('🚀 ~ login ~ user:', user);

	// check if user is deleted
	if (!user) {
		throw new Error('Invalid email');
	}

	const isDeleted = user.isDeleted;
	if (isDeleted) {
		throw new Error('User is deleted');
	}

	const passwordMatch = await bcrypt.compare(data.password, user.password);
	if (!passwordMatch) {
		throw new Error('Password does not match');
	}

	// Create token and send to the client
	const jwtPayload = {
		id: user.id,
		role: user.role,
	};

	const accessToken = createToken(jwtPayload, 'jwt_access_secret', '10d');
	const refreshToken = createToken(jwtPayload, 'jwt_refresh_secret', '30d');

	return {
		accessToken,
		refreshToken,
		needPasswordChange: user.needPasswordChange,
	};
}

export const refreshToken = async (token: string) => {
	// checking if the given token is valid
	const decoded = verifyToken(token, config.jwt_refresh_secret as string);

	const { userId, iat } = decoded;

	// checking if the user is exist
	const user = await prisma.user.findUnique({ where: { id: userId } });

	if (!user) {
		throw new Error('User not found');
	}

	// checking if the user is already deleted
	const isDeleted = user?.isDeleted;

	if (isDeleted) {
		throw new Error('User is deleted');
	}

	// checking if the user is blocked
	const userStatus = user?.status;

	if (userStatus === 'blocked') {
		throw new Error('User is blocked');
	}

	// if (
	// 	user.passwordChangedAt &&
	// 	User.isJWTIssuedBeforePasswordChanged(user.passwordChangedAt, iat as number)
	// ) {
	// 	throw new Error('Password changed');
	// }

	const jwtPayload = {
		id: user.id,
		role: user.role,
	};

	const accessToken = createToken(
		jwtPayload,
		config.jwt_access_secret as string,
		config.jwt_access_expires_in as string
	);

	return {
		accessToken,
	};
};

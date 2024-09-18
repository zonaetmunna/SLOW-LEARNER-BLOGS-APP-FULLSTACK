import jwt from 'jsonwebtoken';

export const createToken = (
	jwtPayload: { id: string; role: string },
	secret: string,
	expiresIn: string
) => {
	console.log(jwtPayload, expiresIn);
	return jwt.sign(jwtPayload, secret, {
		expiresIn,
	});
};

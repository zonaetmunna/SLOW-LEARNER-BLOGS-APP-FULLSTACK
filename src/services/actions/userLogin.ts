// "use server";

import { FieldValues } from 'react-hook-form';
import { storeUserInfo } from '../auth.services';
import setAccessToken from './setAccessToken';

export const userLogin = async (data: FieldValues) => {
	const res = await fetch(`http://localhost:3000/api/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
		credentials: 'include',
		// cache: "no-store",
	});
	const userInfo = await res.json();
	console.log('🚀 ~ userLogin ~ userInfo:', userInfo);

	const passwordChangeRequired = userInfo.data.needPasswordChange;

	if (userInfo.data.accessToken) {
		setAccessToken(userInfo.data.accessToken, {
			redirect: '/dashboard',
			passwordChangeRequired,
		});
		storeUserInfo({ accessToken: userInfo.data.accessToken });
	}

	return userInfo;
};

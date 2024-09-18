// "use server";

import { FieldValues } from 'react-hook-form';

export const crateBlog = async (data: FieldValues) => {
	const res = await fetch(`http://localhost:3000/api/blogs`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
		credentials: 'include',
		// cache: "no-store",
	});
	const blogInfo = await res.json();

	return blogInfo;
};

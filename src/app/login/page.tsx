'use client';
import { userLogin } from '@/services/actions/userLogin';
import { storeUserInfo } from '@/services/auth.services';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

type FormData = {
	email: string;
	password: string;
};
const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
	const [error, setError] = useState('');

	const onSubmit: SubmitHandler<FormData> = async (data: { email: string; password: string }) => {
		const loginData = {
			email: data.email,
			password: data.password,
		};
		try {
			const res = await userLogin(loginData);
			console.log('🚀 ~ handleLogin ~ res:', res);
			if (res?.data?.accessTokeLn) {
				console.log('🚀 ~ handleLogin ~ res:', res?.data?.accessTokeLn);
				toast.success(res?.message);
				storeUserInfo({ accessToken: res?.data?.accessToken });
				// router.push("/dashboard");
			} else {
				setError(res.message);
				// console.log(res);
			}
		} catch (err: any) {
			console.error(err.message);
		}
	};

	return (
		<div className='flex justify-center items-center h-screen bg-white'>
			<form onSubmit={handleSubmit(onSubmit)} className='max-w-sm w-full p-6 rounded shadow-md'>
				<h2 className='text-3xl font-bold mb-4'>Login</h2>
				<div className='mb-4'>
					<label htmlFor='email' className='block text-gray-800'>
						Email
					</label>
					<input
						type='email'
						id='email'
						{...register('email', { required: true })}
						className='w-full rounded py-2 px-3 border border-gray-300 hover:border-blue-500'
					/>
					{errors.email && <p className='text-red-500'>Email is required</p>}
				</div>
				<div className='mb-4'>
					<label htmlFor='password' className='block text-gray-800'>
						Password
					</label>
					<input
						type='password'
						id='password'
						{...register('password', { required: true })}
						className='w-full rounded py-2 px-3 border border-gray-300 hover:border-blue-500'
					/>
					{errors.password && <p className='text-red-500'>Password is required</p>}
				</div>
				<button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded shadow-md'>
					Login
				</button>
				<p className='mt-2 text-gray-600'>
					Don't have an account?{' '}
					<Link href='/signup' className='text-blue-500' rel='noopener noreferrer'>
						Signup
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;

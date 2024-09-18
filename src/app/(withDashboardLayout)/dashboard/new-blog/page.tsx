'use client';
import useUserInfo from '@/hooks/useUserInfo';
import { crateBlog } from '@/services/actions/crateBlog';
import { IPost } from 'prisma/post';
import { Controller, useForm } from 'react-hook-form';

// const API_BASE_URL = 'http://localhost:3000/api/blogs';

// const API_URL = 'http://localhost:3000/api/signup';

const NewBlog = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
		register,
	} = useForm<IPost>();

	const userInfo = useUserInfo();
	console.log('🚀 ~ NewBlog ~ userInfo:', userInfo);

	const onSubmit = async (data: IPost) => {
		try {
			const newData = {
				...data,
				authorId: userInfo?.id,
			};
			console.log('Form data submitted:', newData);
			const response = await crateBlog(newData);
			console.log('Blog created:', response);
		} catch (error) {
			console.error('Error submitting form:', error);
		}
	};

	return (
		<div className='max-w-md mx-auto mt-20 p-4 bg-white rounded '>
			<h2 className='text-2xl font-semibold mb-4'>Create Blog</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* add cover image */}

				{/* title */}
				<div className='mb-4'>
					<label htmlFor='title' className='block text-gray-700 font-medium mb-2'>
						Title
					</label>
					<Controller
						name='title'
						control={control}
						defaultValue=''
						render={({ field }) => (
							<input
								{...field}
								type='text'
								id='title'
								className={`w-full px-3 py-2 border rounded-md ${
									errors.title ? 'border-red-500' : 'border-gray-300'
								}`}
							/>
						)}
					/>
					{errors.title && <p className='text-red-500 mt-2'>Title is required</p>}
				</div>

				{/* content  */}
				<div className='mb-4'>
					<label htmlFor='content' className='block text-gray-700 font-medium mb-2'>
						Content
					</label>
					<Controller
						name='content'
						control={control}
						defaultValue=''
						render={({ field }) => (
							<textarea
								{...field}
								id='content'
								className={`w-full px-3 py-2 border rounded-md ${
									errors.content ? 'border-red-500' : 'border-gray-300'
								}`}
							/>
						)}
					/>
					{errors.content && <p className='text-red-500 mt-2'>Content is required</p>}
				</div>

				{/* tags */}

				<div className='flex gap-3'>
					<button
						type='button'
						className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'>
						Save draft
					</button>

					<button
						type='submit'
						className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'>
						Create Blog
					</button>
				</div>
			</form>
		</div>
	);
};

export default NewBlog;

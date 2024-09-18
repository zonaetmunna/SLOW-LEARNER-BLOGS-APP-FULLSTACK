'use client';
import Link from 'next/link';

const Dashboard = async () => {
	const res = await fetch('http://localhost:3000/api/blogs', {
		next: {
			revalidate: 30,
		},
	});
	const blogs = await res.json();
	console.log('🚀 ~ Blogs:', blogs);

	return (
		<div className='bg-gray-100 text-black mt-20 p-4'>
			{/* Top Section with Navigation or Icons */}
			<div className='flex justify-between items-center mb-8'>
				<div className='flex gap-2'></div>
				<button className='bg-gray-200 p-2 rounded-md'>Feed settings</button>
			</div>

			{/* Grid of Blog Cards */}
			<div className='grid grid-cols-4 gap-6'>
				{blogs?.posts?.map((blog: any) => (
					<div key={blog.id} className='bg-white rounded-lg shadow-lg p-4'>
						{/* Blog Title */}
						<h2 className='text-lg font-semibold mb-2'>{blog.title}</h2>

						{/* Blog Tags */}
						<div className='flex gap-2 mb-2'>
							{blog?.tags?.map((tag: string, index: number) => (
								<span key={index} className='bg-gray-200 px-2 py-1 rounded text-sm'>
									#{tag}
								</span>
							))}
						</div>

						{/* Description or short summary */}
						<p className='text-sm text-gray-600'>{blog.description}</p>

						{/* Read Time or other metadata */}
						<div className='mt-2 text-gray-500'>
							<span>{blog.readTime} min read</span>
						</div>

						{/* Interaction buttons/icons (comments, likes, etc.) */}
						<div className='flex justify-between items-center mt-4'>
							<div className='flex gap-2'>
								<span className='text-gray-600'>👍 {blog.likes || 0}</span>
								<span className='text-gray-600'>💬 {blog.comments}</span>
							</div>
							<Link className='text-blue-500' href={`/dashboard/blog/${blog.id}`}>
								Read More
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Dashboard;

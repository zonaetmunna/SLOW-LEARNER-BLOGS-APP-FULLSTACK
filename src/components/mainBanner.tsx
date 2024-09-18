import Image from 'next/image';

const MainBanner: React.FC = () => {
	return (
		<div className='bg-gray-800 py-24'>
			<div className='container mx-auto flex items-center justify-center'>
				<div className='flex flex-col md:flex-row items-center'>
					<div className='md:w-1/2'>
						<Image src='/banner-image.jpg' alt='Banner Image' width={800} height={400} />
					</div>
					<div className='md:w-1/2 md:pl-12'>
						<h1 className='text-4xl font-bold text-white mb-4'>Welcome to My Blog</h1>
						<p className='text-xl text-gray-300'>
							Discover the latest articles and insights about various topics.
						</p>
						<button className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full mt-8'>
							Explore Articles
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainBanner;

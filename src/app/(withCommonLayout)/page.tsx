'use client';
import { IPost } from '@/type';
import { Inter } from '@next/font/google';
import { useEffect, useState } from 'react';
import MainBanner from '../../components/mainBanner';

const inter = Inter({ subsets: ['latin'] });

const API_BASE_URL_BLOG = 'http://localhost:3000/api/blogs';
export default function Home() {
	const [blogs, setBlogs] = useState<IPost[]>([]);

	useEffect(() => {
		fetchBlogs();
	}, []);

	const fetchBlogs = async () => {
		try {
			const response = await fetch(API_BASE_URL_BLOG);
			const data = await response.json();
			setBlogs(data.blogs);
		} catch (error) {
			console.log('Category retrieval error:', error);
		}
	};

	return (
		<main>
			<MainBanner />
		</main>
	);
}

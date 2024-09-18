'use client';
import { logoutUser } from '@/services/actions/logoutUser';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaBell, FaPlus, FaUser } from 'react-icons/fa';

const NavbarFirst = (): JSX.Element => {
	const [searchValue, setSearchValue] = useState('');
	const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
	const router = useRouter();

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle search functionality
		console.log('Search submitted:', searchValue);
	};

	const handleLoginClick = () => {
		console.log('Login clicked');
	};

	const handleNotificationClick = () => {
		console.log('Notification clicked');
	};

	const toggleProfileMenu = () => {
		setIsProfileMenuOpen(!isProfileMenuOpen);
	};

	const handleLogOut = () => {
		logoutUser(router);
	};

	return (
		<nav className='fixed top-0 left-0 w-full bg-gray-100 py-4 px-10 z-10 border-b border-gray-200'>
			<div className='flex items-center justify-between'>
				<Link href='/'>
					<p className='text-xl font-bold'>Slow Learner</p>
				</Link>

				<div className='flex items-center space-x-3'>
					<form onSubmit={handleSearchSubmit} className='relative'>
						<input
							type='text'
							placeholder='Search'
							value={searchValue}
							onChange={handleSearchChange}
							className='px-4 py-2 border rounded-md'
						/>
						<button type='submit' className='absolute right-0 px-3 py-2'>
							Search
						</button>
					</form>

					<Link
						href='/dashboard/new-blog'
						className='flex items-center bg-green-500 text-white px-4 py-2 rounded-md'>
						<FaPlus className='mr-1' />
						<span>Create Post</span>
					</Link>

					<button
						onClick={handleNotificationClick}
						className='bg-yellow-500 text-white px-4 py-3 rounded-md'>
						<FaBell className='text-gray-300' />
					</button>

					{/* Profile Icon with Dropdown */}
					<div className='relative'>
						<button
							onClick={toggleProfileMenu}
							className='bg-blue-500 text-white px-4 py-3 rounded-md'>
							<FaUser />
						</button>

						{isProfileMenuOpen && (
							<div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg'>
								<ul className='py-2'>
									<li>
										<Link
											href='/profile'
											className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
											Profile
										</Link>
									</li>
									<li>
										<Link
											href='/settings'
											className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
											Settings
										</Link>
									</li>
									<li>
										<button
											type='button'
											onClick={handleLogOut}
											className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
											Logout
										</button>
									</li>
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavbarFirst;

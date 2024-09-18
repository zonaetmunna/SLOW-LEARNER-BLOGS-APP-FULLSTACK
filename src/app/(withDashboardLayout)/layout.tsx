import NavbarFirst from '@/components/NavbarFirst';
import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex flex-col h-screen'>
			{/* Top Navbar */}
			<NavbarFirst />

			{/* Main content area */}
			<div className='flex flex-grow'>
				{/* Sidebar */}
				<Sidebar />

				{/* Dashboard content */}
				<div className='flex-grow p-6 ml-64 bg-gray-100 overflow-auto'>{children}</div>
			</div>
		</div>
	);
}

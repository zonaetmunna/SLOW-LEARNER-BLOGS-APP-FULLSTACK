import Link from 'next/link';

const CustomLink = ({
	children,
	href,
	className,
}: {
	children: React.ReactNode;
	href: string;
	className?: string;
}) => {
	return (
		<Link href={href} className={className}>
			{children}
		</Link>
	);
};

export default CustomLink;

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';

const NavLinks = () => {
	const pathname = usePathname();

	return (
		<div className='space-x-4 max-sm:hidden'>
			{NAV_LINKS.map(({ href, label }) => (
				<Link
					key={`navlink-${label}`}
					href={href}
					className={cn('underline-offset-2 hover:underline font-semibold', {
						'font-bold underline': pathname === href,
					})}
				>
					{label}
				</Link>
			))}
		</div>
	);
};

export default NavLinks;

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';
import useOnClickOutside from '@/lib/hooks/useOnClickOutside';

const MobileNavLinks = () => {
	const pathname = usePathname();

	const [isOpen, setIsOpen] = useState(false);

	const { ref } = useOnClickOutside(() => setIsOpen(false));

	return (
		<div className='sm:hidden' ref={ref}>
			<button type='button' onClick={() => setIsOpen(prev => !prev)}>
				<Menu className='text-primary' size={24} />
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0 }}
						animate={{ height: 'auto' }}
						exit={{ height: 0 }}
						transition={{ duration: 0.2 }}
						className='overflow-y-hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-sm flex flex-col px-6 gap-y-2 pb-2'
					>
						{NAV_LINKS.map(({ href, label }) => (
							<Link
								key={`navlink-${label}`}
								href={href}
								className={cn('underline-offset-2 hover:underline font-semibold py-1 w-fit', {
									'font-bold underline': pathname === href,
								})}
								onClick={() => setIsOpen(false)}
							>
								{label}
							</Link>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default MobileNavLinks;

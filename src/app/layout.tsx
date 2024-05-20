import { type FC, type ReactNode } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from '@/components/pageComponents/layout/Navbar';
import './globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
	title: 'Nathan Nesling',
	description: 'Personal website of Nathan Nesling',
};

const sourceSerifPro = localFont({
	src: [
		{ path: './fonts/source-serif-pro-latin-200-normal.woff2', weight: '200', style: 'normal' },
		{ path: './fonts/source-serif-pro-latin-300-normal.woff2', weight: '300', style: 'normal' },
		{ path: './fonts/source-serif-pro-latin-400-normal.woff2', weight: '400', style: 'normal' },
		{ path: './fonts/source-serif-pro-latin-600-normal.woff2', weight: '600', style: 'normal' },
		{ path: './fonts/source-serif-pro-latin-700-normal.woff2', weight: '700', style: 'normal' },
		{ path: './fonts/source-serif-pro-latin-900-normal.woff2', weight: '900', style: 'normal' },
	],
});

type Props = {
	children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
	return (
		<html
			lang='en'
			className={cn(sourceSerifPro.className, 'light h-full')}
			style={{ colorScheme: 'light' }}
		>
			<body className='min-h-screen h-full flex flex-col relative bg-background'>
				<Navbar />
				<main className='flex-1 pb-10'>{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;

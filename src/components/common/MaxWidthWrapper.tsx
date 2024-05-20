import { cn } from '@/lib/utils';
import { type FC, type ReactNode } from 'react';

type Props = {
	children: ReactNode;
	className?: string;
};

const MaxWidthWrapper: FC<Props> = ({ children, className }) => (
	<div className={cn('max-w-screen-lg mx-auto px-6 sm:px-16', className)}>{children}</div>
);

export default MaxWidthWrapper;

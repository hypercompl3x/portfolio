import Link from 'next/link';
import MaxWidthWrapper from '@/components/common/MaxWidthWrapper';
import NavLinks from './NavLinks';
import MobileNavLinks from './MobileNavLinks';

const Navbar = () => (
	<header className='max-sm:border-b border-border max-sm:shadow-sm'>
		<MaxWidthWrapper className='flex items-center h-16 justify-between'>
			<Link href='/' className='font-bold text-lg'>
				Nathan Nesling
			</Link>
			<NavLinks />
			<MobileNavLinks />
		</MaxWidthWrapper>
	</header>
);

export default Navbar;

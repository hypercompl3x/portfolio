import Image from 'next/image';
import MaxWidthWrapper from '@/components/common/MaxWidthWrapper';
import HomeImage from '../../public/images/home-image.png';

const Home = () => (
	<MaxWidthWrapper className='flex items-center mt-12 sm:mt-24 flex-col text-center gap-y-4'>
		<Image src={HomeImage} className='max-w-[500px] w-full' alt='Home page image' />
		<h1 className='font-bold text-5xl sm:text-6xl'>Building Digital Futures</h1>
		<p className='max-w-[500px] sm:text-xl font-light'>
			Hi, I'm Nathan, a passionate software developer who loves to build high quality sites that
			both look good and perform well.
		</p>
	</MaxWidthWrapper>
);

export default Home;

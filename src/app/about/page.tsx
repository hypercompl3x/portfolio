import MaxWidthWrapper from '@/components/common/MaxWidthWrapper';
import AboutImage from '@/lib/svgs/AboutImage';

const About = () => (
	<MaxWidthWrapper className='flex items-center mt-2 flex-col gap-y-4'>
		<AboutImage />
		<h1 className='font-bold text-5xl sm:text-6xl text-center'>About Me</h1>
		<div className='sm:text-xl font-light text-left max-w-screen-md space-y-3'>
			<p>
				Welcome to my personal site! I am a full-stack developer with a specialization in front-end
				development. I have a passion for transforming ideas into sleek, user-friendly applications
				that not only meet but exceed expectations.
			</p>
			<p>
				My journey in software development is driven by a love for innovation and a constant desire
				to stay up-to-date with the latest industry trends. I pride myself on bringing meticulous
				attention to detail and a steadfast commitment to quality in every project I undertake.
			</p>
			<p>
				Collaboration is at the heart of my work philosophy. I believe that the best solutions arise
				from a blend of diverse perspectives and expertise. My user-centric approach ensures that
				the end product is not only efficient but also intuitive and enjoyable to use.
			</p>
			<p>
				When I'm not coding, you can find me exploring new technologies, participating in tech
				communities, or diving into a good book. I'm always eager to learn and grow, both as a
				developer and as an individual.
			</p>
			<p>
				Thank you for visiting my site. I look forward to connecting and potentially collaborating
				to bring your digital vision to life!
			</p>
		</div>
	</MaxWidthWrapper>
);

export default About;

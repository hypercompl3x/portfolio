import Image from 'next/image';
import MaxWidthWrapper from '@/components/common/MaxWidthWrapper';
import ProjectsImage from '../../../public/images/projects-image.png';
import TriviaDancePartyLogo from '../../../public/images/triviadanceparty-logo.png';
import GrandlinedleLogo from '../../../public/images/grandlinedle-logo.png';

const PROJECTS = [
	{
		title: 'Trivia Dance Party',
		description:
			'An online multiplayer quiz site where players go head to head over a wide range of categories to see who can answer the most questions correctly.',
		link: 'https://triviadanceparty.com',
		image: TriviaDancePartyLogo,
	},
	{
		title: 'Grandlinedle',
		description:
			'A site similar to wordle but instead of guessing words, you guess todays character from the anime One Piece.',
		link: 'https://grandlinedle.com',
		image: GrandlinedleLogo,
	},
];

const Projects = () => (
	<MaxWidthWrapper className='flex items-center mt-2 flex-col gap-y-4'>
		<Image src={ProjectsImage} className='w-64' alt='Projects page image' />
		<h1 className='font-bold text-5xl sm:text-6xl text-center'>My Projects</h1>
		<div className='space-y-6 max-w-screen-sm'>
			{PROJECTS.map(({ title, description, link, image }) => (
				<div
					key={`project-${title}`}
					className='flex max-sm:flex-col max-sm:text-center border-primary border rounded-md p-2.5 gap-x-6 items-center gap-y-2'
				>
					<Image src={image} className='w-40 rounded-md' alt={`${title}-image`} />
					<div className='space-y-1 sm:space-y-0.5'>
						<a
							target='_blank'
							href={link}
							className='text-2xl font-bold hover:underline underline-offset-2'
						>
							{title}
						</a>
						<p className='font-light text-lg'>{description}</p>
					</div>
				</div>
			))}
		</div>
	</MaxWidthWrapper>
);

export default Projects;

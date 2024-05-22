import Image from 'next/image';
import MaxWidthWrapper from '@/components/common/MaxWidthWrapper';
import ProjectsImage from '../../../public/images/projects-image.png';
import ProjectCard from '@/components/pageComponents/projects/ProjectCard';
import { PROJECTS } from '@/lib/constants';

const Projects = () => (
	<MaxWidthWrapper className='flex items-center mt-2 flex-col gap-y-4'>
		<Image src={ProjectsImage} className='w-64' alt='Projects page image' />
		<h1 className='font-bold text-5xl sm:text-6xl text-center'>My Projects</h1>
		<div className='space-y-6 max-w-screen-sm'>
			{PROJECTS.map(({ title, ...rest }) => (
				<ProjectCard key={`project-${title}`} title={title} {...rest} />
			))}
		</div>
	</MaxWidthWrapper>
);

export default Projects;

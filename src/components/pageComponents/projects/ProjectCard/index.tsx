import { type FC } from 'react';
import Image from 'next/image';
import type { Project } from '@/lib/types';

const ProjectCard: FC<Project> = ({ description, image, link, title }) => (
	<div className='flex max-sm:flex-col max-sm:text-center border-primary border rounded-md gap-x-6 max-sm:items-center gap-y-2 overflow-hidden max-sm:p-2.5'>
		<Image src={image} className='w-44 object-cover max-sm:rounded-md' alt={`${title}-image`} />
		<div className='space-y-1 sm:space-y-0.5 sm:p-2.5'>
			{link ? (
				<a
					target='_blank'
					href={link}
					className='text-2xl font-bold hover:underline underline-offset-2'
				>
					{title}
				</a>
			) : (
				<div className='flex items-center gap-x-3'>
					<div className='text-2xl font-bold'>{title}</div>
					<div className='font-semibold'>{'(In Progress)'}</div>
				</div>
			)}
			<p className='font-light'>{description}</p>
		</div>
	</div>
);

export default ProjectCard;

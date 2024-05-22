import { type FC } from 'react';
import Image from 'next/image';
import type { Project } from '@/lib/types';

const ProjectCard: FC<Project> = ({ description, image, link, title }) => (
	<div className='flex max-sm:flex-col max-sm:text-center border-primary border rounded-md gap-x-6 max-sm:items-center gap-y-1 overflow-hidden'>
		<div className='bg-primary shrink-0 flex items-center justify-center p-5 max-sm:w-full'>
			<Image src={image} className='w-36' alt={`${title}-image`} />
		</div>
		<div className='space-y-1 p-2.5'>
			{link ? (
				<a
					target='_blank'
					href={link}
					className='text-2xl font-bold hover:underline underline-offset-2'
				>
					{title}
				</a>
			) : (
				<div className='flex items-center gap-x-3 max-sm:justify-center'>
					<div className='text-2xl font-bold'>{title}</div>
					<div className='font-semibold'>{'(In Progress)'}</div>
				</div>
			)}
			<p className='font-light'>{description}</p>
		</div>
	</div>
);

export default ProjectCard;

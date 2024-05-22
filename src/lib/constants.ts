import TriviaDancePartyLogo from '../../public/images/triviadanceparty-logo.png';
import GrandlinedleLogo from '../../public/images/grandlinedle-logo.png';
import LittlePipelinesLogo from '../../public/images/littlepipelines-logo.png';

export const NAV_LINKS = [
	{ href: '/projects', label: 'Projects' },
	{ href: '/about', label: 'About' },
];

export const PROJECTS = [
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
	{
		title: 'Little Pipelines',
		description:
			'Code learning platform that mirrors what can be expected within a professional setting. Learners will engange in PRs that will enforce their ability to work with others and also help cement their own knowledge of the material.',
		image: LittlePipelinesLogo,
	},
];

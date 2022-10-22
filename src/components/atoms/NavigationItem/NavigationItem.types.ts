import { Variants } from 'framer-motion';

export type NavigationItemProps = {
	animate: string;
	customDelay: number;
	hash: string;
	initial: string;
	isActive: boolean;
	title: string;
	variants: Variants;
};

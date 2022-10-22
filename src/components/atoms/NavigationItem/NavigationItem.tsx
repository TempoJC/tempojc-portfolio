import Link from 'next/link';
import { motion } from 'framer-motion';
import { NavigationItemProps } from './NavigationItem.types';

const NavigationItem = ({
	animate,
	customDelay,
	hash,
	initial,
	isActive,
	title,
	variants,
}: NavigationItemProps) => (
	<motion.li
		animate={animate}
		custom={customDelay}
		initial={initial}
		variants={variants}
	>
		<Link href={{ pathname: '/', hash: hash }} scroll={false}>
			<a
				className={`${
					isActive
						? 'font-bold text-off-black dark:text-off-white'
						: 'font-medium text-grey-700 md:text-grey-500 hover:text-off-black dark:hover:text-off-white'
				} md:underlined transition relative block whitespace-nowrap text-2xl md:text-lg`}
			>
				{title}
			</a>
		</Link>
	</motion.li>
);

export { NavigationItem };

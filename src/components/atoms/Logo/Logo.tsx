import Link from 'next/link';
import { motion } from 'framer-motion';

const Logo = () => (
	<Link href="/" passHref>
		<motion.a
			className="group relative transition whitespace-nowrap hover:transition duration-300 text-2xl font-bold"
			animate={{ opacity: 1, y: 0 }}
			initial={{ opacity: 0, y: -10 }}
		>
			<span className="transition duration-300 opacity-100 group-hover:opacity-0">
				@TempoJC
			</span>
			<span className="absolute transition duration-300 left-0 opacity-0 group-hover:opacity-100 text-transparent bg-clip-text hover:bg-gradient-to-r from-light-start to-light-stop dark:from-dark-start dark:to-dark-stop">
				Jose Luis Camargo
			</span>
		</motion.a>
	</Link>
);

export { Logo };

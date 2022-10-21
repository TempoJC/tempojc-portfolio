import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NAV_ITEMS } from './Header.constants';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	useEffect(() => {
		setIsOpen(false);
	}, [router.pathname]);

	return (
		<>
			<header className="fixed w-full z-50 px-4 lg:px-20 py-4">
				<div className="flex justify-between items-center">
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

					<nav className="hidden md:block">
						<ul className="flex gap-8 text-lg">
							{NAV_ITEMS.map(({ hash, title }, index) => (
								<>
									{/* NavigationItem */}
									{`${title}-${hash}-${index} `}
								</>
							))}
						</ul>
					</nav>

					<button
						className="absolute z-50 top-4 right-4 md:hidden"
						onClick={() => setIsOpen((prev) => !prev)}
						aria-label="Menu"
					>
						{/* BurgerIcon */}
					</button>

					<div className="hidden md:block">{/* MobileMenu */}</div>
				</div>
			</header>

			{/* Mobile Menu */}
		</>
	);
};

export { Header };

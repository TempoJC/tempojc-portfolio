import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { NAV_ITEMS } from './Header.constants';
import { Logo } from '@/Atoms/Logo';

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
			<header
				className="fixed w-full z-50 px-4 lg:px-20 py-4"
				data-testid="header"
			>
				<div className="flex justify-between items-center">
					<Logo />

					<nav className="hidden md:block">
						<ul className="flex gap-8 text-lg">
							{NAV_ITEMS.map(({ hash, title }, index) => (
								<li key={`${title}-${hash}-${index} `}>
									{/* NavigationItem */}
									{title}
								</li>
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

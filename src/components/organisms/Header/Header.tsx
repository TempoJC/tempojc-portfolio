import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { NavigationItem } from '@/Atoms/NavigationItem';
import { NAV_ITEMS } from './Header.constants';
import { Logo } from '@/Atoms/Logo';
import { BurgerIcon } from '@/Atoms/BurgerIcon';

const Header = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [activeHash, setActiveHash] = useState<string>('/');
	const router = useRouter();

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	const handleHashChange = (url: string) => {
		setActiveHash(url);
	};

	useEffect(() => {
		setIsOpen(false);
		router.events.on('hashChangeStart', handleHashChange);

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method:
		return () => {
			router.events.off('hashChangeStart', handleHashChange);
		};
	}, [router]);

	const navigationVariants = {
		hidden: { opacity: 0, y: -10 },
		visible: (custom: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: custom },
		}),
	};

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
								<NavigationItem
									animate="visible"
									customDelay={(index + 1) * 0.1}
									hash={hash}
									initial="hidden"
									isActive={activeHash === `/#${hash}`}
									key={`${hash}${index}`}
									title={title}
									variants={navigationVariants}
								/>
							))}
						</ul>
					</nav>

					<button
						className="absolute z-50 top-4 right-4 md:hidden"
						onClick={() => setIsOpen((prev) => !prev)}
						aria-label="Menu"
					>
						<BurgerIcon isOpen={isOpen} />
					</button>

					<div className="hidden md:block">{/* MobileMenu */}</div>
				</div>
			</header>

			{/* Mobile Menu */}
		</>
	);
};

export { Header };

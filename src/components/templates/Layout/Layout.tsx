import { FC, ReactNode } from 'react';
import { Footer } from '@/Organisms/Footer';
import { Header } from '@/Organisms/Header';

interface LayoutProps {
	children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex flex-col justify-start min-h-screen">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

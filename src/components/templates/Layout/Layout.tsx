import { FC } from 'react';
import { Footer } from '@/Organisms/Footer';
import { Header } from '@/Organisms/Header';
import { LayoutProps } from './Layout.types';

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex flex-col justify-start min-h-screen">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

import { FC, ReactNode } from 'react';
import { Footer } from '@/Organisms/Footer';
import { Header } from '@/Organisms/Header';
import styles from './Layout.module.css';

interface LayoutProps {
	children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.container}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

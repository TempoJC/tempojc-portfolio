import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Layout } from '@/Templates/Layout';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class">
			<Layout>
				<AnimatePresence
					// exitBeforeEnter
					initial={false}
					onExitComplete={() => window.scrollTo(0, 0)}
				>
					<Component {...pageProps} />
				</AnimatePresence>
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;

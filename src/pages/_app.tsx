import '../styles/globals.css';
import type { AppProps } from 'next/app';

const a = {
	a: 1,
	b: 1,
};

console.log(a);

const palida = (e: number) => {
	return e;
};

console.log(palida(43));

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;

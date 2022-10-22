import Head from 'next/head';
import { HeadProps } from './SeoHead.types';

const SeoHead = ({ title, description }: HeadProps) => (
	<Head>
		<title>{title}</title>
		<meta name="description" content={description} />
		<link rel="icon" href="/favicon.ico" />
	</Head>
);

export { SeoHead };

import type { NextPage } from 'next';
import smoothscroll from 'smoothscroll-polyfill';
import { SeoHead } from '@/Atoms/SeoHead';
import { useEffect } from 'react';
import { Hero } from '@/Organisms/Hero';

const Home: NextPage = () => {
	useEffect(() => {
		smoothscroll.polyfill();
	}, []);

	return (
		<>
			<SeoHead
				title="Senior Software Engineer – Jose Luis Camargo"
				description="A Front-End Software Engineer with a focus on JavaScript and React. I have more than 7 years experience working in software engineering."
			/>
			<Hero />
		</>
	);
};

export default Home;

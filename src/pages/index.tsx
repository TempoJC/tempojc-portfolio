import { createRef, useEffect } from 'react';
import type { NextPage } from 'next';
import smoothscroll from 'smoothscroll-polyfill';
import { SeoHead } from '@/Atoms/SeoHead';
import { Hero } from '@/Organisms/Hero';
import AboutPage from './about';
import SkillsPage from './skills';
import ContactPage from './contact';

const Home: NextPage = () => {
	const aboutRef = createRef<HTMLDivElement>();
	const skillsRef = createRef<HTMLDivElement>();
	const contactRef = createRef<HTMLDivElement>();

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
			<AboutPage refNode={aboutRef} />
			<SkillsPage refNode={skillsRef} />
			<ContactPage refNode={contactRef} />
		</>
	);
};

export default Home;

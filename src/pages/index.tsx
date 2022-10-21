import type { NextPage } from 'next';
import smoothscroll from 'smoothscroll-polyfill';
import { SeoHead } from '@/Atoms/SeoHead';
import { useEffect } from 'react';

const Home: NextPage = () => {
	useEffect(() => {
		smoothscroll.polyfill();
	}, []);

	return (
		<>
			<SeoHead title="Next Skeleton" />
			CONTENIDO DEL INDEX
		</>
	);
};

export default Home;

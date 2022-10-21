import type { NextPage } from 'next';
import { SeoHead } from '@/Atoms/SeoHead';

const Home: NextPage = () => {
	return (
		<>
			<SeoHead title="Next Skeleton" />
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
		</>
	);
};

export default Home;

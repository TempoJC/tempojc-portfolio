import type { NextPage } from 'next';
import { SeoHead } from '@/Atoms/SeoHead';
import { Calculator } from '@/Molecules/Calculator';

const Home: NextPage = () => {
	return (
		<>
			<SeoHead title="Next Skeleton" />
			<Calculator />
		</>
	);
};

export default Home;

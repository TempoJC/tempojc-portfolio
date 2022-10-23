import Typed from 'react-typed';
import { Container } from '@/Atoms/Container';
import { TALK_ABOUT } from './Hero.constants';

const Hero = () => (
	<Container>
		<h1 className="headline text-3xl md:text-5xl lg:text-6xl">
			Hey, I&apos;m Jose Luis Camargo 👋
		</h1>
		<p className="my-8 text-lg">
			Welcome to my website! I am a passionate Software Developer, specialised
			in front-end development using React and Redux. I love to solve problems,
			build things and always learn. You can talk to me about{' '}
			<Typed
				loop
				typeSpeed={80}
				backSpeed={20}
				strings={TALK_ABOUT}
				smartBackspace
				backDelay={1000}
				loopCount={0}
				showCursor
				cursorChar="|"
			/>
			.
		</p>
		<p>
			P.S. this website is open-source and available on{' '}
			<a
				href="https://github.com/TempoJC/tempojc-portfolio"
				title="Link to Github repository"
				target="_blank"
				rel="noopener noreferrer"
				className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0"
			>
				Github
			</a>
			.
		</p>
	</Container>
);

export { Hero };

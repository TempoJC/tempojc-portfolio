import { render } from '@testing-library/react';
import { Hero } from '.';

describe('Hero', () => {
	it('renders correctly', () => {
		const { getByText } = render(<Hero />);

		expect(getByText(/Hey, I'm Jose Luis Camargo/i)).toBeInTheDocument();
		expect(
			getByText(
				/Welcome to my website! I am a passionate Software Developer, specialised in front-end development using React and Redux. I love to solve problems, build things and always learn. You can talk to me about/i
			)
		).toBeInTheDocument();
		expect(
			getByText(/P.S. this website is open-source and available on/i)
		).toBeInTheDocument();
		expect(getByText(/Github/i)).toBeInTheDocument();
		expect(getByText(/Github/i).closest('a')).toHaveAttribute(
			'href',
			'https://github.com/TempoJC/tempojc-portfolio'
		);
	});
});

import { render, screen } from '@testing-library/react';
import { Logo } from './Logo';

describe('Logo', () => {
	it('renders correctly', () => {
		render(<Logo />);

		expect(screen.getByText(/@TempoJC/i)).toBeInTheDocument();
		expect(screen.getByText(/Jose Luis Camargo/i)).toBeInTheDocument();
	});
});

import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer', () => {
	it('renders correctly', () => {
		render(<Footer />);

		expect(screen.getByText(/Powered by/i)).toBeInTheDocument();
		expect(screen.getByText(/@TempoJC/i)).toBeInTheDocument();
	});
});

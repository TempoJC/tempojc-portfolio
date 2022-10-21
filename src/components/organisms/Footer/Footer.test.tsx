import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer', () => {
	it('renders correctly', () => {
		render(<Footer />);

		expect(screen.getByText(/Jose Luis Camargo/i)).toBeInTheDocument();
	});
});

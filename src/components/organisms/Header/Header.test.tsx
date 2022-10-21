import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

describe('Header', () => {
	it('renders correctly', () => {
		render(<Header />);

		expect(screen.getByText(/Welcome to/i)).toBeInTheDocument();
		expect(screen.getByText(/Next Skeleton!/i)).toBeInTheDocument();
	});
});

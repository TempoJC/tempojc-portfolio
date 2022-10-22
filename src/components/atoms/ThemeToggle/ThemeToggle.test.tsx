import { render } from '@testing-library/react';
import { ThemeToggle } from './ThemeToggle';

describe('ThemeToggle', () => {
	it('renders correctly', () => {
		const { getByLabelText } = render(<ThemeToggle />);

		expect(getByLabelText('Toggle Dark Mode')).toBeInTheDocument();
	});
});

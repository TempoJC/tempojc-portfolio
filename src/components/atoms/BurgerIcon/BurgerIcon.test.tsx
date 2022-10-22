import { render } from '@testing-library/react';
import { BurgerIcon } from './BurgerIcon';

describe('BurgerIcon', () => {
	it('renders correctly', () => {
		const { queryByTestId } = render(<BurgerIcon isOpen={false} />);
		const burguerIcon = queryByTestId(/burgerIcon/i);

		expect(burguerIcon).toBeInTheDocument();
		expect(burguerIcon).toHaveClass('burger-icon', { exact: true });
		expect(burguerIcon).not.toHaveClass('open');
	});

	it('Show open burgerIcon', () => {
		const { queryByTestId } = render(<BurgerIcon isOpen={true} />);
		const burguerIcon = queryByTestId(/burgerIcon/i);

		expect(burguerIcon).toBeInTheDocument();
		expect(burguerIcon).toHaveClass('burger-icon open', { exact: true });
	});
});

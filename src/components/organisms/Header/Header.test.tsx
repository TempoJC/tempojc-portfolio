import { render } from '@testing-library/react';
import { Header } from '../Header';

jest.mock('next/router', () => ({
	__esModule: true,
	useRouter: jest.fn().mockReturnValue({
		route: '',
		pathname: '',
		query: '',
		asPath: '',
		events: {
			on: jest.fn(),
			off: jest.fn(),
		},
	}),
}));

jest.mock('@/Atoms/NavigationItem');
jest.mock('@/Atoms/Logo');

describe('Header', () => {
	it('renders correctly', () => {
		const { queryByTestId } = render(<Header />);

		expect(queryByTestId(/header/i)).toBeTruthy();
	});
});

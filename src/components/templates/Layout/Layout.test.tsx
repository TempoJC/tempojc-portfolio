import { Layout } from '../Layout';
import { render } from '@testing-library/react';

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

describe('Layout', () => {
	it('renders correctly', () => {
		const { queryByText } = render(<Layout>Some content</Layout>);

		expect(queryByText(/Some content/i)).toBeInTheDocument();
	});
});

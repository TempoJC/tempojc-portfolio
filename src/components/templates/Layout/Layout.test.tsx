import { useRouter } from 'next/router';
import { render } from '@testing-library/react';
import { Layout } from '../Layout';

jest.mock('next/router', () => ({
	__esModule: true,
	useRouter: jest.fn().mockReturnValue({
		route: '',
		pathname: '',
		query: '',
		asPath: '',
	}),
}));

describe('Layout', () => {
	it('renders correctly', () => {
		const { queryByText } = render(<Layout>Some content</Layout>);

		expect(queryByText(/Some content/i)).toBeInTheDocument();
	});
});

import { render } from '@testing-library/react';
import { Layout } from '../Layout';

describe('Layout', () => {
	it('renders correctly', () => {
		const { queryByText } = render(<Layout>Some content</Layout>);

		expect(queryByText(/Some content/i)).toBeInTheDocument();
	});
});

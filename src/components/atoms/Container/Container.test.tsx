import { render } from '@testing-library/react';
import { Container } from '.';

describe('Container', () => {
	it('renders correctly', () => {
		const { queryByText } = render(<Container>Some content</Container>);

		expect(queryByText(/Some content/i)).toBeInTheDocument();
	});
});

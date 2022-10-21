import { render } from '@testing-library/react';
import { SeoHead } from './SeoHead';

jest.mock('next/head', () => {
	return {
		__esModule: true,
		default: ({ children }: { children: Array<React.ReactElement> }) => {
			return <>{children}</>;
		},
	};
});

describe('Head', () => {
	it('renders correctly', () => {
		const title = 'Test Next Skeleton';
		render(<SeoHead title={title} />, {
			container: document.head,
		});

		expect(document.title).toBe(title);
	});
});

import { render, screen } from '@testing-library/react';
import { NavigationItem } from './NavigationItem';

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

describe('NavigationItem', () => {
	it('renders correctly', () => {
		render(
			<NavigationItem
				animate="animate"
				customDelay={(0 + 1) * 0.1}
				hash={'about'}
				initial="hidden"
				isActive={false}
				title="About"
				variants={{
					hidden: { opacity: 0, x: -50 },
					visible: (custom: number) => ({
						opacity: 1,
						x: 0,
						transition: { delay: custom },
					}),
				}}
			/>
		);

		expect(screen.getByText(/About/i)).toBeInTheDocument();
	});
});

import { BurgerIconProps } from './BurgerIcon.types';

const BurgerIcon = ({ isOpen }: BurgerIconProps) => (
	<div
		className={`burger-icon ${isOpen ? 'open' : ''}`}
		data-testid="burgerIcon"
	>
		<span />
		<span />
		<span />
		<span />
	</div>
);

export { BurgerIcon };

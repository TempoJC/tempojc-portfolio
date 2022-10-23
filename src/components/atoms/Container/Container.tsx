import { forwardRef } from 'react';
import { ContainerProps, ContainerRef } from './Container.types';

const Container = forwardRef<ContainerRef, ContainerProps>(
	({ id, children }, ref) =>
		ref ? (
			<div
				ref={ref}
				id={id}
				className="flex flex-col mx-auto min-h-screen justify-center px-4 md:max-w-5xl"
			>
				{children}
			</div>
		) : (
			<div className="flex flex-col mx-auto min-h-screen justify-center px-4 md:max-w-5xl">
				{children}
			</div>
		)
);

Container.displayName = 'Container';

export { Container };

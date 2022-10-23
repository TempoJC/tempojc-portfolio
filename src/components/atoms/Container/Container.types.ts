import { ReactNode } from 'react';

export interface ContainerProps {
	children: ReactNode;
	id?: string;
}

export type ContainerRef = HTMLDivElement;

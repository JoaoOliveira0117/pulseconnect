import { ReactNode } from 'react';
import { Item } from '@radix-ui/react-dropdown-menu';

interface DropdownItemProps {
	className?: string;
	children: ReactNode;
}

export default function DropdownItem({ children, className }: DropdownItemProps) {
	return <Item className={className}>{children}</Item>;
}

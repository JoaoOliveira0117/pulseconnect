import { ReactNode } from 'react';
import { Item } from '@radix-ui/react-dropdown-menu';

interface DropdownItemProps {
  children: ReactNode;
}

export default function DropdownItem({children}: DropdownItemProps) { 
	return <Item className="RadixDropdownMenuItem">
		{children}
	</Item>
}
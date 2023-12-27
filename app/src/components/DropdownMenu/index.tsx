import { ReactNode } from 'react';

import { Root, Trigger, Portal, Content } from '@radix-ui/react-dropdown-menu';

interface DropdownMenuProps {
	trigger: ReactNode;
	children: ReactNode;
}

export default function DropdownMenu({ trigger, children }: DropdownMenuProps) {
	return (
		<Root>
			<Trigger>{trigger}</Trigger>
			<Portal>
				<Content sideOffset={5}>{children}</Content>
			</Portal>
		</Root>
	);
}

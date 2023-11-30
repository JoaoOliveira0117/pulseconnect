'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Tooltip from '../Dummies/Tooltip';
import Button from '../Dummies/Button';

interface NavbarItemProps {
	tooltip: ReactNode;
	children: ReactNode;
	href: string;
}

export default function NavbarItem({ tooltip, children, href }: NavbarItemProps) {
	const pathname = usePathname();
	return (
		<Tooltip content={tooltip}>
			<Link href={href} className="w-full">
				<Button variant="borderless" className="w-full py-2 m-auto [&>*]:m-auto" active={pathname === href}>
					{children}
				</Button>
			</Link>
		</Tooltip>
	);
}

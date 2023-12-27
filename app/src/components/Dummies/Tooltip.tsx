import { ReactNode } from 'react';

import { Provider, Root, Trigger, Portal, Content } from '@radix-ui/react-tooltip';

type TooltipProps = {
	children: ReactNode;
	content: ReactNode;
	delayDuration?: number;
};

export default function Tooltip({ children, content, delayDuration = 400 }: TooltipProps) {
	return (
		<Provider>
			<Root delayDuration={delayDuration}>
				<Trigger asChild>{children}</Trigger>
				<Portal>
					<Content
						className="text-sm py-1 px-3 rounded-full bg-secondary data-[state='delayed-open']:animate-fadeIn"
						sideOffset={5}
					>
						{content}
					</Content>
				</Portal>
			</Root>
		</Provider>
	);
}

import { ReactNode } from 'react';

import * as RadixTooltip from '@radix-ui/react-tooltip';

interface TooltipProps {
	children: ReactNode;
	content: ReactNode;
	delayDuration?: number;
}

export default function Tooltip({ children, content, delayDuration = 400 }: TooltipProps) {
	return (
		<RadixTooltip.Provider>
			<RadixTooltip.Root delayDuration={delayDuration}>
				<RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
				<RadixTooltip.Portal>
					<RadixTooltip.Content
						className="text-sm py-1 px-3 rounded-full bg-secondary
            data-[state='delayed-open']:animate-fadeIn"
						sideOffset={5}
					>
						{content}
					</RadixTooltip.Content>
				</RadixTooltip.Portal>
			</RadixTooltip.Root>
		</RadixTooltip.Provider>
	);
}

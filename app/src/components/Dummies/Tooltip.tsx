import { ReactNode } from 'react';

import * as RadixTooltip from '@radix-ui/react-tooltip';

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
}

export default function Tooltip(props: TooltipProps) {
	return (
		<RadixTooltip.Provider>
			<RadixTooltip.Root delayDuration={400}>
				<RadixTooltip.Trigger asChild>{props.children}</RadixTooltip.Trigger>
				<RadixTooltip.Portal>
					<RadixTooltip.Content
						className="text-sm py-1 px-3 rounded-full bg-secondary
            data-[state='delayed-open']:animate-fadeIn"
						sideOffset={5}
					>
						{props.content}
					</RadixTooltip.Content>
				</RadixTooltip.Portal>
			</RadixTooltip.Root>
		</RadixTooltip.Provider>
	);
}

'use client';

import React from 'react';

import * as RadixTooltip from '@radix-ui/react-tooltip';

interface TooltipProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
}

export default function Tooltip(props: TooltipProps) {
	return (
		<RadixTooltip.Provider>
			<RadixTooltip.Root delayDuration={400}>
				<RadixTooltip.Trigger asChild>{props.trigger}</RadixTooltip.Trigger>
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

import * as RDialog from '@radix-ui/react-dialog';

interface DialogProps {
	children: JSX.Element;
	open: boolean;
	handleChange: (value: boolean) => void;
}

export default function Dialog({ open, handleChange, children }: DialogProps) {
	return (
		<RDialog.Root open={open} onOpenChange={handleChange}>
			<RDialog.Portal>
				<RDialog.Overlay className="bg-black/20 fixed inset-0 overflow-y-auto" onClick={console.log}>
					<div className="fixed top-0 left-0 w-[100vw] h-[100vh]" />
					<RDialog.Content>{children}</RDialog.Content>
				</RDialog.Overlay>
			</RDialog.Portal>
		</RDialog.Root>
	);
}

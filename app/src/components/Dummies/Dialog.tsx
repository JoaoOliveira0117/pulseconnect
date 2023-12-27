import { Root, Portal, Overlay, Content } from '@radix-ui/react-dialog';

interface DialogProps {
	children?: JSX.Element;
	open: boolean;
	handleChange: (value: boolean) => void;
}

export default function Dialog({ open, handleChange, children }: DialogProps) {
	return (
		<Root open={open} onOpenChange={handleChange}>
			<Portal>
				<Overlay className="bg-black/20 fixed inset-0 overflow-y-auto" onClick={console.log}>
					<Content>{children}</Content>
				</Overlay>
			</Portal>
		</Root>
	);
}

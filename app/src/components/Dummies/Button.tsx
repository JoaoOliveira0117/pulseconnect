type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant: 'borderless' | 'outline' | 'filled';
	active?: boolean;
};

const defaults = 'hover:bg-bgsecondary text-secondary cursor-pointer rounded-xl';

const variants = {
	borderless: 'bg-bgprimary',
	outline: '$bg-bgprimary border-2 border-bgsecondary',
	filled: 'hover:text-white bg-bgsecondary',
	disabled: (b?: boolean) => !!b && 'cursor-not-allowed opacity-50',
	active: (b?: boolean) => !!b && 'text-white font-bold',
};

export default function Button({
	children,
	className,
	variant,
	active = false,
	disabled = false,
	...rest
}: ButtonProps) {
	return (
		<button
			{...rest}
			type="button"
			className={`${defaults} ${variants[variant]} ${variants.disabled(disabled)} ${variants.active(
				active,
			)} ${className}`}
		>
			{children}
		</button>
	);
}

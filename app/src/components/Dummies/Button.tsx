type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant: 'borderless' | 'outline' | 'filled';
	active?: boolean;
};

const defaults = 'hover:bg-bgsecondary text-secondary rounded-xl';

const variants = {
	borderless: 'bg-bgprimary',
	outline: '$bg-bgprimary border-2 border-bgsecondary',
	filled: 'hover:text-white bg-bgsecondary',
	disabled: (b?: boolean) => (b ? 'cursor-not-allowed opacity-50 hover:none hover:text-secondary' : 'cursor-pointer'),
	active: (b?: boolean) => b && 'text-white font-bold',
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
			type="button"
			{...rest}
			disabled={disabled}
			className={`${defaults} ${variants[variant]} ${variants.disabled(disabled)} ${variants.active(
				active,
			)} ${className}`}
		>
			{children}
		</button>
	);
}

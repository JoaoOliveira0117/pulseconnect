type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	className?: string;
	variant: 'transparent' | 'outline' | 'filled';
	multiline?: boolean;
	label?: string;
};

const labelDefaults = 'flex flex-col text-primary group-focus-within:text-secondary text-sm mb-4 font-bold';

const defaults =
	'py-2 pr-2 prfont-light caret-white outline-none text-sm placeholder:italic placeholder:text-gray-200 font-normal';

const labelVariants = {
	transparent: 'text-primary',
	outline: 'text-primary',
	filled: 'text-white',
};

const variants = {
	transparent: 'bg-transparent',
	outline:
		'bg-transparent border-b border-primary focus:border-secondary focus:text-secondary transition-all duration-150',
	filled: 'bg-bgtertiary rounded-lg text-white',
};

function Input({ name, label, variant, className, ...rest }: InputProps) {
	return label ? (
		<label htmlFor={name} className={`${labelDefaults} ${labelVariants.outline}`}>
			<span>{label}</span>
			<input {...rest} name={name} className={`${defaults} ${variants.outline} ${className}`} />
		</label>
	) : (
		<input {...rest} name={name} className={`${defaults} ${variants[variant]} ${className}`} />
	);
}

export default Input;

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	className?: string;
	variant: 'transparent' | 'outline' | 'filled';
	multiline?: boolean;
	label?: string;
};

const defaults = 'py-2 px-4 font-light caret-white outline-none text-sm placeholder:italic placeholder:text-gray-200 ';

const variants = {
	transparent: 'bg-transparent',
	outline: 'bg-transparent border-b border-primary focus:border-secondary',
	filled: 'bg-bgtertiary',
};

function Input({ name, label, variant, className, ...rest }: InputProps) {
	return label ? (
		<label htmlFor={name} className="flex flex-col text-primary group-focus-within:text-secondary text-sm mb-4">
			<span>{label}</span>
			<input {...rest} name={name} className={`${defaults} ${variants[variant]} ${className} `} />
		</label>
	) : (
		<input {...rest} name={name} className={`${defaults} ${variants[variant]} ${className} `} />
	);
}

export default Input;

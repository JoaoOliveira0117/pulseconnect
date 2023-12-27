import useAutosizeTextArea from '@/hooks/useAutosizeTextArea';
import { useRef, useState } from 'react';

type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
	className?: string;
	variant: 'transparent' | 'outline' | 'filled';
	resize?: boolean;
	rows?: number;
};

const defaults = 'px-6 font-light caret-white outline-none placeholder:italic placeholder:text-gray-200 rounded-full';

const variants = {
	transparent: 'bg-transparent',
	outline: 'py-2 bg-transparent border border-secondary',
	filled: 'bg-bgtertiary',
	resizable: (b: boolean) => (b ? 'resize' : 'resize-none'),
};

export default function TextArea({ className, variant, resize, onChange, ...rest }: TextAreaProps) {
	const [value, setValue] = useState('');
	const currentRef = useRef<HTMLTextAreaElement>(null);

	useAutosizeTextArea(currentRef.current, value);

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value);
		if (onChange) onChange(e);
	};

	return (
		<textarea
			{...rest}
			ref={currentRef}
			className={`${defaults} ${variants[variant]} ${variants.resizable(!!resize)} ${className}`}
			onChange={handleChange}
			rows={1}
			maxLength={300}
		/>
	);
}

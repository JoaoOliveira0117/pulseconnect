import React, { useRef, useState } from 'react';
import useAutosizeTextArea from '@/hooks/useAutosizeTextArea';
import TextAreaDummy from '../../Dummies/TextArea';
import { InputProps } from '../input.types';

function TextArea(props: InputProps) {
	const [value, setValue] = useState('');
	const ref = useRef<HTMLTextAreaElement>(null);

	useAutosizeTextArea(ref.current, value);

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value);
		if (props.onChange) props.onChange(e);
	};

	return (
		<TextAreaDummy
			ref={ref}
			onChange={handleChange}
			rows={1}
			{...props}
			maxLength={300}
		/>
	);
}

export default TextArea;

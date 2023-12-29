import { useState } from 'react';

import { useRouter } from 'next/navigation';
import useToast from '@/hooks/useToast';

import Button from '../Dummies/Button';
import Input from '../Dummies/Input';
import AuthOptions from '../AuthOptions';
import form from './form';
import { registerUser } from '@/store/thunks/auth.thunk';
import { useDispatch } from 'react-redux';

const DEFAULT_FORM_VALUES = {
	name: '',
	username: '',
	email: '',
	password: '',
	confirm_password: '',
};

export default function RegisterForm() {
	const [formValues, setFormValues] = useState(DEFAULT_FORM_VALUES);

	const toast = useToast();
	const router = useRouter();
	const dispatch = useDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = () =>
		registerUser(dispatch, formValues)
			.then(() => {
				toast('Redirecting...', 'success');
				router.push('/home');
			})
			.catch((err) => {
				console.log(err.errors);
				toast(err.errors, 'error');
			});

	return (
		<form className="absolute left-0 min-w-[300px] flex flex-col items-center gap-8 ">
			{form.map((input) => (
				<Input
					key={input.name}
					variant={input.variant}
					name={input.name}
					label={input.label}
					type={input.type}
					onChange={handleChange}
				/>
			))}
			<AuthOptions />
			<hr className="w-[75%] border-bgsecondary border-y-1" />
			<Button type="submit" variant="filled" className="text-sm py-3 px-8 my-2" onClick={handleSubmit}>
				Register
			</Button>
		</form>
	);
}

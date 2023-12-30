import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/hooks/useRedux';
import useToast from '@/hooks/useToast';

import { authenticateUser } from '@/store/thunks/auth.thunk';

import Button from '../Dummies/Button';
import Input from '../Dummies/Input';
import AuthOptions from '../AuthOptions';

const DEFAULT_FORM_VALUES = {
	email: '',
	password: '',
};

export default function LoginForm() {
	const [formValues, setFormValues] = useState(DEFAULT_FORM_VALUES);

	const router = useRouter();
	const dispatch = useAppDispatch();
	const toast = useToast();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		authenticateUser(dispatch, formValues)
			.then(() => {
				toast('Redirecting...', 'success');
				router.push('/home');
			})
			.catch((err) => {
				toast(err.errors, 'error');
			});
	};

	return (
		<form className="absolute left-0 min-w-[300px] flex flex-col items-center gap-8" onSubmit={handleSubmit}>
			<Input variant="outline" name="email" label="Email" onChange={handleChange} />
			<Input variant="outline" name="password" label="Password" type="password" onChange={handleChange} />
			<AuthOptions />
			<hr className="w-[75%] border-bgsecondary border-y-1" />
			<Button type="submit" variant="filled" className="text-sm py-3 px-8 my-2">
				Login
			</Button>
		</form>
	);
}

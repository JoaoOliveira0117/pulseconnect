'use client';

import UserProfilePicture from '@/components/UserProfilePicture';
import Input from '../Dummies/Input';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { UserType } from '@/types';
import useToast from '@/hooks/useToast';
import { updateCurrentUser } from '@/store/thunks/currentUser.thunk';
import Button from '../Dummies/Button';

export default function UserMe() {
	const [hasChanges, setHasChanges] = useState(false);
	const [user, setUser] = useState<UserType>({} as UserType);
	const currentUser = useAppSelector((state) => state.currentUser.data);

	const toast = useToast();
	const dispatch = useAppDispatch();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setHasChanges(true);
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const handleFileSelected = (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files?.length) return;

		setHasChanges(true);

		const targetFile = e.target.files[0];

		if (targetFile.size > 2 * 1024 * 1024) {
			return toast('File too large, max size is 2MB', 'error');
		}

		const file = targetFile as unknown as string; // Typescript is weird...

		setUser({ ...user, file });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData();

		Object.keys(user).forEach((key) => {
			if (currentUser && user[key] === currentUser[key]) {
				return;
			}
			formData.append(key, user[key]);
		});

		updateCurrentUser(dispatch, formData)
			.then(() => toast('User update successfull!'))
			.catch((err) => toast(err.errors, 'error'));
	};

	useEffect(() => {
		if (currentUser) {
			setUser(currentUser);
		}
	}, [currentUser]);

	if (!currentUser) {
		return null;
	}

	return (
		<div className="w-full mt-16 flex items-start justify-evenly">
			<UserProfilePicture profilePicture={user?.profilePicture} editable onChange={handleFileSelected} />
			<div className="flex gap-8">
				<form className="flex flex-col gap-2" onSubmit={handleSubmit}>
					<Input variant="outline" label="Username" name="username" value={user.username} onChange={handleChange} />
					<Input variant="outline" label="Full Name" name="name" value={user.name} onChange={handleChange} />
					<Input variant="outline" label="Email" name="email" value={user.email} onChange={handleChange} />
					<Button variant="filled" className="self-end p-2 px-4" type="submit" disabled={!hasChanges}>
						Save
					</Button>
				</form>
			</div>
		</div>
	);
}

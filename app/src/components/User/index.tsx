'use client';

import UserImage from '@/components/Dummies/ProfilePicture';
import { UserType } from '@/types';
import Input from '../Dummies/Input';

interface UserProps {
	user: UserType;
}

export default function User({ user }: UserProps) {
	return (
		<div className="w-full mt-16 flex items-start justify-evenly">
			<UserImage size={240} src={user?.profilePicture} />
			<div className="flex gap-8">
				<div className="flex flex-col gap-2">
					<Input variant="outline" label="Username" value={user.username} disabled />
					<Input variant="outline" label="Full Name" value={user.name} disabled />
				</div>
			</div>
		</div>
	);
}

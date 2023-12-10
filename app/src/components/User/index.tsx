'use client';

import UserImage from '@/components/Dummies/UserImage';
import Input from '@/components/Input';
import { UserType } from '@/types';

interface UserProps {
	user: UserType;
}

export default function User({ user }: UserProps) {
	return (
		<div className="min-w-[1000px]">
			<div className="w-full mt-16 flex items-start justify-evenly">
				<UserImage size={240} src={user.profilePicture} />
				<div className="flex gap-8">
					<div className="flex flex-col gap-2">
						<Input variant="outline" label="Username" value={user.username} disabled />
						<Input variant="outline" label="Full Name" value={user.name} disabled />
					</div>
				</div>
			</div>
		</div>
	);
}

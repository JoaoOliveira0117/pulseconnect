'use client';

import Input from '@/components/Input';
import UserProfilePicture from '@/components/UserProfilePicture';
import { UserType } from '@/types';

interface UserMeProps {
	userToken?: string;
	user: UserType;
}

export default function UserMe({ userToken, user }: UserMeProps) {
	return (
		<div className="max-w-[1000px] flex flex-col items-center gap-8">
			<div className="w-full mt-16 flex items-start justify-evenly">
				<UserProfilePicture userToken={userToken} profilePicture={user.profilePicture} />
				<div className="flex gap-8">
					<div className="flex flex-col gap-2">
						<Input variant="outline" label="Username" value={user.username} disabled />
						<Input variant="outline" label="Full Name" value={user.name} disabled />
						<Input variant="outline" label="Email" value={user.email} disabled />
					</div>
				</div>
			</div>
		</div>
	);
}

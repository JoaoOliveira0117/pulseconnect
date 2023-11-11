'use client'

import { useEffect, useState } from 'react';
import UserImage from '@/components/Dummies/UserImage';
import Input from '@/components/Input';
import { UserType } from '@/types';
import { useAppSelector } from '@/hooks/useRedux';

export default function UserSettings() {
	const [user, setUser] = useState<UserType>({} as UserType)
	const userMeState = useAppSelector((state) => state.userMe.data);

	useEffect(()=>{
		if (userMeState) {
			setUser(userMeState)
		}
	},[userMeState])

	return (
		<div className="min-w-[1000px]">
			<div className="w-full mt-16 flex items-start justify-evenly">
				<UserImage size={240} />
				<div className="flex gap-8">
					<div className="flex flex-col gap-2">
						<Input variant="outline" label="Username" value={user.username} disabled/>
						<Input variant="outline" label="Full Name" value={user.name} disabled/>
						<Input variant="outline" label="Email" value={user.email} disabled/>
					</div>
				</div>
			</div>
		</div>
	);
}

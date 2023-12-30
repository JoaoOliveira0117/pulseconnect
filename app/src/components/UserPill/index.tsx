import { UserType } from '@/types';
import UserMeProfilePicture from '../Dummies/UserMeProfilePicture';
import { AiOutlineDown } from 'react-icons/ai';

type UserPillProps = {
	user: UserType;
};

export default function UserPill({ user }: UserPillProps) {
	return (
		<div className="flex items-center justify-between cursor-pointer gap-2 p-2 px-4 hover:bg-bgsecondary rounded-full transition ease-out bg-bgprimary duration-200">
			<UserMeProfilePicture className="basis-10" size={16} />
			<h2 className="flex items-center justify-between w-[8rem] overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-light text-start">
				<span>@{user.username}</span>
				<span className="text-secondary">
					<AiOutlineDown />
				</span>
			</h2>
		</div>
	);
}

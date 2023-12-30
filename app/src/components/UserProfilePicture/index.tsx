import { ChangeEvent } from 'react';
import UserImage from '@/components/Dummies/ProfilePicture';

interface UserProfilePictureProps {
	profilePicture?: string;
	editable?: boolean;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function UserProfilePicture({ profilePicture, editable = false, onChange }: UserProfilePictureProps) {
	return (
		<div className="relative">
			<UserImage className="min-w-[240px]" size={240} src={profilePicture} />
			{editable && (
				<label htmlFor="profilePicture">
					<span className="flex justify-center items-center w-full h-full absolute top-0 rounded-full opacity-0 hover:opacity-100 hover:bg-black/[0.5] active:bg-black/[0.75] transition-all ease-in-out duration-100 cursor-pointer text-xl">
						Change profile picture
					</span>
					<input
						type="file"
						id="profilePicture"
						name="profilePicture"
						className="hidden"
						accept="image/*"
						onChange={onChange}
					/>
				</label>
			)}
		</div>
	);
}

export default UserProfilePicture;

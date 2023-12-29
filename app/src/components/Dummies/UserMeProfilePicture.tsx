import { useAppSelector } from '@/hooks/useRedux';
import ProfilePicture from './ProfilePicture';

type ProfilePictureProps = {
	className?: string;
	size?: number;
};

export default function UserMeProfilePicture({ className, size = 24 }: ProfilePictureProps) {
	const profilePicture = useAppSelector((state) => state.currentUser.data?.profilePicture);
	return <ProfilePicture size={size} src={profilePicture} className={className} />;
}

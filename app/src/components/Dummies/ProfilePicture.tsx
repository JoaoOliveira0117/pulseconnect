import Image from 'next/image';
import { BiSolidUser } from 'react-icons/bi';

type ProfilePictureProps = {
	className?: string;
	src?: string;
	size?: number;
};

const defaults = 'w-full aspect-square rounded-full';

export default function ProfilePicture({ className, src, size = 24 }: ProfilePictureProps) {
	if (!src) {
		return (
			<div
				className={`${defaults} bg-bgprimary border-secondary text-secondary border flex items-center justify-center ${className}`}
			>
				<BiSolidUser className={'w-3/4 h-3/4'} />
			</div>
		);
	}

	return (
		<Image
			width={size}
			height={size}
			className={`${defaults} object-cover ${className} `}
			src={src}
			alt="Profile Picture"
		/>
	);
}

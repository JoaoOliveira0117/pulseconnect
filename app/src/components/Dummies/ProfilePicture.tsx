import Image from 'next/image';
import { BiSolidUser } from 'react-icons/bi';

type ProfilePictureProps = {
	className?: string;
	src?: string;
	size?: number;
};

const defaults = 'aspect-square rounded-full';

export default function ProfilePicture({ className, src, size = 24 }: ProfilePictureProps) {
	if (!src) {
		return (
			<div
				className={`w-full border-secondary text-secondary border flex items-center justify-center ${defaults} ${className}`}
			>
				<BiSolidUser className={'w-3/4 h-3/4'} />
			</div>
		);
	}

	return (
		<Image
			width={size}
			height={size}
			className={`${defaults} ${className} h-min object-cover`}
			src={src}
			alt="Profile Picture"
		/>
	);
}

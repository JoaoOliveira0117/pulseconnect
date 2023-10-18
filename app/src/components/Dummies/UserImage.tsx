import Image from 'next/image';
import { BiSolidUser } from 'react-icons/bi';

export default function UserImage({
	className = '',
	hasImage = true,
	size = 24,
}) {
	const image = 'https://source.unsplash.com/random/200x200';
	return hasImage ? (
		<Image
			width={size}
			height={size}
			className={`aspect-square object-cover rounded-full ${className}`}
			src={image}
			alt="George Beck"
		/>
	) : (
		<BiSolidUser
			className={`w-[${size}px] h-[${size}px] text-2xl text-secondary border-secondary border p-1 rounded-full ${className}`}
		/>
	)
}


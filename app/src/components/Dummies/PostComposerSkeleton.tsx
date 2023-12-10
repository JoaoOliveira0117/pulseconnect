'use client';

import UserImage from '../Dummies/UserImage';

export default function PostComposerSkeleton() {
	return (
		<div className="flex mx-auto min-w-[48rem] mt-4 mb-8 justify-evenly items-start gap-4 animate-pulse">
			<UserImage className="m-auto border-secondary bg-secondary text-secondary" size={64} />
			<div className={'w-full bg-bgtertiary rounded-tl-lg rounded-3xl flex self-center items-center justify-end py-2 '}>
				<div className="bg-transparent hover:bg-transparent mr-2 mt-auto h-8" />
			</div>
		</div>
	);
}

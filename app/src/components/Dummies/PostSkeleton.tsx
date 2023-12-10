'use client';

import UserImage from '../Dummies/UserImage';

export default function PostSkeleton() {
	return (
		<div className="min-w-[700px] max-w-2xl mx-auto animate-pulse">
			<div className="flex gap-2">
				<div className="min-w-[4rem] h-full">
					<UserImage className="m-auto border-gray-600 bg-gray-600 text-gray-600" size={48} />
				</div>
				<div className="w-full">
					<div className="flex justify-between items-center h-[30px]">
						<div className="flex gap-3">
							<div className="h-4 rounded-full dark:bg-gray-700 w-24 mb-2" />
							<div className="h-4 rounded-full dark:bg-gray-700 w-48 mb-2" />
						</div>
						<div className="h-4 rounded-full dark:bg-gray-500 w-24 mb-2" />
					</div>
					<div className="my-2">
						<div className="h-2.5 rounded-full dark:bg-gray-700 w-full mb-2" />
						<div className="h-2.5 rounded-full dark:bg-gray-700 w-full mb-2" />
						<div className="h-2.5 rounded-full dark:bg-gray-700 w-24 mb-2" />
					</div>
				</div>
			</div>
			<div className="my-2 cursor-default select-none">
				<div className="flex items-center justify-evenly">
					<div className="h-4 bg-gray-600 rounded-full dark:bg-gray-600 w-8 mb-2" />
					<div className="h-4 bg-gray-600 rounded-full dark:bg-gray-600 w-8 mb-2" />
					<div className="h-4 bg-gray-600 rounded-full dark:bg-gray-600 w-8 mb-2" />
				</div>
			</div>
			<hr className="border-bgsecondary border-y-1" />
		</div>
	);
}

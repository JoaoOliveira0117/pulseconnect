import React from 'react';
import { SlLike } from 'react-icons/sl';
import { FaRegComments } from 'react-icons/fa';
import { AiOutlineRetweet } from 'react-icons/ai';

import { PostType } from '@/types';
import UserImage from '../Dummies/UserImage';
import Button from '../Dummies/Button';
import Tooltip from '../Dummies/Tooltip';

type Interaction = {
  Icon: React.FC<any>;
  count: number;
  tooltip: string;
};

export default function Post({
	user,
	content,
	createdAt,
	likes,
	comments,
	reposts,
	// liked,
	// reposted,
}: PostType) {
	const interactions: Interaction[] = [
		{
			Icon: SlLike,
			count: likes,
			tooltip: 'Like',
		},
		{
			Icon: AiOutlineRetweet,
			count: reposts,
			tooltip: 'Repost',
		},
		{
			Icon: FaRegComments,
			count: comments,
			tooltip: 'Comment',
		},
	];

	return (
		<div className="min-w-[700px] max-w-2xl mx-auto">
			<div className="flex gap-2">
				<div className="min-w-[4rem] h-full">
					<UserImage src={user.profilePicture} className="m-auto" size={36} />
				</div>
				<div>
					<div className="flex items-center gap-2 h-[30px]">
						<h2 className="text-sm font-light">
							{user.name}
							{' '}
  						| @{user.username}
						</h2>
						<p className="text-xs font-light text-secondary pt-0.5">
							{createdAt}
						</p>
					</div>
					<div className="my-2">
						<p className="font-light">{content}</p>
					</div>
				</div>
			</div>
			<div className="my-2 cursor-default select-none">
				<div className="flex items-center justify-evenly">
					{interactions.map((interaction, i) => (
						<Tooltip
							key={i}
							trigger={(
								<Button variant="borderless" className="w-full py-2 ">
									<div className="m-auto flex items-center justify-center gap-2">
										<interaction.Icon />
										{interaction.count}
									</div>
								</Button>
							)}
							content={interaction.tooltip}
						/>
					))}
				</div>
			</div>
			<hr className="border-bgsecondary border-y-1" />
		</div>
	);
}

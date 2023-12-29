'use client';

import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import Button from '../Dummies/Button';
import Tooltip from '../Dummies/Tooltip';
import { useAppDispatch } from '@/hooks/useRedux';
import { createReply } from '@/store/thunks/replies.thunk';
import Input from '../Dummies/Input';
import UserMeProfilePicture from '../Dummies/UserMeProfilePicture';

type ReplyComposerProps = {
	postId: string;
};

export default function ReplyComposer({ postId }: ReplyComposerProps) {
	const [content, setContent] = useState('');

	const dispatch = useAppDispatch();

	const handleCreateComment = async () => {
		setContent('');
		createReply(dispatch, { content }, postId);
	};

	return (
		<div className="flex gap-2">
			<UserMeProfilePicture size={48} />
			<div
				className={
					'w-full bg-bgtertiary rounded-tl-lg rounded-3xl flex self-center items-center justify-between py-1 text-sm'
				}
			>
				<Input
					variant="transparent"
					className="w-full"
					placeholder="What are your thoughts?"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					multiline
				/>
				<Tooltip content={<span>Create a new Post</span>}>
					<Button
						variant="borderless"
						className="bg-transparent hover:bg-transparent mr-1 mt-auto"
						onClick={handleCreateComment}
					>
						<AiOutlinePlus
							className={
								'text-bgprimary text-4xl bg-secondary px-[0.5rem] hover:text-white transition-all duration-150 rounded-full'
							}
						/>
					</Button>
				</Tooltip>
			</div>
		</div>
	);
}

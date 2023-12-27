'use client';

import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import Button from '../Dummies/Button';
import Tooltip from '../Dummies/Tooltip';
import UserImage from '../Dummies/ProfilePicture';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { createCommentAction } from '@/store/thunks/comments.thunk';
import Input from '../Dummies/Input';
import useAuth from '@/hooks/useAuth';

interface CommentComposer {
	commentId: string;
}

export default function CommentComposer({ commentId }: CommentComposer) {
	const { accessToken } = useAuth();
	const userMe = useAppSelector((state) => state.userMe?.data);
	const [content, setContent] = useState('');

	const dispatch = useAppDispatch();

	const handleCreateComment = async () => {
		setContent('');
		await dispatch(createCommentAction({ content }, commentId, accessToken));
	};

	return (
		<div className="flex gap-2">
			<UserImage src={userMe.profilePicture} size={48} />
			<div
				className={
					'w-full bg-bgtertiary rounded-tl-lg rounded-3xl flex self-center items-center justify-between py-1 text-sm'
				}
			>
				<Input
					variant="transparent"
					className="w-full"
					placeholder={`What are your thoughts about the post above ${userMe.name}?`}
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

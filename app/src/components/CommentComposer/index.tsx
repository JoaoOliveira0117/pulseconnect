'use client';

import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import Button from '../Dummies/Button';
import Tooltip from '../Dummies/Tooltip';
import UserImage from '../Dummies/UserImage';
import Input from '../Input';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { createCommentAction } from '@/store/thunks/comments.thunk';

interface CommentComposer {
	userToken?: string;
	commentId: string;
}

export default function CommentComposer({ userToken, commentId }: CommentComposer) {
	const userMe = useAppSelector((state) => state.userMe?.data);
	const [content, setContent] = useState('');

	const dispatch = useAppDispatch();

	const handleCreateComment = async () => {
		setContent('');
		await dispatch(createCommentAction({ content }, commentId, userToken));
	};

	return (
		<div className="flex mt-4 w-full max-w-[44rem] justify-evenly items-start gap-2">
			<UserImage className="mx-2" src={userMe.profilePicture} size={48} />
			<div
				className={`w-full bg-bgtertiary rounded-tl-lg rounded-3xl 
      flex self-center items-center justify-between py-1 text-sm`}
			>
				<Input
					variant="transparent"
					className="w-full"
					placeholder={`What are your thoughts about the post above ${userMe.name}?`}
					multiline
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
				<Tooltip content={<span>Create a new Post</span>}>
					<Button
						variant="borderless"
						className="bg-transparent hover:bg-transparent mr-1 mt-auto"
						onClick={handleCreateComment}
					>
						<AiOutlinePlus
							className={`text-bgprimary text-4xl bg-secondary
          px-[0.5rem] hover:text-white transition-all 
         duration-150 rounded-full`}
						/>
					</Button>
				</Tooltip>
			</div>
		</div>
	);
}

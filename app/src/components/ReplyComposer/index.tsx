'use client';

import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import Button from '../Dummies/Button';
import Tooltip from '../Dummies/Tooltip';
import { useAppDispatch } from '@/hooks/useRedux';
import { createReply } from '@/store/thunks/replies.thunk';
import UserMeProfilePicture from '../Dummies/UserMeProfilePicture';
import TextArea from '../Dummies/TextArea';

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
		<div className="flex w-full">
			<UserMeProfilePicture className="max-w-[3rem] self-end" />
			<div className={'w-full bg-bgtertiary rounded-2xl flex self-center py-2 ml-2'}>
				<TextArea
					variant="transparent"
					className="w-full self-center"
					placeholder={'What are you thinking today?'}
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
				<Tooltip content={<span>Create a new post</span>} delayDuration={150}>
					<div className="mt-auto">
						<Button
							variant="borderless"
							className="bg-secondary hover:bg-secondary rounded-lg p-2 mr-2 mt-auto text-lg"
							onClick={handleCreateComment}
						>
							<AiOutlinePlus className="text-bgsecondary hover:text-white transition-all duration-150" />
						</Button>
					</div>
				</Tooltip>
			</div>
		</div>
	);
}

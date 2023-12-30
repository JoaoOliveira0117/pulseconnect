'use client';

import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import Button from '../Dummies/Button';
import Tooltip from '../Dummies/Tooltip';
import { useAppDispatch } from '@/hooks/useRedux';
import TextArea from '../Dummies/TextArea';
import { createPost } from '@/store/thunks/posts.thunk';
import UserMeProfilePicture from '../Dummies/UserMeProfilePicture';
import useToast from '@/hooks/useToast';

export default function PostComposer() {
	const [content, setContent] = useState('');

	const toast = useToast();
	const dispatch = useAppDispatch();

	const handleCreatePost = async () => {
		setContent('');
		createPost(dispatch, { content }).catch((err) => toast(err.errors, 'error'));
	};

	return (
		<div className="flex w-full">
			<UserMeProfilePicture />
			<div className={'w-full bg-bgtertiary rounded-2xl flex self-center py-2 ml-2'}>
				<TextArea
					variant="transparent"
					className="w-full self-center min-w-[40rem]"
					placeholder={'What are you thinking today?'}
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
				<Tooltip content={<span>Create a new post</span>} delayDuration={150}>
					<div>
						<Button
							variant="borderless"
							className="bg-secondary hover:bg-secondary rounded-lg p-2 mr-2 mt-auto text-lg"
							onClick={handleCreatePost}
						>
							<AiOutlinePlus className="text-bgsecondary hover:text-white transition-all duration-150" />
						</Button>
					</div>
				</Tooltip>
			</div>
		</div>
	);
}

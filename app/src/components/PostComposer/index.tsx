'use client';

import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import Button from '../Dummies/Button';
import Tooltip from '../Dummies/Tooltip';
import { useAppDispatch } from '@/hooks/useRedux';
import TextArea from '../Dummies/TextArea';
import { createPost } from '@/store/thunks/posts.thunk';
import UserMeProfilePicture from '../Dummies/UserMeProfilePicture';

export default function PostComposer() {
	const [content, setContent] = useState('');

	const dispatch = useAppDispatch();

	const handleCreatePost = async () => {
		setContent('');
		createPost(dispatch, { content });
	};

	return (
		<div className="flex w-full">
			<UserMeProfilePicture />
			<div className={'w-full bg-bgtertiary rounded-3xl rounded-tl-lg flex self-center py-2 ml-2'}>
				<TextArea
					variant="transparent"
					className="w-full self-center"
					placeholder={'What are you thinking today?'}
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
				<Tooltip content={<span>Create a new post</span>}>
					<Button
						variant="borderless"
						className="bg-secondary hover:bg-secondary rounded-full p-2 mr-2 mt-auto text-lg text-black hover:text-white transition-all duration-150"
						onClick={handleCreatePost}
					>
						<AiOutlinePlus />
					</Button>
				</Tooltip>
			</div>
		</div>
	);
}

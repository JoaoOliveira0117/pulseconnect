'use client';

import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import Button from '../Dummies/Button';
import Tooltip from '../Dummies/Tooltip';
import UserImage from '../Dummies/ProfilePicture';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { createPostAction } from '@/store/thunks/posts.thunk';
import PostComposerSkeleton from '../Dummies/PostComposerSkeleton';
import TextArea from '../Dummies/TextArea';
import useAuth from '@/hooks/useAuth';

export default function PostComposer() {
	const isUserLoading = useAppSelector((state) => state.userMe?.loading);
	const userMe = useAppSelector((state) => state.userMe?.data);
	const [content, setContent] = useState('');

	const dispatch = useAppDispatch();

	const handleCreatePost = async () => {
		setContent('');
		const { accessToken } = useAuth();
		await dispatch(createPostAction({ content }, accessToken));
	};

	if (isUserLoading || !userMe.id) {
		return <PostComposerSkeleton />;
	}

	return (
		<div className="flex w-full">
			<UserImage src={userMe.profilePicture} size={64} />
			<div className={'w-full bg-bgtertiary rounded-3xl rounded-tl-lg flex self-center py-2 ml-2'}>
				<TextArea
					variant="transparent"
					className="w-full self-center"
					placeholder={`What are you thinking today ${userMe.name}?`}
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

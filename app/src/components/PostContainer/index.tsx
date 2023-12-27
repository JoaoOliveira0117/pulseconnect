'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { getPersonalPostsAction, getTrendingPostsAction } from '@/store/thunks/posts.thunk';
import Post from '../Post';

interface PostContainerProps {
	userToken?: string;
	isPersonalPage?: boolean;
}

export default function PostContainer({ userToken, isPersonalPage = false }: PostContainerProps) {
	const posts = useAppSelector((state) => (isPersonalPage ? state.personalPosts.data : state.trendingPosts.data) || []);
	const dispatch = useAppDispatch();

	const getPostsDispatchAction = !isPersonalPage ? getTrendingPostsAction : getPersonalPostsAction;

	useEffect(() => {
		dispatch(getPostsDispatchAction(userToken));
	}, [dispatch, userToken]);

	return (
		<div className="flex flex-col gap-4 my-8 w-3/4 m-auto">
			{posts.map((post) => (
				<Post key={post.id} userToken={userToken} post={post} showReplyTooltip={isPersonalPage} />
			))}
		</div>
	);
}

'use client';

import { useEffect } from 'react';
import Post from '../Post';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { getPersonalPostsAction, getTrendingPostsAction } from '@/store/thunks/posts.thunk';

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

	return posts.map((post) => (
		<Post key={post.id} userToken={userToken} post={post} showReplyTooltip={isPersonalPage} />
	));
}

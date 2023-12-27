'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { getPersonalPostsAction, getTrendingPostsAction } from '@/store/thunks/posts.thunk';
import Post from '../Post';
import useAuth from '@/hooks/useAuth';

interface PostContainerProps {
	isPersonalPage?: boolean;
}

export default function PostContainer({ isPersonalPage = false }: PostContainerProps) {
	const { accessToken } = useAuth();
	const dispatch = useAppDispatch();

	const posts = useAppSelector((state) => (isPersonalPage ? state.personalPosts.data : state.trendingPosts.data) || []);

	const getPostsDispatchAction = !isPersonalPage ? getTrendingPostsAction : getPersonalPostsAction;

	useEffect(() => {
		dispatch(getPostsDispatchAction(accessToken));
	}, [dispatch]);

	return (
		<div className="flex flex-col gap-4 my-8 w-3/4 m-auto">
			{posts.map((post) => (
				<Post key={post.id} post={post} showReplyTooltip={isPersonalPage} />
			))}
		</div>
	);
}

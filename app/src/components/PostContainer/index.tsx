'use client';

import { useEffect } from 'react';
import Post from '../Post';
import { getPersonalPostsAction, getPostsAction } from '@/store/thunks/posts.thunk';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import PostSkeleton from '../Dummies/PostSkeleton';

interface PostContainerProps {
	userToken?: string;
	isPersonalPage?: boolean;
}

export default function PostContainer({ userToken, isPersonalPage = false }: PostContainerProps) {
	const posts = useAppSelector((state) => state.posts?.data || []);
	const dispatch = useAppDispatch();

	const getPostsDispatchAction = !isPersonalPage ? getPostsAction : getPersonalPostsAction;

	useEffect(() => {
		dispatch(getPostsDispatchAction(userToken));
	}, [dispatch, userToken]);

	return posts.map((post) => <Post key={post.id} userToken={userToken} post={post} />);
}

'use client';

import PostSkeleton from '@/components/Dummies/PostSkeleton';
import PostContainer from '@/components/PostContainer';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { getInteractedPosts } from '@/store/thunks/posts.thunk';
import { useEffect } from 'react';

export default function Trending() {
	const isFetching = useAppSelector((state) => state.posts.fetching);
	const posts = useAppSelector((state) => state.posts.data);

	const dispatch = useAppDispatch();

	useEffect(() => {
		getInteractedPosts(dispatch);
	}, []);

	return (
		<div className="w-full max-w-3xl m-auto">
			{isFetching ? <PostSkeleton /> : <PostContainer posts={posts} showReplyTooltip />}
		</div>
	);
}

'use client';

import PostSkeleton from '@/components/Dummies/PostSkeleton';
import PostContainer from '@/components/PostContainer';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { getInteractedPosts } from '@/store/thunks/posts.thunk';
import { useEffect } from 'react';

export default function Trending() {
	const isPostsLoading = useAppSelector((state) => state.posts.loading || state.posts.fetching);
	const posts = useAppSelector((state) => state.posts.data);

	const dispatch = useAppDispatch();

	useEffect(() => {
		getInteractedPosts(dispatch);
	}, []);

	return (
		<div className="w-full max-w-3xl m-auto">
			{isPostsLoading ? <PostSkeleton /> : <PostContainer posts={posts} showReplyTooltip />}
		</div>
	);
}

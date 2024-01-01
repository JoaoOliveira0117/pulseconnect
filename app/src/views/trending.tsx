'use client';

import PostComposerSkeleton from '@/components/Dummies/PostComposerSkeleton';
import PostSkeleton from '@/components/Dummies/PostSkeleton';
import PostComposer from '@/components/PostComposer';
import PostContainer from '@/components/PostContainer';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { getAllPosts } from '@/store/thunks/posts.thunk';
import { useEffect } from 'react';

export const revalidate = '0';

export default function Trending() {
	const isUserLoading = useAppSelector((state) => state.currentUser.loading || state.currentUser.fetching);
	const isPostsFetching = useAppSelector((state) => state.posts.fetching);
	const posts = useAppSelector((state) => state.posts.data);

	const dispatch = useAppDispatch();

	useEffect(() => {
		getAllPosts(dispatch);
	}, []);

	return (
		<div className="w-full max-w-3xl m-auto">
			{isUserLoading ? <PostComposerSkeleton /> : <PostComposer />}
			{isPostsFetching ? <PostSkeleton /> : <PostContainer posts={posts} showReplyTooltip={false} />}
		</div>
	);
}

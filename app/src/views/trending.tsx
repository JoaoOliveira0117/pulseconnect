'use client';

import { useAppSelector } from '@/hooks/useRedux';
import PostComposer from '@/components/PostComposer';
import PostContainer from '@/components/PostContainer';
import PostComposerSkeleton from '@/components/Dummies/PostComposerSkeleton';
import PostSkeleton from '@/components/Dummies/PostSkeleton';

interface TrendingProps {
	userToken?: string;
}

export default function Trending({ userToken }: TrendingProps) {
	const isUserLoading = useAppSelector((state) => state.userMe?.loading || !state.userMe?.data.id);
	const isPostsLoading = useAppSelector((state) => state.userMe?.loading || !state.trendingPosts?.data.length);

	return (
		<div className="max-w-[1000px] flex flex-col items-center gap-8">
			{isUserLoading && isPostsLoading ? (
				<>
					<PostComposerSkeleton />
					{Array.from({ length: 3 }).map((_, index) => (
						<PostSkeleton key={index} />
					))}
				</>
			) : (
				<>
					<PostComposer userToken={userToken} />
					<PostContainer userToken={userToken} />
				</>
			)}
		</div>
	);
}

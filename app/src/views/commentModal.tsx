'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { getCommentsAction } from '@/store/thunks/comments.thunk';
import { setComment } from '@/store/reducers/comment.reducer';
import { PostType } from '@/types';
import { useRouter } from 'next/navigation';
import CommentDialog from '@/components/CommentDialog';

export default function CommentModal({ commentId }: { commentId: string }) {
	const comment = useAppSelector((state) => state.comment?.data || {});
	const router = useRouter();
	const dispatch = useAppDispatch();

	const handleChange = () => {
		dispatch(setComment({} as PostType & { replies: PostType[] }));
		router.back();
	};

	useEffect(() => {
		dispatch(getCommentsAction(commentId));
	}, []);

	return <CommentDialog comment={comment} handleChange={handleChange} />;
}

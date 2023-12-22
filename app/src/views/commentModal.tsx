'use client';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { getCommentsAction } from '@/store/thunks/comments.thunk';
import { setComment } from '@/store/reducers/comment.reducer';
import { PostType } from '@/types';
import { useRouter } from 'next/navigation';
import CommentDialog from '@/components/CommentDialog';

export default function CommentModal({ commentId }: { commentId: string }) {
	const [isOpen, setIsOpen] = useState(false);
	const comment = useAppSelector((state) => state.comment?.data || {});
	const router = useRouter();
	const dispatch = useAppDispatch();

	const handleChange = () => {
		dispatch(setComment({} as PostType & { replies: PostType[] }));
		setIsOpen(false);
		router.back();
	};

	useEffect(() => {
		dispatch(getCommentsAction(commentId));
	}, []);

	useEffect(() => {
		if (commentId) {
			setIsOpen(true);
		}
	}, [commentId]);

	return <CommentDialog isOpen={isOpen} comment={comment} handleChange={handleChange} />;
}

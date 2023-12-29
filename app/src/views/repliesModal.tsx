'use client';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/hooks/useRedux';
import { getReplies, removeCurrentReply } from '@/store/thunks/replies.thunk';
import { useRouter } from 'next/navigation';
import RepliesDialog from '@/components/RepliesDialog';

type RepliesModalProps = {
	id: string;
};

export default function RepliesModal({ id }: RepliesModalProps) {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const dispatch = useAppDispatch();

	const handleChange = () => {
		removeCurrentReply(dispatch);
		setIsOpen(false);
		router.back();
	};

	useEffect(() => {
		if (id) {
			getReplies(dispatch, id);
			setIsOpen(true);
		}
	}, [id]);

	return <RepliesDialog isOpen={isOpen} handleChange={handleChange} />;
}

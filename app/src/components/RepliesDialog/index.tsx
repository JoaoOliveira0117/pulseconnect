'use client';

import Dialog from '../Dummies/Dialog';
import Button from '../Dummies/Button';
import { useAppSelector } from '@/hooks/useRedux';

import { MdClose } from 'react-icons/md';
import RepliesContainer from '../RepliesContainer';
import ReplyComposer from '../ReplyComposer';
import Reply from '../Reply';

type RepliesDialogProps = {
	isOpen: boolean;
	handleChange: () => void;
};

const commentLine = [
	'after:absolute',
	'after:content-[""]',
	'after:w-[48px]',
	'after:h-full',
	'after:top-0',
	'after:left-[1.4rem]',
	'after:border-l-2',
	'after:border-secondary',
	'after:z-[-1]',
];

export default function RepliesDialog({ isOpen, handleChange }: RepliesDialogProps) {
	const isFetching = useAppSelector((state) => state.replies.fetching);
	const post = useAppSelector((state) => state.replies.data.post);

	if (isFetching) {
		return <Dialog open={isOpen} handleChange={handleChange} />;
	}

	if (!post) {
		return null;
	}

	return (
		<Dialog open={isOpen} handleChange={handleChange}>
			<div className="m-auto mb-[10rem] translate-y-[10vh] bg-bgprimary rounded-lg max-w-3xl p-4 shadow-xl scale-105 relative">
				<Button variant="borderless" className="absolute top-0 right-0 p-2" onClick={handleChange}>
					<MdClose />
				</Button>
				<div className={`${commentLine.join(' ')} relative flex flex-col gap-4 m-4`}>
					<Reply data={post} isCurrentPost />
					<ReplyComposer postId={post.id} />
				</div>
				<RepliesContainer />
			</div>
		</Dialog>
	);
}

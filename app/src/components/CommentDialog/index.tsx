'use client';
import { PostType } from '@/types';
import CommentComposer from '../CommentComposer';
import Dialog from '../Dummies/Dialog';
import Post from '../Post';
import Button from '../Dummies/Button';
import { MdClose } from 'react-icons/md';

type CommentDialogProps = {
	isOpen: boolean;
	comment: PostType & { replies: PostType[] };
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
	'after:border-bgsecondary',
	'after:z-[-1]',
];

export default function CommentDialog({ isOpen, comment, handleChange }: CommentDialogProps) {
	if (!comment) {
		return <Dialog open={isOpen} handleChange={handleChange} />;
	}

	return (
		<Dialog open={isOpen} handleChange={handleChange}>
			<div className="m-auto mb-[10rem] translate-y-[10vh] bg-bgprimary rounded-lg max-w-3xl p-4 shadow-xl scale-105 relative">
				<Button variant="borderless" className="absolute top-0 right-0 p-2" onClick={handleChange}>
					<MdClose />
				</Button>
				<div className={`${commentLine.join(' ')} relative flex flex-col gap-4 m-4`}>
					<Post post={comment} showInteractions={false} showReplyTooltip={false} />
					<CommentComposer commentId={comment?.id} />
				</div>
				<div className="text-sm font-thin text-primary text-center">
					<p className="mb-2">{comment?.replies?.length ? 'Other Replies' : 'No Replies For This Post Yet'}</p>
					<hr className="border-bgsecondary border-y-1" />
				</div>
				<div className="flex flex-col items-center justify-center mt-8 mx-8 gap-4">
					{comment?.replies?.map((reply) => <Post post={reply} showReplyTooltip={false} isComment />)}
				</div>
			</div>
		</Dialog>
	);
}

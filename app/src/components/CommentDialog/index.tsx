'use client';
import { PostType } from '@/types';
import CommentComposer from '../CommentComposer';
import Dialog from '../Dummies/Dialog';
import Post from '../Post';
import Button from '../Dummies/Button';
import { MdClose } from 'react-icons/md';

interface CommentDialogProps {
	comment: PostType & { replies: PostType[] };
	userToken?: string;
	handleChange: () => void;
}

export default function CommentDialog({ comment, userToken, handleChange }: CommentDialogProps) {
	return (
		<Dialog open={!!comment?.id} handleChange={handleChange}>
			<div className="m-auto mb-[10rem] translate-y-[10vh] bg-bgprimary rounded-lg max-w-[800px] px-4 pt-4 pb-2 shadow-xl scale-105">
				<div className="ml-auto w-10">
					<Button variant="borderless" className="w-10 flex justify-center items-center py-2" onClick={handleChange}>
						<MdClose />
					</Button>
				</div>
				<div className="relative after:absolute after:content-[''] after:w-[48px] after:h-full after:top-0 after:left-8 after:border-l-2 after:border-bgsecondary after:z-[-1]">
					<Post
						userToken={userToken}
						post={comment}
						showInteractions={false}
						showReplyTooltip={false}
						showDivider={false}
					/>
					<CommentComposer userToken={userToken} commentId={comment?.id} />
				</div>
				<div className="mt-8">
					<div className="w-full text-sm font-thin text-primary text-center mb-4">
						<p className="mb-2">{comment?.replies?.length ? 'Other Replies' : 'No Replies For This Post Yet'}</p>
						<hr className="border-bgsecondary border-y-1" />
					</div>
					<div className="flex flex-col gap-4 items-center justify-center py-2">
						{comment?.replies?.map((reply, i) => (
							<Post
								userToken={userToken}
								post={reply}
								showReplyTooltip={false}
								showDivider={i != comment.replies.length - 1}
							/>
						))}
					</div>
				</div>
			</div>
		</Dialog>
	);
}

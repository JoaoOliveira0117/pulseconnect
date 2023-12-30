import { useAppSelector } from '@/hooks/useRedux';
import Reply from '../Reply';

export default function RepliesContainer() {
	const replies = useAppSelector((state) => state.replies.data.replies);

	return (
		<>
			<div className="text-sm font-thin text-primary text-center">
				<p className="mb-2">{replies?.length ? 'Other Replies' : 'No Replies For This Post Yet'}</p>
				<hr className="border-bgsecondary border-y-1" />
			</div>
			<div className="flex flex-col items-center justify-center mt-8 mx-8 gap-4">
				{replies?.map((reply) => <Reply key={reply.id} data={reply} />)}
			</div>
		</>
	);
}

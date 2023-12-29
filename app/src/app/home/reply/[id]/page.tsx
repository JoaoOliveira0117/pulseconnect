import CommentModal from '@/views/repliesModal';

export default function Page({ params }: { params: { id: string } }) {
	return <CommentModal commentId={params.id} />;
}

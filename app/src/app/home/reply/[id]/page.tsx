import CommentModal from '@/views/commentModal';

export default function Page({ params }: { params: { id: string } }) {
	return <CommentModal commentId={params.id} />;
}

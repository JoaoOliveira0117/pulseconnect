import RepliesModal from '@/views/repliesModal';

export default function Page({ params }: { params: { id: string } }) {
	return <RepliesModal id={params.id} />;
}

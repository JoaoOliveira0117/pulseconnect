import dayjs from 'dayjs';
import { PostType } from '@/types';
import UserImage from '../Dummies/ProfilePicture';
import Link from 'next/link';
import PostInteractions from '../PostInteractions';

interface PostProps {
	data: PostType;
	showReplyTooltip: boolean;
}

export default function Post({ data, showReplyTooltip }: PostProps) {
	const targetLink = `/home/user/${data.user?.id}`;
	return (
		<div className="w-full">
			<div className="flex gap-2">
				<Link className="shrink-0" href={targetLink}>
					<UserImage src={data.user?.profilePicture} size={48} />
				</Link>
				<div className="w-full">
					<div className="flex justify-between items-center">
						<h2 className="text-md font-bold">
							<Link href={targetLink}>
								<span>{data.user?.name} </span>
								<span className="font-light text-secondary">@{data.user?.username}</span>
							</Link>{' '}
							{showReplyTooltip && (
								<Link href={`reply/${data.replyTo}`}>
									<span className="text-sm text-primary font-light">as a reply to other post</span>
								</Link>
							)}
						</h2>
						<p className="text-xs font-light text-secondary pt-0.5">{dayjs(data.createdAt).format('DD MMM YY')}</p>
					</div>
					<p className="my-2 font-light">{data.content}</p>
					<PostInteractions post={data} />
				</div>
			</div>
		</div>
	);
}

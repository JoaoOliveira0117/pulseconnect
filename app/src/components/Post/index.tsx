import dayjs from 'dayjs';
import { PostType } from '@/types';
import UserImage from '../Dummies/ProfilePicture';
import Interactions from '../PostInteractions';
import Link from 'next/link';
import { useAppSelector } from '@/hooks/useRedux';

interface PostProps {
	post: PostType;
	userToken?: string;
	isComment?: boolean;
	showInteractions?: boolean;
	showReplyTooltip?: boolean;
}

export default function Post({
	userToken,
	post,
	isComment = false,
	showInteractions = true,
	showReplyTooltip = true,
}: PostProps) {
	const userMe = useAppSelector((state) => state.userMe.data);
	const { user, content, createdAt, replyTo } = post;
	const usernameLink = userMe?.id === user?.id ? '/home/user/me' : `/home/user/${user?.id}`;

	const displayReplyTooltip = showReplyTooltip && replyTo;

	return (
		<div className="w-full">
			<div className="flex gap-2">
				<Link className="shrink-0" href={usernameLink}>
					<UserImage src={user?.profilePicture} size={48} />
				</Link>
				<div className="w-full">
					<div className="flex justify-between items-center">
						<h2 className="text-md font-bold">
							<Link href={usernameLink}>
								<span>{user?.name} </span>
								<span className="font-light text-secondary">@{user?.username}</span>
							</Link>{' '}
							{displayReplyTooltip && (
								<Link href={`reply/${replyTo}`}>
									<span className="text-sm text-primary font-light">as a reply to other post</span>
								</Link>
							)}
						</h2>
						<p className="text-xs font-light text-secondary pt-0.5">{dayjs(createdAt).format('DD MMM YY')}</p>
					</div>
					<p className="my-2 font-light">{content}</p>
					{showInteractions && (
						<Interactions
							userToken={userToken}
							isComment={isComment}
							postId={post.id}
							postLikes={post.likes}
							postComments={post.comments}
							postReposts={post.reposts}
							currentUserHasLiked={post.currentUserHasLiked}
							currentUserHasReposted={post.currentUserHasReposted}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

import dayjs from 'dayjs';
import { PostType } from '@/types';
import UserImage from '../Dummies/UserImage';
import Interactions from '../PostInteractions';
import Link from 'next/link';
import { useAppSelector } from '@/hooks/useRedux';

interface PostProps {
	post: PostType;
	userToken?: string;
}

export default function Post({ userToken, post }: PostProps) {
	const { user, id, likes, reposts, comments, content, createdAt, currentUserHasLiked, currentUserHasReposted } = post;
	const userMe = useAppSelector((state) => state.userMe.data);
	const usernameLink = userMe?.id === user.id ? '/home/user/me' : `/home/user/${user.id}`;
	return (
		<div className="min-w-[700px] max-w-2xl mx-auto">
			<div className="flex gap-2">
				<div className="min-w-[4rem] h-full">
					<Link className="hover:underline" href={usernameLink}>
						<UserImage src={user.profilePicture} className="m-auto" size={48} />
					</Link>
				</div>
				<div className="w-full">
					<div className="flex justify-between items-center h-[30px]">
						<h2 className="text-md font-bold">
							<Link className="hover:underline" href={usernameLink}>
								{user.name}
								<span className="ml-2 font-light text-secondary">@{user.username}</span>
							</Link>
						</h2>
						<p className="text-xs font-light text-secondary pt-0.5">{dayjs(createdAt).format('DD MMM YY')}</p>
					</div>
					<div className="my-2">
						<p className="font-light">{content}</p>
					</div>
				</div>
			</div>
			<div className="my-2 cursor-default select-none">
				<Interactions
					userToken={userToken}
					id={id}
					likes={likes}
					reposts={reposts}
					comments={comments}
					liked={currentUserHasLiked}
					reposted={currentUserHasReposted}
				/>
			</div>
			<hr className="border-bgsecondary border-y-1" />
		</div>
	);
}

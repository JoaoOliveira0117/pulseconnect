import { PostType } from '@/types';
import UserImage from '../Dummies/UserImage';
import Interactions from '../PostInteractions';

interface PostProps {
	post: PostType
	userToken?: string
}

export default function Post({userToken, post }: PostProps) {
	const { user, id, likes, reposts, comments, content, createdAt, currentUserHasLiked, currentUserHasReposted} = post
	return (
		<div className="min-w-[700px] max-w-2xl mx-auto">
			<div className="flex gap-2">
				<div className="min-w-[4rem] h-full">
					<UserImage src={user.profilePicture} className="m-auto" size={36} />
				</div>
				<div>
					<div className="flex items-center gap-2 h-[30px]">
						<h2 className="text-sm font-light">
							{user.name}
							{' '}
  						| @{user.username}
						</h2>
						<p className="text-xs font-light text-secondary pt-0.5">
							{createdAt}
						</p>
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

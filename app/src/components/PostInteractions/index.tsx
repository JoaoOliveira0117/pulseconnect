import Like from './Like'
import Repost from './Repost'
import Comment from './Comment'

interface InteractionsProps {
  userToken?: string,
  id: string,
  likes: number,
  reposts: number,
  comments: number
}

export default function Interactions({ userToken, id, likes, reposts, comments }: InteractionsProps) {
	return <div className="flex items-center justify-evenly">
		<Like userToken={userToken} id={id} count={likes}/>
		<Repost userToken={userToken} id={id} count={reposts}/>
		<Comment count={comments}/>
	</div>
}
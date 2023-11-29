import { SlLike } from 'react-icons/sl';
import Button from "../Dummies/Button";
import Tooltip from "../Dummies/Tooltip";
import { useAppDispatch } from '@/hooks/useRedux';
import { likePostAction, removeLikePostAction } from '@/store/thunks/posts.thunk';

interface LikeProps {
	userToken?: string;
  id: string;
  count: number
	liked: boolean
}

export default function Like({ userToken, id, count, liked }: LikeProps) {
	const dispatch = useAppDispatch()

	const handleClick = () => { 
		if(liked) return dispatch(removeLikePostAction({ id }, userToken))
		return dispatch(likePostAction({ id }, userToken))
	}
	
	return <Tooltip content="Like">
		<div className='w-full'>
			<Button 
				variant="borderless" 
				className="w-full py-2 m-auto flex items-center justify-center gap-2"
				onClick={handleClick}
				active={liked}
			>
				<SlLike />
				{count}
			</Button>
		</div>
	</Tooltip>
}
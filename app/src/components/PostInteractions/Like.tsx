import { SlLike } from 'react-icons/sl';
import Button from "../Dummies/Button";
import Tooltip from "../Dummies/Tooltip";
import { useAppDispatch } from '@/hooks/useRedux';
import { likePostAction } from '@/store/thunks/posts.thunk';

interface LikeProps {
	userToken?: string;
  id: string;
  count: number
}

export default function Like({ userToken, id, count }: LikeProps) {
	const dispatch = useAppDispatch()
	const handleClick = () => {
		dispatch(likePostAction({ id }, userToken))
	}
	return <Tooltip content="Like">
		<div className='w-full'>
			<Button variant="borderless" className="w-full py-2 m-auto flex items-center justify-center gap-2" onClick={handleClick}>
				<SlLike />
				{count}
			</Button>
		</div>
	</Tooltip>
}
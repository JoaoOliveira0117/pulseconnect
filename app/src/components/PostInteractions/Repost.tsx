import { AiOutlineRetweet } from 'react-icons/ai';
import Button from "../Dummies/Button";
import Tooltip from "../Dummies/Tooltip";
import { useAppDispatch } from '@/hooks/useRedux';
import { repostPostAction } from '@/store/thunks/posts.thunk';

interface RepostProps {
	userToken?: string;
  id: string;
  count: number
}

export default function Repost({ userToken, id, count }: RepostProps) {
	const dispatch = useAppDispatch()
	const handleClick = () => {
		dispatch(repostPostAction({ id }, userToken))
	}
	return <Tooltip content="Repost">
		<div className='w-full'>
			<Button variant="borderless" className="w-full py-2 m-auto flex items-center justify-center gap-2" onClick={handleClick}>
				<AiOutlineRetweet />
				{count}
			</Button>
		</div>
	</Tooltip>
}
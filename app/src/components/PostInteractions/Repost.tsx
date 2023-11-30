import { AiOutlineRetweet } from 'react-icons/ai'
import Button from '../Dummies/Button'
import Tooltip from '../Dummies/Tooltip'
import { useAppDispatch } from '@/hooks/useRedux'
import { repostPostAction, removeRepostPostAction } from '@/store/thunks/posts.thunk'

interface RepostProps {
	userToken?: string;
  id: string;
  count: string | number
	reposted: boolean
}

export default function Repost({ userToken, id, count, reposted }: RepostProps) {
  const dispatch = useAppDispatch()
	
  const handleClick = () => reposted ? dispatch(removeRepostPostAction({ id }, userToken)) : dispatch(repostPostAction({ id }, userToken))

  return <Tooltip content="Repost">
    <div className='w-full'>
      <Button 
        variant="borderless" 
        className="w-full py-2 m-auto flex items-center justify-center gap-2"
        onClick={handleClick}
        active={reposted}
      >
        <AiOutlineRetweet />
        {count}
      </Button>
    </div>
  </Tooltip>
}
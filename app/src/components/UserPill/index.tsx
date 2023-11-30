import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/hooks/useRedux'
import { getUserMeAction } from '@/store/thunks/userMe.thunk'
import UserImage from '../Dummies/UserImage'


interface UserPillProps {
	userToken?: string;
}

export default function UserPill({ userToken }: UserPillProps) {  
  const userMe = useAppSelector(state => state.userMe?.data)
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getUserMeAction(userToken))
    router.refresh()
  }, [dispatch, userToken, router])

  if (!userMe) return null

  return <div
    className="flex items-center justify-between cursor-pointer gap-2 p-2 px-4
    hover:bg-bgsecondary rounded-full transition ease-out bg-bgprimary duration-200"
  >
    <UserImage src={userMe.profilePicture || ''} size={24}/>
    <h2 className="block w-full max-w-[8rem] overflow-hidden whitespace-nowrap text-sm font-light text-end ">
      @{userMe.username}
    </h2>
  </div>
}
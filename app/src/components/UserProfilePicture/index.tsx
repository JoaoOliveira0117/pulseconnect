import { ChangeEvent } from 'react'
import UserImage from '@/components/Dummies/UserImage'
import { useAppDispatch } from '@/hooks/useRedux'
import { updateUserMeProfilePictureAction } from '@/store/thunks/userMe.thunk'
import useToast from '@/hooks/useToast'

interface UserProfilePictureProps {
	userToken?: string;
	profilePicture?: string;
}

function UserProfilePicture({ userToken, profilePicture}: UserProfilePictureProps) {
  const dispatch = useAppDispatch()
  const toastify = useToast()
  const handleFileSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return

    const file = e.target.files[0]
		
    try {
		  // 2MB file
      if (file.size > 2 * 1024 * 1024) {
        throw new Error('File too large, max size is 2MB')
      }

      const formData = new FormData()
      formData.append('file', file)

		  dispatch(updateUserMeProfilePictureAction(formData, userToken))
    } catch (err) {
      const error = err as Error
      toastify(error.message, 'error')
    }
  }

  return (
    <div className='relative'>
      <UserImage size={240} src={profilePicture}/>
      <label htmlFor='profilePicture'>
        <span className='flex justify-center items-center w-full h-full absolute top-0 rounded-full opacity-0 
      hover:opacity-100 hover:bg-black/[0.5] active:bg-black/[0.75] transition-all ease-in-out duration-100
      cursor-pointer text-xl'>
				Change profile picture
        </span>
        <input 
          type="file" 
          id='profilePicture' 
          name='profilePicture' 
          className='hidden' 
          accept='image/*' 
          onChange={handleFileSelected}
        />
      </label>
    </div>
  )
}

export default UserProfilePicture
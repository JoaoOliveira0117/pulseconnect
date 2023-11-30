import { cookies } from 'next/headers'
import UserSettings from '@/views/userSettings'

export default function Page() {
  const userToken = cookies().get('jwt')?.value
  return <UserSettings userToken={userToken}/>
}

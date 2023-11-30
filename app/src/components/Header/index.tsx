import { cookies } from 'next/headers'
import Logo from '../Dummies/Logo'
import Navbar from '../Navbar'
import User from '../User'

export default function Header() {
  const userToken = cookies().get('jwt')?.value

  return (
    <div className="w-full min-w-[1000px] cursor-default select-none my-6">
      <div className="flex items-center justify-between">
        <Logo />
        <User userToken={userToken} />
      </div>
      <Navbar />
      <hr className="w-100 border-bgsecondary border-y-1" />
    </div>
  )
}

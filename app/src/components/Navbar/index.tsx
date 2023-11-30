import { ImFire, ImUser } from 'react-icons/im'
import NavbarItem from '../NavbarItem'

export default function Navbar() {
  return (
    <div className="my-4">
      <div className="text-2xl flex items-center justify-evenly">
        <NavbarItem tooltip='Trending 🔥' href='/home/trending'><ImFire/></NavbarItem>
        <NavbarItem tooltip='Your Profile' href='/home/personal'><ImUser/></NavbarItem>
      </div>
    </div>
  )
}

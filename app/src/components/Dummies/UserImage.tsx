import Image from 'next/image'
import { BiSolidUser } from 'react-icons/bi'

export default function UserImage({
  className = '',
  src = '',
  size = 24,
}) {
  return src ? (
    <Image
      width={size}
      height={size}
      className={`aspect-square object-cover rounded-full ${className}`}
      src={src}
      alt="George Beck"
    />
  ) : (
    <BiSolidUser
      className={`text-2xl text-secondary border-secondary border p-1 rounded-full ${className}`}
      style={{ minWidth: `${size}px`, minHeight: `${size}px` }}
    />
  )
}


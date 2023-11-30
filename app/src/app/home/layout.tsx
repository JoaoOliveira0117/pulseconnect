import { ReactNode } from 'react'

// Components
import Header from '@/components/Header'

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

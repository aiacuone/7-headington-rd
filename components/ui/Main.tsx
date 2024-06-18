'use client'
import { useAuth } from '@/lib/hooks/useAuth'
import { FC } from 'react'
import { Button } from './button'
import { signIn } from 'next-auth/react'

interface MainProps {
  children: React.ReactNode
}

export const Main: FC<MainProps> = ({ children }) => {
  const { hasAccess, isSignedIn } = useAuth()

  const handleSignIn = async () => {
    signIn()
  }

  if (!isSignedIn)
    return (
      <div className="h-full center stack gap-3 p-3 text-center">
        <p>Please Sign In to access the application</p>
        <Button onClick={handleSignIn}>Sign In</Button>
      </div>
    )

  if (isSignedIn && !hasAccess) {
    return (
      <div className="h-full center stack gap-3 p-3 text-center">
        <p>You do not have access to this application. Please request access</p>
        <a href="mailTo:aiacuone@gmail.com?subject=7 Headington Rd Application Access Request&body=I am requesting access to the 7 Headington Rd Application">
          <Button>Request Access</Button>
        </a>
        <p>Once access has been granted, please refresh</p>
      </div>
    )
  }

  return (
    <div
      className="overflow-y-scroll hide-scrollbar flex items:start p-[10px] justify-center flex-1"
      id="main-container">
      {children}
    </div>
  )
}

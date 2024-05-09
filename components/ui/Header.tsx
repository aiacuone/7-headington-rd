import Link from 'next/link'
import { ModeToggle } from '../ModeToggle'
import { Button } from './button'

export const Header = () => {
  return (
    <header className="hstack dark:bg-slate-800 bg-slate-100 p-2">
      <div className="center">
        <p>7 Headington Rd</p>
      </div>
      <div className="flex-1 center gap-3"></div>
      <ModeToggle />
    </header>
  )
}

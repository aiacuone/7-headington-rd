import Link from 'next/link'
import { ModeToggle } from '../ModeToggle'
import { Button } from './button'

export const Header = () => {
  const headerButtons: Array<{ text: string; href: string }> = [
    { text: 'Home', href: '/' },
    { text: 'Bins', href: '/bins' },
    { text: 'Contact', href: '/contact' },
    { text: 'Dishwasher', href: '/dishwasher' },
    { text: 'Heating', href: '/heating' },
    { text: 'Internet', href: '/internet' },
    { text: 'Locks', href: '/locks' },
    { text: 'Mower', href: '/mower' },
    { text: 'Oven', href: '/oven' },
    { text: 'Security', href: '/security' },
    { text: 'Tv', href: '/tv' },
    { text: 'Washing Machine', href: '/washing-machine' },
  ]
  return (
    <header className="hstack dark:bg-slate-800 bg-slate-100 p-2">
      <div className="flex-1 center gap-3">
        {headerButtons.map(({ text, href }, index) => (
          <Link href={href} key={`headerButton ${index}`}>
            <Button>{text}</Button>
          </Link>
        ))}
      </div>
      <ModeToggle />
    </header>
  )
}

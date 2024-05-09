import Link from 'next/link'
import { ModeToggle } from '../ModeToggle'
import { Button } from './button'

export const Header = () => {
  const headerButtons: Array<{ text: string; href: string }> = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
    { text: 'Blog', href: '/blog' },
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

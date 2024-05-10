'use client'
import { FC, useEffect, useState } from 'react'

interface MainProps {
  children: React.ReactNode
}

export const Main: FC<MainProps> = ({ children }) => {
  const [height, setHeight] = useState(0)
  const containerPadding = 10

  useEffect(() => {
    const mainContainer = document.getElementById('main-container')
    mainContainer &&
      setHeight(mainContainer.clientHeight - containerPadding * 2)

    const onResize = () => {
      if (mainContainer) {
        setHeight(mainContainer.clientHeight - containerPadding * 2)
      }
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <main className={`flex-1 p-[${containerPadding}px]`} id="main-container">
      <div
        className="overflow-y-scroll hide-scrollbar justify-center flex items:start sm:items-center"
        style={{ height }}>
        {children}
      </div>
    </main>
  )
}

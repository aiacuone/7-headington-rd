'use client'
import { FC, useEffect, useState } from 'react'

interface MainProps {
  children: React.ReactNode
}

export const Main: FC<MainProps> = ({ children }) => {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const mainContainer = document.getElementById('main-container')
    // 10 is the padding of the main container
    mainContainer && setHeight(mainContainer.clientHeight - 10 * 2)

    const onResize = () => {
      if (mainContainer) {
        // 10 is the padding of the main container
        setHeight(mainContainer.clientHeight - 10 * 2)
      }
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <main className={`flex-1 p-[10px]`} id="main-container">
      <div
        className="overflow-y-scroll hide-scrollbar justify-center flex items:start sm:items-center"
        style={{ height }}>
        {children}
      </div>
    </main>
  )
}

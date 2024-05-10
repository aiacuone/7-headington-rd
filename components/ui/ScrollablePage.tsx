'use client'
import { FC, useEffect, useState } from 'react'

interface ScrollablePageProps {
  children: React.ReactNode
}

export const ScrollablePage: FC<ScrollablePageProps> = ({ children }) => {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const mainContainer = document.getElementById('main-container')
    // 20 is the padding of the main container
    mainContainer && setHeight(mainContainer.clientHeight - 20)

    const onResize = () => {
      if (mainContainer) {
        // 20 is the padding of the main container
        setHeight(mainContainer.clientHeight - 20)
      }
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div
      className="overflow-y-scroll hide-scrollbar justify-center flex items:start sm:items-center"
      style={{ height: height }}>
      {children}
    </div>
  )
}

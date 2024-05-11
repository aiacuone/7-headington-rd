'use client'
import {
  Context,
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface MainContextProps {
  mainContainerHeight: number
}

let MainContext: Context<MainContextProps>
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

  const contextValue: MainContextProps = {
    mainContainerHeight: height,
  }

  MainContext = createContext(contextValue)

  return (
    <MainContext.Provider value={contextValue}>
      <main className={`flex-1 p-[10px]`} id="main-container">
        <div
          className="overflow-y-scroll hide-scrollbar justify-center flex items:start sm:items-center"
          style={{ height }}>
          {children}
        </div>
      </main>
    </MainContext.Provider>
  )
}

export const useMainContext = () => useContext(MainContext)

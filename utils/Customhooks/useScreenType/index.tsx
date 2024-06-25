import { useState, useEffect } from 'react'

const useScreenType = () => {
  const [screenType, setScreenType] = useState('desktop')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setScreenType('mobile')
      } else if (window.innerWidth > 767 && window.innerWidth <= 1224) {
        setScreenType('tab')
      } else {
        setScreenType('desktop')
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { screenType, setScreenType }
}

export default useScreenType

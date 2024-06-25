import { useState, useEffect } from 'react'

const useMenuControl = () => {
  const [showMenu, setShowMenu] = useState(false)

  const setStateFunc = () => {
    setShowMenu(false)
  }

  const disableScrolling = () => {
    const x = window.scrollX
    const y = window.scrollY
    window.onscroll = () => {
      window.scrollTo(x, y)
    }
  }

  const enableScrolling = () => {
    window.onscroll = () => {
      return false
    }
  }

  useEffect(() => {
    if (showMenu) disableScrolling()
    else enableScrolling()
  }, [showMenu])

  return {
    showMenu,
    setShowMenu,
    setStateFunc
  }
}

export default useMenuControl

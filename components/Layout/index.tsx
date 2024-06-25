import React, { ReactNode, useEffect } from 'react'
import NavBar from 'components/NavBar'
import Footer from 'components/Footer'

interface LayoutProps {
  children: ReactNode
  background?: string
}

const Layout: React.FC<LayoutProps> = ({ children, background }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <NavBar background={background} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

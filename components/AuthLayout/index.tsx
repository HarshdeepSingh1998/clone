import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '@/store/userSlice'
import { AuthLayoutInterface } from 'components/AuthLayout/types'
import {
  DashboardContainer,
  NavbarContainer
} from '@/styles/Components/Authlayout'
import Sidebar from 'components/Sidebar'
import AuthNavbar from 'components/AuthNavbar'

const AuthLayout = ({ children, isPopUpVisible }: AuthLayoutInterface) => {
  const userData = useSelector(selectUser)
  const [isModalOpen, setIsModalOpen] = useState({
    pdfviewer: false,
    menuModal: false,
    menuslider: false
  })

  const handleSetOpenPdfViewer = (isOpen: any) => {
    setIsModalOpen(prevState => ({
      ...prevState,
      pdfviewer: isOpen
    }))
  }

  const handleSetMenuModalOpen = (isOpen: any) => {
    setIsModalOpen(prevState => ({
      ...prevState,
      menuModal: isOpen
    }))
  }

  const handleSetMenuSliderOpen = (isOpen: any) => {
    setIsModalOpen(prevState => ({
      ...prevState,
      menuslider: isOpen
    }))
  }

  return (
    <DashboardContainer
      style={
        isPopUpVisible ||
        isModalOpen.pdfviewer ||
        isModalOpen.menuModal ||
        isModalOpen.menuslider
          ? { position: 'fixed' }
          : {}
      }
    >
      <Sidebar
        userRole={userData?.data?.role as string}
        openPdfViewer={isModalOpen.pdfviewer}
        setOpenPdfViewer={handleSetOpenPdfViewer}
      />

      <NavbarContainer>
        <AuthNavbar
          setMenuModalOpen={handleSetMenuModalOpen}
          showMenu={isModalOpen.menuModal}
          openPdfViewer={isModalOpen.pdfviewer}
          setMenuSliderOpen={handleSetMenuSliderOpen}
          setOpenPdfViewer={handleSetOpenPdfViewer}
        />
        {children}
      </NavbarContainer>
    </DashboardContainer>
  )
}

export default AuthLayout

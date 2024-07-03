import { useState } from 'react'
import { Drawer } from '@mui/material'
import useNavbar from '@/utils/Customhooks/useNavbar'
import useScreenType from '@/utils/Customhooks/useScreenType'
import { NavbarInterface } from 'components/AuthNavbar/types'
import LeftContainer from 'components/AuthNavbar/LeftContainer'
import RightContainer from 'components/AuthNavbar/RightContainer'
import MobileNavbar from 'components/AuthNavbar/MobileNavbar'
import Modal from 'components/Modal'
import PdfViewer from 'components/PdfViewer'
import { NavbarContainer, NavbarContent } from '@/styles/Components/AuthNavbar'

const AuthNavbar = ({
  background = '#FCFCFC',
  showMenuSlider,
  setMenuModalOpen,
  openPdfViewer,
  setOpenPdfViewer,
  setMenuSliderOpen,
  userRole
}: NavbarInterface) => {
  const {
    showChangePasswordModal,
    setShowChangePasswordModal,
    showEditProfileModal,
    setShowEditProfileModal,
    selectedImage,
    setSelectedImage,
    handleEditProfileClick,
    handleChangePassword,
    handleEditClick,
    handleChangePasswordClick,
    handleLogoutClick,
    logoutClick
  } = useNavbar(setMenuModalOpen, setMenuSliderOpen)
  const [pdfUrl, setPdfUrl] = useState<string>('')
  const { screenType } = useScreenType()
  const closePdfModal = () => {
    setOpenPdfViewer(false)
  }

  return (
    <NavbarContainer background={background}>
      <NavbarContent>
        <LeftContainer />
        <RightContainer
          showMenuSlider={showMenuSlider}
          setMenuSliderOpen={setMenuSliderOpen}
          userRole={userRole}
          selectedImage={selectedImage}
          handleEditProfileClick={handleEditProfileClick}
          handleChangePasswordClick={handleChangePasswordClick}
          handleLogoutClick={handleLogoutClick}
        />
      </NavbarContent>
      <Drawer
        anchor="right"
        open={showMenuSlider}
        onClose={() => {
          setMenuSliderOpen(false)
        }}
        sx={{ pt: 50, marginTop: '10vw', position: 'unset' }}
        PaperProps={{
          sx: { width: '100%' }
        }}
      >
        <MobileNavbar
          userRole={userRole}
          handleLogoutClick={logoutClick}
          handleEditClick={handleEditClick}
          handleChangePassword={handleChangePassword}
          setMenuSliderOpen={setMenuSliderOpen}
          setPdfUrl={setPdfUrl}
          setOpenPdfViewer={setOpenPdfViewer}
        />
      </Drawer>
      {userRole === 'user' &&
        (screenType === 'mobile' || screenType === 'tab') && (
          <Modal
            isOpen={openPdfViewer}
            hideModal={() => setOpenPdfViewer(false)}
          >
            <PdfViewer url={pdfUrl} closePdfModal={closePdfModal} />
          </Modal>
        )}
    </NavbarContainer>
  )
}

export default AuthNavbar

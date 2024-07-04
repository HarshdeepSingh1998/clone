import Modal from 'react-modal'
import { Drawer } from '@mui/material'
import useNavbar from '@/utils/Customhooks/useNavbar'
import useScreenType from '@/utils/Customhooks/useScreenType'
import { NavbarInterface } from 'components/AuthNavbar/types'
import LeftContainer from 'components/AuthNavbar/LeftContainer'
import RightContainer from 'components/AuthNavbar/RightContainer'
import MobileNavbar from 'components/AuthNavbar/MobileNavbar'
import ModalComponent from 'components/Modal'
import PdfViewer from 'components/PdfViewer'
import { NavbarContainer, NavbarContent } from '@/styles/Components/AuthNavbar'
import { getModalConfigurations } from 'components/AuthNavbar/data'

const AuthNavbar = ({
  background = '#FCFCFC',
  showMenuSlider,
  setMenuModalOpen,
  openPdfViewer,
  setOpenPdfViewer,
  setMenuSliderOpen,
  userRole,
  userData
}: NavbarInterface) => {
  const navbarState = useNavbar(
    setMenuModalOpen,
    setMenuSliderOpen,
    setOpenPdfViewer
  )
  const modalConfigurations = getModalConfigurations({
    ...navbarState,
    setMenuModalOpen,
    userData
  })
  const { screenType } = useScreenType()

  return (
    <NavbarContainer background={background}>
      <NavbarContent>
        <LeftContainer />
        <RightContainer
          showMenuSlider={showMenuSlider}
          setMenuSliderOpen={setMenuSliderOpen}
          userRole={userRole}
          selectedImage={navbarState.selectedImage}
          handleEditProfileClick={navbarState.handleEditProfileClick}
          handleChangePasswordClick={navbarState.handleChangePasswordClick}
          handleLogoutClick={navbarState.handleLogoutClick}
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
          handleLogoutClick={navbarState.logoutClick}
          handleEditClick={navbarState.handleEditClick}
          handleChangePassword={navbarState.handleChangePassword}
          setMenuSliderOpen={setMenuSliderOpen}
          setPdfUrl={navbarState.setPdfUrl}
          setOpenPdfViewer={setOpenPdfViewer}
        />
      </Drawer>
      {userRole === 'user' &&
        (screenType === 'mobile' || screenType === 'tab') && (
          <ModalComponent
            isOpen={openPdfViewer}
            hideModal={() => setOpenPdfViewer(false)}
          >
            <PdfViewer
              url={navbarState.pdfUrl}
              closePdfModal={navbarState.closePdfModal}
            />
          </ModalComponent>
        )}
      {modalConfigurations.map((modalConfig, index) => (
        <Modal
          key={index}
          isOpen={modalConfig.isOpen}
          onRequestClose={modalConfig.onRequestClose}
          ariaHideApp={modalConfig.ariaHideApp}
          style={modalConfig.style}
        >
          {modalConfig.content}
        </Modal>
      ))}
    </NavbarContainer>
  )
}

export default AuthNavbar

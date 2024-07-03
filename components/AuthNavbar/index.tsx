import useScreenType from '@/utils/Customhooks/useScreenType'
import { NavbarInterface } from 'components/AuthNavbar/types'

const AuthNavbar = ({
  background = '#FCFCFC',
  setMenuModalOpen,
  showMenu,
  openPdfViewer,
  setMenuSliderOpen,
  setOpenPdfViewer
}: NavbarInterface) => {
  const { screenType } = useScreenType()
  return <div>hi</div>
}

export default AuthNavbar

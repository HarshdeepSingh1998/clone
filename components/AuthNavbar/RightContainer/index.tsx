import useScreenType from '@/utils/Customhooks/useScreenType'
import { RightContainerInterface } from 'components/AuthNavbar/types'
import CloseNavMenu from '@/assets/images/svg/CloseNavMenu'
import MenuIcon from '@/assets/images/svg/MenuIcon'
import {
  RightContent,
  IconContainer,
  IconContent
} from '@/styles/Components/AuthNavbar/RightContainer'
import Popup from '../Popup'

const RightContainer = ({
  setMenuSliderOpen,
  showMenuSlider,
  userRole,
  selectedImage,
  handleEditProfileClick,
  handleChangePasswordClick,
  handleLogoutClick
}: RightContainerInterface) => {
  const { screenType } = useScreenType()
  return (
    <RightContent>
      {screenType === 'mobile' || screenType === 'tab' ? (
        <IconContainer>
          <IconContent onClick={() => setMenuSliderOpen(!showMenuSlider)}>
            {showMenuSlider ? <CloseNavMenu /> : <MenuIcon />}
          </IconContent>
        </IconContainer>
      ) : (
        <Popup
          userRole={userRole}
          selectedImage={selectedImage}
          handleEditProfileClick={handleEditProfileClick}
          handleChangePasswordClick={handleChangePasswordClick}
          handleLogoutClick={handleLogoutClick}
        />
      )}
    </RightContent>
  )
}

export default RightContainer

import { HeaderInterface } from 'components/EditProfileModal/types'
import DEFAULT_PROFILE_URL from 'assets/images/images/default-profile.png'
import CrossIcon from '@/assets/images/svg/CrossIcon'
import {
  HeaderContainer,
  HeaderContent,
  BoxImage,
  TextContainer
} from '@/styles/Components/EditProfile/Header'

const Header = ({
  showModal,
  setAddImageClicked,
  setRemoveImageClicked,
  setSelectedImage,
  userData,
  setMenuModalOpen
}: HeaderInterface) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <BoxImage />
        <TextContainer>User Profile</TextContainer>
      </HeaderContent>
      <span
        onClick={() => {
          showModal(false)
          setAddImageClicked(false)
          setRemoveImageClicked(false)
        }}
      >
        <CrossIcon
          onClick={() => {
            setSelectedImage(
              userData?.data?.personalData?.profileImage || DEFAULT_PROFILE_URL
            )
            setMenuModalOpen(false)
          }}
        />
      </span>
    </HeaderContainer>
  )
}

export default Header

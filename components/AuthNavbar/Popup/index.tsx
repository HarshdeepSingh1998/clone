import Image from 'next/image'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import { PopupInterface } from 'components/AuthNavbar/types'
import Avatar from '@/assets/images/images/Avatar.png'
import BasicMiningLogo from '@/assets/images/images/basic-mining-logo.png'
import {
  ImageContainer,
  EditProfileContainer,
  LogoutContainer,
  ChangePasswordContainer
} from '@/styles/Components/AuthNavbar/Popup'

const Popup = ({
  selectedImage,
  userRole,
  handleEditProfileClick,
  handleChangePasswordClick,
  handleLogoutClick
}: PopupInterface) => {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {popupState => (
        <>
          <ImageContainer userRole={userRole === 'user'}>
            <Image
              crossOrigin="anonymous"
              src={
                userRole === 'user' ? selectedImage || Avatar : BasicMiningLogo
              }
              alt="Asic mining"
              width={48}
              height={48}
              style={{ borderRadius: '50px' }}
              {...bindTrigger(popupState)}
            />
          </ImageContainer>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            <Typography sx={{ p: 1 }}>
              {userRole !== 'admin' && (
                <>
                  <EditProfileContainer
                    style={{ padding: '5px' }}
                    onClick={() => handleEditProfileClick(popupState)}
                  >
                    Edit Your Profile
                  </EditProfileContainer>
                  <ChangePasswordContainer
                    onClick={() => handleChangePasswordClick(popupState)}
                  >
                    Change Password
                  </ChangePasswordContainer>
                </>
              )}
              <LogoutContainer onClick={() => handleLogoutClick(popupState)}>
                Logout
              </LogoutContainer>
            </Typography>
          </Popover>
        </>
      )}
    </PopupState>
  )
}

export default Popup

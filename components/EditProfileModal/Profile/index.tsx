import Image from 'next/image'
import { handleImageChange } from '@/utils/HelperFunctions/HandleImageChange'
import { ProfileInterface } from 'components/EditProfileModal/types'
import Button from '@/components/Button'
import CircleIcon from '@/assets/images/svg/CircleIcon'
import {
  ProfileContainer,
  ProfileContent,
  ImageContainer,
  ButtonContainer
} from '@/styles/Components/EditProfile/Profile'

const Profile = ({
  profileImageUpdated,
  hiddenFileInputRef,
  setProfileImageUpdated,
  setSelectedImage,
  setAddImageClicked,
  setRemoveImageClicked,
  handleButtonClick,
  handleRemoveImage,
  removeButtonDisabled
}: ProfileInterface) => {
  return (
    <ProfileContainer>
      <ProfileContent>
        <ImageContainer>
          <Image
            crossOrigin="anonymous"
            src={
              !(profileImageUpdated instanceof File)
                ? profileImageUpdated
                : URL.createObjectURL(profileImageUpdated)
            }
            alt="Asic mining"
            width={48}
            height={48}
          />
        </ImageContainer>
        <ButtonContainer>
          <input
            ref={hiddenFileInputRef}
            type="file"
            accept="image/png"
            onChange={e =>
              handleImageChange(
                e,
                setProfileImageUpdated,
                setSelectedImage,
                setAddImageClicked,
                setRemoveImageClicked
              )
            }
          />
          <Button
            type="button"
            variant="contained"
            label={''}
            onClick={handleButtonClick}
          >
            <CircleIcon />
            <p>Upload new picture</p>
          </Button>
        </ButtonContainer>
      </ProfileContent>
      <ButtonContainer style={{ width: '140px' }}>
        <Button
          type="button"
          variant="text"
          label="Remove"
          onClick={handleRemoveImage}
          disable={removeButtonDisabled}
          style={{ justifyContent: 'center', padding: '12px 0' }}
        />
        {/* )} */}
      </ButtonContainer>
    </ProfileContainer>
  )
}

export default Profile

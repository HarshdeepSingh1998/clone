import { useRef } from 'react'
import useSubmitForm from '@/utils/Callback/User/MarketPlacePage/EditProfileModal'
import { useEditProfileModalForm } from '@/utils/Customhooks/useEditProfileModalForm'
import { formData } from '@/utils/User/MarketPlaceContent/EditProfileModal/Form'
import Form from 'components/Form'
import { updatedFormData } from 'components/EditProfileModal/data'
import { ModalInterface } from 'components/EditProfileModal/types'
import Header from 'components/EditProfileModal/Header'
import Profile from 'components/EditProfileModal/Profile'
import DEFAULT_PROFILE_URL from 'assets/images/images/default-profile.png'
import {
  EditProfileContainer,
  EditProfileContent
} from '@/styles/Components/EditProfile'

const EditProfileModal = ({
  showModal,
  selectedImage,
  setSelectedImage,
  userData,
  setMenuModalOpen
}: ModalInterface) => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors }
  } = useEditProfileModalForm(userData)
  const hiddenFileInputRef = useRef<HTMLInputElement | null>(null)
  const {
    onSubmit,
    disable,
    removeButtonDisabled,
    handleButtonClick,
    handleRemoveImage,
    setRemoveImageClicked,
    setAddImageClicked,
    profileImageUpdated,
    setProfileImageUpdated
  } = useSubmitForm(
    selectedImage,
    userData,
    showModal,
    setMenuModalOpen,
    setSelectedImage,
    hiddenFileInputRef
  )
  const updatedFormDataArray = updatedFormData(userData, formData)
  const handleSecondaryButtonClick = () => {
    showModal(false)
    setAddImageClicked(false)
    setRemoveImageClicked(false)
    setMenuModalOpen(false)
    setSelectedImage(
      userData?.data?.personalData?.profileImage || DEFAULT_PROFILE_URL
    )
  }

  return (
    <EditProfileContainer>
      <EditProfileContent>
        <Header
          setRemoveImageClicked={setRemoveImageClicked}
          setAddImageClicked={setAddImageClicked}
          showModal={showModal}
          setSelectedImage={setSelectedImage}
          userData={userData}
          setMenuModalOpen={setMenuModalOpen}
        />
        <Profile
          profileImageUpdated={profileImageUpdated}
          hiddenFileInputRef={hiddenFileInputRef}
          setProfileImageUpdated={setProfileImageUpdated}
          setSelectedImage={setSelectedImage}
          setAddImageClicked={setAddImageClicked}
          setRemoveImageClicked={setRemoveImageClicked}
          handleButtonClick={handleButtonClick}
          handleRemoveImage={handleRemoveImage}
          removeButtonDisabled={removeButtonDisabled}
        />
        <Form
          handleSubmit={handleSubmit}
          formData={updatedFormDataArray}
          control={control}
          errors={errors}
          onSubmit={onSubmit}
          disable={disable}
          isTextboxVisible={false}
          buttonText="Save Changes"
          watch={watch}
          isSignUpVisible={true}
          isSecondaryButtonVisible={true}
          secondaryButtonText="Cancel"
          handleSecondaryButtonClick={handleSecondaryButtonClick}
        />
      </EditProfileContent>
    </EditProfileContainer>
  )
}

export default EditProfileModal

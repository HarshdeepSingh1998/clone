import useSubmitForm from '@/utils/Callback/User/MarketPlacePage/EditProfileModal'
import { useEditProfileModalForm } from '@/utils/Customhooks/useEditProfileModalForm'
import { formData } from '@/utils/User/MarketPlaceContent/EditProfileModal/Form'
import { ModalInterface } from 'components/EditProfileModal/types'
import Header from 'components/EditProfileModal/Header'
import Profile from 'components/EditProfileModal/Profile'
import Form from 'components/Form'
import {
  EditProfileContainer,
  EditProfileContent
} from '@/styles/Components/EditProfile'
import { useRef } from 'react'
import { updatedFormData } from './data'

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
        />
      </EditProfileContent>
    </EditProfileContainer>
  )
}

export default EditProfileModal

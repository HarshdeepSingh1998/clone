import useSubmitForm from '@/utils/Callback/User/MarketPlacePage/ChangePasswordModal'
import { useChangePasswordForm } from '@/utils/Customhooks/useChangePasswordForm'
import { formData } from '@/utils/User/MarketPlaceContent/ChangePasswordModal/Form'
import { ModalInterface } from 'components/ChangePasswordModal/types'
import Form from 'components/Form'
import CrossIcon from '@/assets/images/svg/CrossIcon'
import {
  ChangePasswordContainer,
  ChangePasswordContent,
  HeadingContainer,
  TextContent,
  BoxImage
} from '@/styles/Components/ChangePassword'

const ChangePassword = ({ showModal, setMenuModalOpen }: ModalInterface) => {
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors }
  } = useChangePasswordForm()
  const { onSubmit, disable } = useSubmitForm(
    reset,
    showModal,
    setMenuModalOpen
  )
  return (
    <ChangePasswordContainer>
      <ChangePasswordContent>
        <HeadingContainer>
          <TextContent
            style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
          >
            <BoxImage />
            Change Password
          </TextContent>
          <span
            onClick={() => {
              showModal(false)
              setMenuModalOpen(false)
            }}
          >
            <CrossIcon />
          </span>
        </HeadingContainer>
        <Form
          handleSubmit={handleSubmit}
          formData={formData}
          control={control}
          errors={errors}
          onSubmit={onSubmit}
          disable={disable}
          isTextboxVisible={false}
          buttonText="Update password"
          watch={watch}
          isSignUpVisible={true}
        />
      </ChangePasswordContent>
    </ChangePasswordContainer>
  )
}

export default ChangePassword

import Modal from 'react-modal'
import { useMemberForm } from '@/utils/Customhooks/useMemberForm'
import { formData } from '@/utils/AddMemberPageContent/Form'
import { AddMemberModalProps } from 'components/AddMemberModal/types'
import { Style } from 'components/RevokeModal'
import useSubmit from '@/utils/Callback/Admin/MembersPage/AddMember'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage,
  ButtonContainer,
  FormContainer,
  InputContainer
} from '@/styles/Components/AddMemberModal'
import Input from 'components/Input'
import Button from 'components/Button'

const AddMemberModal: React.FC<AddMemberModalProps> = ({ memberData }) => {
  const {
    handleSubmit,
    control,
    reset,
    setError,
    watch,
    formState: { errors }
  } = useMemberForm()

  const { onSubmit } = useSubmit(memberData, reset, setError)
  return (
    <Modal
      isOpen={memberData.showAddMemberModal}
      onRequestClose={() => memberData.setShowAddMemberModal(false)}
      style={Style}
    >
      <ModalContainer>
        <HeaderContainer>
          <BoxImage />
          {'Add Member'}
        </HeaderContainer>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            {formData.map(data => (
              <>
                <Input
                  title={data.title}
                  control={control}
                  controllername={data.controllername}
                  placeholder={data.placeholder}
                  type={data.type}
                  errors={errors}
                  defaultValue=""
                  maxLength={data.maxLength}
                  maxwidth={data.maxwidth}
                  border={'none'}
                  watch={watch}
                />
              </>
            ))}
            <ButtonContainer disable={false}>
              <Button
                type="submit"
                variant="contained"
                disable={false}
                label={'Add Member'}
              />
              <Button
                type="submit"
                variant="text"
                label={'Cancel'}
                onClick={() => {
                  memberData.closeAddProductModal()
                  reset()
                }}
              />
            </ButtonContainer>
          </InputContainer>
        </FormContainer>
      </ModalContainer>
    </Modal>
  )
}

export default AddMemberModal

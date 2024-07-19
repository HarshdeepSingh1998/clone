import Modal from 'react-modal'
import { CounterBidModalInterface } from 'components/CounterBidModal/types'
import { useCounterBidForm } from '@/utils/Customhooks/useCounterBidForm'
import useCounterBidModal from '@/utils/Customhooks/useCounterBidModal'
import { Style } from 'components/RevokeModal'
import Button from 'components/Button'
import Input from 'components/Input'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage,
  FormContainer,
  InputContainer,
  ButtonContainer
} from '@/styles/Components/CounterBidModal'

const CounterBidModal = ({
  closeModal,
  selectedBid,
  setPage,
  setForceUpdate,
  isOpen,
  setIsCounterBidModalVisible
}: CounterBidModalInterface) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useCounterBidForm()
  const { onSubmit } = useCounterBidModal({
    selectedBid,
    setIsCounterBidModalVisible,
    setPage,
    setForceUpdate
  })

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsCounterBidModalVisible(false)}
      style={Style}
    >
      <ModalContainer>
        <HeaderContainer>
          <BoxImage />
          Counter Offer
        </HeaderContainer>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Input
              title={'Counter Price'}
              control={control}
              controllername={'counterprice'}
              placeholder={'00'}
              type={'text'}
              errors={errors}
              disabled={false}
              defaultValue=""
              border="none"
            />
            <ButtonContainer>
              <Button
                type="submit"
                variant="contained"
                disable={false}
                label={'Counter'}
              />
              <Button
                type="submit"
                variant="text"
                label={'Cancel'}
                onClick={() => {
                  closeModal()
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

export default CounterBidModal

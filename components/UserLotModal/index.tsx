import { useState } from 'react'
import Modal from 'react-modal'
import { useUserLotModalForm } from '@/utils/Customhooks/useUserLotModalForm'
import { UserLotModalProps } from 'components/UserLotModal/types'
import useUserLotModalData from '@/utils/Customhooks/useUserLotModalData'
import useSubmit from '@/utils/Callback/User/InventoryManagementPage/LotModal'
import LotForm from 'components/UserLotModal/LotForm'
import { Style } from 'components/RevokeModal/index'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage
} from '@/styles/Components/UserLotModal'

const UserLotModal: React.FC<UserLotModalProps> = ({ inventoryData }) => {
  const lotModalData = useUserLotModalData(inventoryData)
  const context = {
    productDetails: lotModalData.lotProducts,
    auctionType: 'Bid'
  }
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors }
  } = useUserLotModalForm(context)
  const { onSubmit, unitAskingPrice, setUnitAskingPrice } = useSubmit(
    inventoryData,
    lotModalData,
    reset,
    watch
  )
  const [toggleValue, setToggleValue] = useState('Bid')
  const handleToggleChange = () => {
    if (toggleValue === 'Bid') {
      return
    }

    setValue('auctionStartDate', '')
    setValue('auctionEndDate', '')
    setToggleValue(() => {
      setValue('auctionType', 'Bid')
      return 'Bid'
    })
  }

  return (
    <Modal
      isOpen={inventoryData.isLotModalOpen}
      onRequestClose={() => inventoryData.setIsLotModalOpen(false)}
      style={Style}
    >
      <ModalContainer>
        <HeaderContainer>
          <BoxImage />
          Create Lot
        </HeaderContainer>
        <LotForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          control={control}
          errors={errors}
          watch={watch}
          inventoryData={inventoryData}
          setValue={setValue}
          reset={reset}
          lotModalData={lotModalData}
          unitAskingPrice={unitAskingPrice}
          toggleValue={toggleValue}
          handleToggleChange={handleToggleChange}
          setUnitAskingPrice={setUnitAskingPrice}
        />
      </ModalContainer>
    </Modal>
  )
}

export default UserLotModal

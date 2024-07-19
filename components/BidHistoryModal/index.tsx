import Modal from 'react-modal'
import Image from 'next/image'
import useBidHistoryModal from '@/utils/Customhooks/useBidHistoryModal'
import { getDaysRemaining } from '@/utils/HelperFunctions/GetDaysRemaining'
import { useBidHistoryForm } from '@/utils/Customhooks/useBidHistoryForm'
import { BidHistoryModalInterface } from 'components/BidHistoryModal/types'
import { Style } from 'components/RevokeModal'
import Input from 'components/Input'
import Button from 'components/Button'
import DummyMachine from '@/assets/images/images/machine-bid.png'
import Avatar from '@/assets/images/images/avatar-two.png'
import Avatar2 from '@/assets/images/images/basic-mining-logo.png'
import CrossIcon from '@/assets/images/svg/CrossIcon'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage,
  MachnineHistoryContainer,
  MachineContent,
  ImageContainer,
  TextContainer,
  MachineNameContainer,
  ModalNameContainer,
  MachineInfo,
  DateContainer,
  BidHistoryPriceContainer,
  BiddingHistoryContainer,
  BiddingHistoryContent,
  CustomerContainer,
  BiddingHistoryImageContainer,
  MemberNameContainer,
  HistoryPriceContainer,
  DateTimeContainer,
  AdminBidHistoryContainer,
  FormContainer,
  InputContainer,
  ButtonContainer
} from '@/styles/Components/BidHistoryModal'

const BidHistoryModal = ({
  closeModal,
  selectedBid,
  setPage,
  setForceUpdate,
  isOpen,
  setIsBidHistoryModalVisible,
  userData
}: BidHistoryModalInterface) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useBidHistoryForm()
  const { onSubmit } = useBidHistoryModal({
    selectedBid,
    setIsBidHistoryModalVisible,
    setPage,
    setForceUpdate,
    reset
  })

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsBidHistoryModalVisible(false)}
      style={Style}
    >
      <ModalContainer>
        <div>
          <HeaderContainer>
            <BoxImage />
            Bid History
            <span
              onClick={() => {
                closeModal()
                reset()
              }}
            >
              <CrossIcon />
            </span>
          </HeaderContainer>
          <MachnineHistoryContainer>
            <MachineContent>
              {selectedBid?.product ? (
                <ImageContainer>
                  <Image
                    src={selectedBid?.product?.images[0] || DummyMachine}
                    alt="machine-Id"
                    width={51}
                    height={57}
                  />
                </ImageContainer>
              ) : (
                ''
              )}
              {selectedBid?.product ? (
                <TextContainer>
                  <MachineNameContainer>
                    {selectedBid?.product?.modelName}
                  </MachineNameContainer>
                  <ModalNameContainer>
                    {selectedBid?.product?.lotId ? (
                      <div style={{ display: 'flex', gap: '10px' }}>
                        {`QTY: ${selectedBid?.product?.quantity}`}{' '}
                        <div>{selectedBid?.product?.lotId}</div>
                      </div>
                    ) : (
                      <div>
                        {selectedBid?.product?.serialNumber
                          ? `SN : ${selectedBid?.product?.serialNumber}`
                          : ''}
                      </div>
                    )}
                  </ModalNameContainer>
                  <MachineInfo>
                    {selectedBid?.product?.power
                      ? `${selectedBid?.product?.power}kw`
                      : 'N/A'}
                    |
                    {selectedBid?.product?.hashRate
                      ? `${selectedBid?.product?.hashRate}TH/s`
                      : 'N/A'}
                  </MachineInfo>
                  {selectedBid?.auctionStatus === 'Pending' && (
                    <DateContainer
                      className="date-class"
                      style={{ padding: '5px' }}
                    >
                      {`${selectedBid?.product?.auctionStartDate} to ${selectedBid?.product?.auctionEndDate}`}
                    </DateContainer>
                  )}
                </TextContainer>
              ) : (
                <span style={{ color: ' red', fontWeight: '700' }}>
                  Product might be deleted
                </span>
              )}
            </MachineContent>
            <BidHistoryPriceContainer>
              {selectedBid?.productPrice
                ? `$${selectedBid?.productPrice}`
                : '$0'}
            </BidHistoryPriceContainer>
          </MachnineHistoryContainer>
          <BiddingHistoryContainer>Bidding History</BiddingHistoryContainer>
          <BiddingHistoryContent>
            {selectedBid?.counters?.map((item: any, index: number) => {
              if (index % 2 === 0) {
                return (
                  <CustomerContainer key={item?._id}>
                    <BiddingHistoryImageContainer className="customer">
                      <Image
                        src={selectedBid?.bidder?.profileImage || Avatar}
                        alt="customer"
                        width={50}
                        height={50}
                      />
                    </BiddingHistoryImageContainer>
                    <TextContainer className="customer-profile">
                      <MemberNameContainer>
                        {selectedBid?.bidder?.name ||
                          selectedBid?.bidder?.username ||
                          selectedBid?.bidder?.email}
                      </MemberNameContainer>
                      <HistoryPriceContainer>
                        ${item?.bidPrice}
                      </HistoryPriceContainer>
                      <DateTimeContainer>
                        {getDaysRemaining(item?.timestamp)}
                      </DateTimeContainer>
                    </TextContainer>
                  </CustomerContainer>
                )
              } else {
                return (
                  <div key={item._id}>
                    <AdminBidHistoryContainer>
                      <TextContainer className="customer-profile">
                        <MemberNameContainer style={{ textAlign: 'right' }}>
                          {selectedBid?.publisher?.name ||
                            selectedBid?.publisher?.username ||
                            selectedBid?.publisher?.email}
                        </MemberNameContainer>
                        <HistoryPriceContainer
                          style={{ justifyContent: 'end' }}
                        >
                          ${item?.bidPrice}
                        </HistoryPriceContainer>
                        <DateTimeContainer>
                          {getDaysRemaining(item?.timestamp)}
                        </DateTimeContainer>
                      </TextContainer>
                      <BiddingHistoryImageContainer className="customer">
                        <Image
                          src={selectedBid?.publisher?.profileImage || Avatar2}
                          alt="customer"
                          width={40}
                          height={40}
                        />
                      </BiddingHistoryImageContainer>
                    </AdminBidHistoryContainer>
                  </div>
                )
              }
            })}
          </BiddingHistoryContent>
          {selectedBid?.auctionStatus === 'Pending' &&
            selectedBid?.publisher?._id === userData?.data?.id &&
            !(
              userData?.data?.id === selectedBid?.counters?.at(-1)?.bidUser
            ) && (
              <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                  <Input
                    title={''}
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
                  </ButtonContainer>
                </InputContainer>
              </FormContainer>
            )}
        </div>
      </ModalContainer>
    </Modal>
  )
}

export default BidHistoryModal

import Modal from 'react-modal'
import { Tooltip } from '@mui/material'
import { usePlaceBidModalForm } from '@/utils/Customhooks/usePlaceBidModalForm'
import usePlaceBidData from '@/utils/Customhooks/usePlaceBidData'
import useSubmit from '@/utils/Callback/User/MarketPlacePage/PlaceBidModal'
import { PlaceBidModalProps } from 'components/PlaceBidModal/types'
import { Style } from 'components/RevokeModal'
import Input from 'components/Input'
import Button from 'components/Button'
import ProductList from 'components/PlaceBidModal/ProductList'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage,
  FormContainer,
  InputContainer,
  ButtonContainer,
  DetailContainer,
  HostingDetailContainer,
  HostingDetailBorderBottom,
  ModalNameContainer,
  Container
} from '@/styles/Components/PlaceBidModal'

const PlaceBidModal: React.FC<PlaceBidModalProps> = ({
  isOpen,
  closePlaceBidModal,
  productList,
  selectedProduct,
  productDetailData
}) => {
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors }
  } = usePlaceBidModalForm()
  const publishModalData = usePlaceBidData(productDetailData)
  const { onSubmit } = useSubmit(
    productList,
    selectedProduct,
    closePlaceBidModal,
    reset
  )
  const bidAmount = watch('bidamount')
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => closePlaceBidModal()}
      style={Style}
    >
      <ModalContainer>
        <HeaderContainer>
          <BoxImage />
          {'Place Bid'}
        </HeaderContainer>
        <ProductList publishModalData={publishModalData} />
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <DetailContainer>
              <Input
                title={'Bid Amount'}
                control={control}
                controllername={'bidamount'}
                placeholder={'00'}
                type={'number'}
                errors={errors}
                disabled={false}
                defaultValue=""
                border="none"
              />
              <HostingDetailContainer>
                <div style={{ color: '#FB674B' }}>Hosting Fees</div>
                <HostingDetailBorderBottom />
                {publishModalData.productDetails?.[0]?.contract && (
                  <ModalNameContainer>
                    {publishModalData.productDetails?.[0]?.contract &&
                    publishModalData.productDetails?.[0]?.contract?.depositPrice?.toString()
                      ?.length < 5 ? (
                      <Container>
                        Total Security Deposit:
                        <span>
                          $
                          {publishModalData.productDetails?.[0]?.contract
                            ?.depositPrice *
                            publishModalData.productDetails?.length}
                        </span>
                      </Container>
                    ) : (
                      <Tooltip
                        title={
                          publishModalData.productDetails?.[0]?.contract
                            ?.depositPrice *
                          publishModalData.productDetails?.length
                        }
                        placement="top-end"
                      >
                        <Container>
                          Total Security Deposit:
                          <span>
                            $
                            {publishModalData.productDetails?.[0]?.contract
                              ?.depositPrice *
                              publishModalData.productDetails?.length}
                          </span>
                        </Container>
                      </Tooltip>
                    )}
                  </ModalNameContainer>
                )}
                {publishModalData.productDetails?.[0]?.contract && (
                  <ModalNameContainer>
                    {publishModalData.productDetails?.[0]?.contract &&
                    publishModalData.productDetails?.[0]?.contract?.setupPrice?.toString()
                      ?.length < 5 ? (
                      <Container>
                        Total Setup Fee:
                        <span>
                          $
                          {publishModalData.productDetails?.[0]?.contract
                            ?.setupPrice *
                            publishModalData.productDetails?.length}
                        </span>
                      </Container>
                    ) : (
                      <Tooltip
                        title={
                          publishModalData.productDetails?.[0]?.contract
                            ?.setupPrice *
                          publishModalData.productDetails?.length
                        }
                        placement="top-end"
                      >
                        <Container>
                          Total Setup Fee:
                          <span>
                            $
                            {publishModalData.productDetails?.[0]?.contract
                              ?.setupPrice *
                              publishModalData.productDetails?.length}
                          </span>
                        </Container>
                      </Tooltip>
                    )}
                  </ModalNameContainer>
                )}
              </HostingDetailContainer>
            </DetailContainer>
            <ButtonContainer disable={false}>
              <Button
                type="submit"
                variant="contained"
                disable={false}
                label={'Place Bid'}
              />
              <Button
                type="submit"
                variant="text"
                label={'Cancel'}
                onClick={() => {
                  closePlaceBidModal()
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

export default PlaceBidModal

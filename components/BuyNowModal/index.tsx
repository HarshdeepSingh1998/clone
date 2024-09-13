import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import { Tooltip } from '@mui/material'
import { useBuyNowData } from '@/utils/Customhooks/useBuyNowData'
import { Style } from 'components/RevokeModal'
import Button from 'components/Button'
import ProductList from 'components/BuyNowModal/ProductList'
import { BuyNowModalProps } from 'components/BuyNowModal/types'
import Loader from 'components/Loader'
import {
  BoxImage,
  HeaderContainer,
  ModalContainer,
  FormContainer,
  InputContainer,
  AmountDueContainer,
  Container,
  HostingDetailBorderBottom,
  HostingDetailContainer,
  ModalNameContainer,
  NoteContainer,
  ButtonContainer
} from '@/styles/Components/BuyNowModal'

const BuyNowModal: React.FC<BuyNowModalProps> = ({
  isOpen,
  closeBuyNowModal,
  productList,
  selectedProduct,
  toggleActive,
  productDetailData,
  setPage,
  setForceUpdate,
  setProductList
}) => {
  toggleActive
  const { handleSubmit, reset } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange'
  })
  const buyNowData = useBuyNowData({
    productList,
    setProductList,
    productDetailData,
    selectedProduct,
    reset,
    setPage,
    setForceUpdate,
    closeBuyNowModal
  })
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => closeBuyNowModal()}
      style={Style}
    >
      <ModalContainer>
        {buyNowData.isLoading && (
          <Loader blurredBackgroundtrue={buyNowData.isLoading} />
        )}
        <HeaderContainer>
          <BoxImage />
          {'Buy Now'}
        </HeaderContainer>
        <ProductList buyNowData={buyNowData} />
        <FormContainer onSubmit={handleSubmit(buyNowData.onSubmit)}>
          <InputContainer>
            {buyNowData.productDetails?.[0]?.contract && (
              <HostingDetailContainer>
                <div style={{ color: '#FB674B' }}>Hosting Fees</div>
                <HostingDetailBorderBottom />
                {buyNowData.productDetails?.[0]?.contract && (
                  <ModalNameContainer>
                    {buyNowData.productDetails?.[0]?.contract &&
                    buyNowData.productDetails?.[0]?.contract?.depositPrice?.toString()
                      ?.length < 5 ? (
                      <Container>
                        Total Security Deposit:
                        <span>
                          $
                          {buyNowData.productDetails?.[0]?.contract
                            ?.depositPrice * buyNowData.productDetails?.length}
                        </span>
                      </Container>
                    ) : (
                      <Tooltip
                        title={
                          buyNowData.productDetails?.[0]?.contract
                            ?.depositPrice * buyNowData.productDetails?.length
                        }
                        placement="top-end"
                      >
                        <Container>
                          Total Security Deposit:
                          <span>
                            $
                            {buyNowData.productDetails?.[0]?.contract
                              ?.depositPrice *
                              buyNowData.productDetails?.length}
                          </span>
                        </Container>
                      </Tooltip>
                    )}
                  </ModalNameContainer>
                )}
                {buyNowData.productDetails?.[0]?.contract && (
                  <ModalNameContainer>
                    {buyNowData.productDetails?.[0]?.contract &&
                    buyNowData.productDetails?.[0]?.contract?.setupPrice?.toString()
                      ?.length < 5 ? (
                      <Container>
                        Total Setup Fee:
                        <span>
                          $
                          {buyNowData.productDetails?.[0]?.contract
                            ?.setupPrice * buyNowData.productDetails?.length}
                        </span>
                      </Container>
                    ) : (
                      <Tooltip
                        title={
                          buyNowData.productDetails?.[0]?.contract?.setupPrice *
                          buyNowData.productDetails?.length
                        }
                        placement="top-end"
                      >
                        <Container>
                          Total Setup Fee:
                          <span>
                            $
                            {buyNowData.productDetails?.[0]?.contract
                              ?.setupPrice * buyNowData.productDetails?.length}
                          </span>
                        </Container>
                      </Tooltip>
                    )}
                  </ModalNameContainer>
                )}
                <AmountDueContainer>
                  Total Amount Due:&nbsp;
                  <span>
                    $
                    {buyNowData.productDetails?.[0]?.contract
                      ? buyNowData.productDetails?.[0]?.askPrice +
                        buyNowData.productDetails?.[0]?.contract?.depositPrice *
                          buyNowData.productDetails?.length +
                        buyNowData.productDetails?.[0]?.contract?.setupPrice *
                          buyNowData.productDetails?.length
                      : buyNowData.productDetails?.[0]?.askPrice +
                        Number(buyNowData.productDetails?.[0]?.shippingPrice)}
                  </span>
                </AmountDueContainer>
              </HostingDetailContainer>
            )}
            {!buyNowData.productDetails?.[0]?.contract && (
              <HostingDetailContainer>
                <AmountDueContainer className="without-hosting">
                  Total Amount Due:&nbsp;
                  <span>
                    $
                    {buyNowData.productDetails?.[0]?.contract
                      ? buyNowData.productDetails?.[0]?.askPrice +
                        buyNowData.productDetails?.[0]?.contract?.depositPrice *
                          buyNowData.productDetails?.length +
                        buyNowData.productDetails?.[0]?.contract?.setupPrice *
                          buyNowData.productDetails?.length
                      : Number(buyNowData.productDetails?.[0]?.askPrice) +
                        Number(buyNowData.productDetails?.[0]?.shippingPrice)}
                  </span>
                </AmountDueContainer>
              </HostingDetailContainer>
            )}
          </InputContainer>
          <NoteContainer>
            Note: Purchase shall be completed once payment funds have settled.
            ACH transactions may take up to 3-5 business days. Bitcoin
            transactions settle after 1 block confirmation.
          </NoteContainer>
          <ButtonContainer disable={false}>
            <Button
              type="submit"
              variant="contained"
              disable={false}
              label={'Buy Now'}
            />
            <Button
              type="submit"
              variant="text"
              label={'Cancel'}
              onClick={() => {
                closeBuyNowModal()
                reset()
              }}
            />
          </ButtonContainer>
        </FormContainer>
      </ModalContainer>
    </Modal>
  )
}

export default BuyNowModal

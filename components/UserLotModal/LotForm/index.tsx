import Image from 'next/image'
import { Tooltip } from '@mui/material'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import { SalesListInterface } from '@/utils/ApiTypes/getSales'
import { LotFormProps } from 'components/UserLotModal/types'
import CurrencyDropdown from '@/components/CurrencyDropdown'
import Switch from '@/components/Switch'
import DatePicker from '@/components/DatePicker'
import Button from '@/components/Button'
import Bid from 'assets/images/images/bid.png'
import {
  ProductListContainer,
  ProductListContent,
  AskingPriceContainer,
  LotContainer,
  LotContent,
  ImageContainer,
  ModalNameContainer,
  SerialNumberContainer,
  BorderBottom,
  FormContainer,
  InputContainer,
  FieldRow,
  NoteContainer,
  ButtonContainer,
  TotalPriceContainer
} from '@/styles/Components/UserLotModal/LotForm'

function isProductList(
  item: ProductList | SalesListInterface
): item is ProductList {
  return (item as SalesListInterface).assignedProduct === undefined
}

const LotForm: React.FC<LotFormProps> = ({
  handleSubmit,
  onSubmit,
  control,
  errors,
  inventoryData,
  reset,
  lotModalData,
  unitAskingPrice,
  toggleValue,
  handleToggleChange,
  setUnitAskingPrice,
  setToggleValue
}) => {
  return (
    <>
      <ProductListContainer>
        <ProductListContent>
          Products
          <AskingPriceContainer>
            <span>QTY:&nbsp; </span>
            {inventoryData.selectedProductIds?.length}
          </AskingPriceContainer>
        </ProductListContent>
        <ProductListContent className="product-list-content">
          {lotModalData.lotProducts
            ?.filter((product): product is ProductList =>
              isProductList(product)
            )
            ?.map((product, i: number) => (
              <LotContainer key={i}>
                <LotContent>
                  <ImageContainer>
                    {product?.images?.length > 0 ? (
                      <Image
                        src={`${product?.images[0]}`}
                        alt="minus"
                        width={100}
                        height={100}
                      />
                    ) : (
                      <Image src={Bid} alt="minus" width={100} height={100} />
                    )}
                  </ImageContainer>
                  <ModalNameContainer>
                    <Tooltip title={product?.modelName} placement="top-end">
                      <ModalNameContainer className="mobile-machine-modal">
                        {product?.modelName && product?.modelName?.length > 10
                          ? `${product?.modelName?.substring(0, 10)}...`
                          : `${product?.modelName}` || 'N/A'}
                      </ModalNameContainer>
                    </Tooltip>

                    <span className="mobile-hashrate">
                      {product?.power} kW | {product?.hashRate} TH/s
                    </span>
                  </ModalNameContainer>
                </LotContent>
                <ModalNameContainer>
                  <Tooltip title={product?.serialNumber} placement="top-end">
                    <SerialNumberContainer>
                      {product?.serialNumber &&
                      product?.serialNumber?.length > 10
                        ? `SN: ${product?.serialNumber?.substring(0, 10)}...`
                        : `SN: ${product?.serialNumber}` || 'N/A'}
                    </SerialNumberContainer>
                  </Tooltip>
                </ModalNameContainer>
              </LotContainer>
            ))}
        </ProductListContent>
        <BorderBottom />
      </ProductListContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <>
            <FieldRow>
              <CurrencyDropdown
                control={control}
                errors={errors}
                controllername={'askPrice'}
                title={'Asking Price'}
              />
              {lotModalData.lotProducts?.filter(
                (product): product is ProductList => isProductList(product)
              )?.[0]?.hosting ? (
                <Switch
                  userLotModalData={{
                    toggleValue: toggleValue,
                    handleToggleChange: handleToggleChange
                  }}
                  startvalue="Sell"
                  endvalue="Auction"
                />
              ) : (
                <CurrencyDropdown
                  control={control}
                  errors={errors}
                  controllername={'shippingPrice'}
                  title={'Shipping Price'}
                />
              )}
            </FieldRow>
            {!lotModalData.lotProducts?.filter(
              (product): product is ProductList => isProductList(product)
            )?.[0]?.hosting && (
              <Switch
                userLotModalData={{
                  toggleValue: toggleValue,
                  handleToggleChange: handleToggleChange
                }}
                startvalue="Sell"
                endvalue="Auction"
              />
            )}
            <TotalPriceContainer>
              Total Asking Price: <span>${unitAskingPrice} </span>
            </TotalPriceContainer>
            {toggleValue === 'Bid' && (
              <FieldRow>
                <DatePicker
                  publishModalData={{} as any}
                  controllername={'auctionStartDate'}
                  control={control}
                  errors={errors}
                  title={'Auction Start Date'}
                />
                <DatePicker
                  publishModalData={{} as any}
                  controllername={'auctionEndDate'}
                  control={control}
                  errors={errors}
                  title={'Auction End Date'}
                />
              </FieldRow>
            )}
            <NoteContainer>
              Please note there is a 5% platform commission fee paid by the
              seller upon any successful transaction.
            </NoteContainer>
            <ButtonContainer disable={false}>
              <Button
                type="submit"
                variant="contained"
                disable={false}
                label={'Publish'}
              />
              <Button
                type="submit"
                variant="text"
                label={'Cancel'}
                onClick={() => {
                  inventoryData.setIsLotModalOpen(false),
                    reset(),
                    setUnitAskingPrice(0),
                    setToggleValue('Bid')
                }}
              />
            </ButtonContainer>
          </>
        </InputContainer>
      </FormContainer>
    </>
  )
}

export default LotForm

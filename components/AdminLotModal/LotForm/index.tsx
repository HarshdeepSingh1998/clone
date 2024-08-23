import Image from 'next/image'
import { Tooltip } from '@mui/material'
import { LotFormProps } from 'components/AdminLotModal/types'
import PublishForm from 'components/AdminLotModal/PublishForm'
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
  BorderBottom
} from '@/styles/Components/AdminLotModal/LotForm'

const LotForm: React.FC<LotFormProps> = ({
  handleSubmit,
  onSubmit,
  control,
  errors,
  watch,
  inventoryData,
  reset,
  lotModalData,
  unitAskingPrice,
  setValue
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
          {lotModalData.lotProducts?.map((product, i: number) => (
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
                    {product?.serialNumber && product?.serialNumber?.length > 10
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
      <PublishForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        control={control}
        errors={errors}
        watch={watch}
        setIsPublishModalVisible={inventoryData.toggleModal}
        setValue={setValue}
        publishModalData={lotModalData}
        reset={reset}
        inventoryPage={true}
        unitAskingPrice={unitAskingPrice}
      />
    </>
  )
}

export default LotForm

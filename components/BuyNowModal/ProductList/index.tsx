import Image from 'next/image'
import { Tooltip } from '@mui/material'
import { ProductListProps } from 'components/BuyNowModal/types'
import Loader from '@/components/Loader'
import Bid from 'assets/images/images/bid.png'
import {
  ProductListContainer,
  ProductListContent,
  AskingPriceContainer,
  LotContent,
  LotContainer,
  ImageContainer,
  ModalNameContainer,
  SerialNumberContainer,
  BorderBottom,
  QuantityContainer
} from '@/styles/Components/BuyNowModal/ProductList'

const ProductList: React.FC<ProductListProps> = ({ buyNowData }) => {
  const productListLength = buyNowData.productDetails?.length ?? 0

  return (
    <ProductListContainer>
      <ProductListContent>
        Products
        <AskingPriceContainer>
          <span>Asking Price:&nbsp; </span> $
          {buyNowData.productDetails?.[0]?.askPrice}
        </AskingPriceContainer>
      </ProductListContent>
      {!buyNowData.productDetails?.length && (
        <Loader blurredBackgroundtrue={!buyNowData.productDetails?.length} />
      )}
      <ProductListContent className="product-list-content">
        {buyNowData.productDetails?.map((product, i: number) => (
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
                <Tooltip title={product?.serialNumber} placement="top-end">
                  <SerialNumberContainer>
                    {product?.serialNumber && product?.serialNumber?.length > 10
                      ? `SN: ${product?.serialNumber?.substring(0, 10)}...`
                      : `SN: ${product?.serialNumber}` || 'N/A'}
                  </SerialNumberContainer>
                </Tooltip>
                <span className="mobile-hashrate">
                  {product?.power} kW | {product?.hashRate} TH/s
                </span>
              </ModalNameContainer>
            </LotContent>
            <ModalNameContainer>
              {product?.askPrice && product?.askPrice.toString().length < 5 ? (
                <div>
                  <span>Unit Price:&nbsp; </span>$
                  {product?.askPrice / productListLength}
                </div>
              ) : (
                <Tooltip title={product?.askPrice}>
                  <div>
                    <span>Unit Price:&nbsp; </span>$
                    {product?.askPrice / productListLength}
                  </div>
                </Tooltip>
              )}
            </ModalNameContainer>
          </LotContainer>
        ))}
      </ProductListContent>
      <BorderBottom />
      {buyNowData.productDetails?.[0]?.contract && (
        <div style={{ color: '#fff' }}>
          Quantity: &nbsp;<span>{productListLength}</span>
        </div>
      )}
      {!buyNowData.productDetails?.[0]?.contract && (
        <QuantityContainer>
          <div>
            Quantity: &nbsp;<span>{productListLength}</span>
          </div>
          <div>
            Total Shipping Fees: &nbsp;
            <span>${buyNowData.productDetails?.[0]?.shippingPrice}</span>
          </div>
        </QuantityContainer>
      )}
    </ProductListContainer>
  )
}

export default ProductList

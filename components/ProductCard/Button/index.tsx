import { ButtonProps } from 'components/ProductCard/types'
import Button from '@/components/Button'
import { ButtonContainer } from '@/styles/Components/ProductCard/Button'
import { isTodayBetween } from '@/utils/HelperFunctions/GetToday'

const ProductCardButton: React.FC<ButtonProps> = ({
  data,
  placeBidClick,
  buyNowClick,
  clickGetQuote
}) => {
  return (
    <ButtonContainer>
      {data.hosting ? (
        <>
          {data.auctionType === 'Buy' ? (
            <Button
              label={'Buy now'}
              type="button"
              onClick={() => buyNowClick?.(data._id)}
              style={{
                height: '40px',
                lineHeight: '10px',
                fontWeight: '700'
              }}
            />
          ) : (
            <ButtonContainer className="button-container">
              <Button
                label={'Place Bid'}
                variant="outline"
                type="button"
                onClick={() => placeBidClick?.(data._id)}
                style={{
                  height: '40px',
                  lineHeight: '10px',
                  color: '#FB674B'
                }}
                disable={
                  !isTodayBetween(
                    data?.auctionStartDate,
                    data?.auctionEndDate
                  ) || data?.isBidder
                }
              />
              <Button
                label={'Buy now'}
                type="button"
                onClick={() => buyNowClick?.(data._id)}
                style={{
                  height: '40px',
                  lineHeight: '10px',
                  fontSize: '12px'
                }}
                disable={
                  !isTodayBetween(
                    data?.auctionStartDate,
                    data?.auctionEndDate
                  ) || data?.disableBuyNow
                }
              />
            </ButtonContainer>
          )}
        </>
      ) : (
        <>
          {data.askPrice ? (
            <>
              {data.auctionType === 'Buy' ? (
                <Button
                  label={'Buy now '}
                  type="button"
                  onClick={() => buyNowClick?.(data._id)}
                  style={{
                    height: '40px',
                    lineHeight: '10px',
                    fontWeight: '700'
                  }}
                />
              ) : (
                <ButtonContainer className="button-container">
                  <Button
                    label={'Place Bid'}
                    variant="outline"
                    type="button"
                    onClick={() => placeBidClick?.(data._id)}
                    style={{
                      height: '40px',
                      lineHeight: '10px',
                      color: '#FB674B'
                    }}
                    disable={
                      !isTodayBetween(
                        data?.auctionStartDate,
                        data?.auctionEndDate
                      ) || data?.isBidder
                    }
                  />
                  <Button
                    label={'Buy now'}
                    type="button"
                    onClick={() => buyNowClick?.(data._id)}
                    style={{
                      height: '40px',
                      lineHeight: '10px',
                      fontSize: '12px'
                    }}
                    disable={
                      !isTodayBetween(
                        data?.auctionStartDate,
                        data?.auctionEndDate
                      ) || data?.disableBuyNow
                    }
                  />
                </ButtonContainer>
              )}
            </>
          ) : (
            <Button
              label={'Request Quote'}
              type="button"
              onClick={() => clickGetQuote?.(data?._id)}
              style={{
                height: '40px',
                lineHeight: '10px',
                fontSize: '12px',
                fontWeight: '700'
              }}
            />
          )}
        </>
      )}
    </ButtonContainer>
  )
}

export default ProductCardButton

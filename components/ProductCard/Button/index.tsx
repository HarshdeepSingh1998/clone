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
            />
          ) : (
            <ButtonContainer className="button-container" data={data}>
              <Button
                label={'Place Bid'}
                variant="outline"
                type="button"
                onClick={() => placeBidClick?.(data._id)}
                disable={
                  !isTodayBetween(
                    data?.auctionStartDate,
                    data?.auctionEndDate
                  ) || data?.isBidder
                }
                className="place-bid-button"
              />
              <Button
                label={'Buy now'}
                type="button"
                onClick={() => buyNowClick?.(data._id)}
                disable={
                  !isTodayBetween(
                    data?.auctionStartDate,
                    data?.auctionEndDate
                  ) || data?.disableBuyNow
                }
                className="buy-now-button"
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
                />
              ) : (
                <ButtonContainer className="button-container" data={data}>
                  <Button
                    label={'Place Bid'}
                    variant="outline"
                    type="button"
                    onClick={() => placeBidClick?.(data._id)}
                    disable={
                      !isTodayBetween(
                        data?.auctionStartDate,
                        data?.auctionEndDate
                      ) || data?.isBidder
                    }
                    className="place-bid-button"
                  />
                  <Button
                    label={'Buy now'}
                    type="button"
                    onClick={() => buyNowClick?.(data._id)}
                    disable={
                      !isTodayBetween(
                        data?.auctionStartDate,
                        data?.auctionEndDate
                      ) || data?.disableBuyNow
                    }
                    className="buy-now-button"
                  />
                </ButtonContainer>
              )}
            </>
          ) : (
            <Button
              label={'Request Quote'}
              type="button"
              onClick={() => clickGetQuote?.(data?._id)}
            />
          )}
        </>
      )}
    </ButtonContainer>
  )
}

export default ProductCardButton

import { Tooltip } from '@mui/material'
import { FooterProps } from 'components/ProductCard/types'
import {
  FooterContainer,
  FooterContent,
  AskPriceContainer,
  HighestBidContainer
} from '@/styles/Components/ProductCard/Footer'

const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <FooterContainer>
      {data?.askPrice && (
        <div>
          <FooterContent className="footer">
            <AskPriceContainer className="bit">{`Asking Price :$${data?.askPrice}`}</AskPriceContainer>
            {data?.auctionType === 'Bid' &&
            data?.highestBid &&
            data?.highestBid > 0 ? (
              <HighestBidContainer className="highest-bid">
                Highest Bid &nbsp;&nbsp;:{' '}
                {data?.highestBid && String(data?.highestBid)?.length < 8 ? (
                  <div style={{ color: '#0DC11F' }}> ${data?.highestBid}</div>
                ) : (
                  <Tooltip title={data?.highestBid}>
                    <div style={{ color: '#0DC11F' }}>
                      {`$${String(data?.highestBid).substring(0, 8)}...`}
                    </div>
                  </Tooltip>
                )}
              </HighestBidContainer>
            ) : (
              ''
            )}
          </FooterContent>
        </div>
      )}
      {!data?.askPrice && (
        <div>
          <FooterContent className="footer">
            <AskPriceContainer className="bit">N/A</AskPriceContainer>
          </FooterContent>
        </div>
      )}
      <div>
        {(
          data?.lotId ? data?.lotCreatedBy === data?.user?._id : data?.lotId
        ) ? (
          <FooterContent className="footer">
            <AskPriceContainer className="quantity quantity-size">
              QTY: {data?.quantity}
            </AskPriceContainer>
          </FooterContent>
        ) : (
          <FooterContent className="footer">
            <AskPriceContainer className="quantity quantity-size">
              QTY: 1
            </AskPriceContainer>
          </FooterContent>
        )}
      </div>
    </FooterContainer>
  )
}

export default Footer

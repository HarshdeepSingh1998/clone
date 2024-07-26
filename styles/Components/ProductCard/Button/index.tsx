import { ProductList } from '@/utils/ApiTypes/ProductList'
import { isTodayBetween } from '@/utils/HelperFunctions/GetToday'
import styled from 'styled-components'

export const ButtonContainer = styled.div<{ data?: ProductList }>`
  padding: 5px 0px;
  margin-top: 14px;
  display: flex;
  gap: 10px;

  button {
    font-size: 12px;
    font-weight: 700;
    padding: 0;
    height: 40px;
  }
  &.button-container {
    width: 100%;
    margin-top: 0;
    padding: 0;
    button: first-child {
      color: rgb(251, 103, 75);
    }

    ${({ data }) => {
      const isWithinDateRange = data
        ? isTodayBetween(data.auctionStartDate, data.auctionEndDate)
        : false
      const isBidder = data?.isBidder
      const disableBuyNow = data?.disableBuyNow

      return `
      .place-bid-button {
        opacity: ${isWithinDateRange && isBidder ? '0.5' : '1'};
        cursor: ${isWithinDateRange && isBidder ? 'not-allowed' : ''};
      }

      .buy-now-button {
        opacity: ${isWithinDateRange && disableBuyNow ? '0.5' : '1'};
        cursor: ${isWithinDateRange && disableBuyNow ? 'not-allowed' : ''};

      }
    `
    }}
  }
`

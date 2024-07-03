import styled from 'styled-components'

export const LeftContent = styled.div`
  display: flex;
  width: 50%;
  gap: 20px;

  &.auction-search-wrapper {
    @media screen and (max-width: 1366px) {
      width: unset !important;
    }
  }
`

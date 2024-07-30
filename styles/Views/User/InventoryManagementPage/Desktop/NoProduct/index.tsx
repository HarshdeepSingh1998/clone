import styled from 'styled-components'

export const NoProductViewContainer = styled.div`
  min-height: 58%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  color: #64718c;

  &.admin-marketplace {
    min-height: 75%;
  }
  &.admin-auction {
    margin-top: 42px;
  }
  &.admin-inventory {
    min-height: unset;
  }
`
export const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const LoadMore = styled.div`
  display: flex;
  width: 15%;
  border: 1px solid #393b4b;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  //styleName: Button 2;
  font-family: Inter;
  font-size: 13px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #fff;
  height: 45px;
  gap: 10px;
  width: 26%;
  margintop: 10px;
  height: 30px;

  @media (max-width: 767px) {
    &.mobile-loadmore {
      width: 30%;
      height: 35px;
    }
  }
  /* &.mobile-loadmore {
    width: 30%;
    height: 35px;
  } */
`

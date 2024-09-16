import styled from 'styled-components'

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  /* transform: translateX(52px); */
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 8px;
  cursor: pointer;

  @media (max-width: 767px) {
    transform: unset;
    width: unset;
    &.mobile-responsive {
      justify-content: unset;
      align-items: unset;
      width: unset;
    }
    &.detail-mobile {
      justify-content: end;
    }
  }
`
export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: rgba(251, 103, 75, 0.19);
  border-radius: 10px;

  &.sales-image {
    width: 65px;
    height: 67px;
    img {
      max-width: 43px;
      max-height: 43px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      width: 70px;
      height: 70px;
      img {
        max-width: 46px;
        max-height: 46px;
      }
    }
  }
  img {
    max-width: 51px;
    max-height: 57px;
  }

  &.customer {
    background: transparent;
    border-radius: 50%;
    width: max-content;
    height: max-content;

    img {
      width: 3.542vw;
      height: 3.542vw;
      max-width: 44px;
      max-height: 44px;
      @media (max-width: 767px) {
        width: 31px;
        height: 31px;
      }
      @media only screen and (min-width: 768px) and (max-width: 1224px) {
        width: 43px;
        height: 43px;
      }
      @media (max-width: 1366px) {
        max-width: 35px;
        max-height: 35px;
      }
    }
  }
  &.customer-mobile {
    background: transparent;
    border-radius: 50%;
    width: max-content;
    height: max-content;
    img {
      @media (max-width: 767px) {
        width: 40px;
        height: 40px;
      }
    }
  }
  &.member {
    background: transparent;
    border-radius: 50%;
    width: max-content;
    height: max-content;
    img {
      width: 3.542vw;
      height: 3.542vw;
      max-width: 56px;
      max-height: 56px;
    }
  }
`
export const TextContainer = styled.div`
  display: grid;
  grid-gap: 6px;

  @media (max-width: 767px) {
    grid-gap: 2px;
  }
`
export const CustomerNameContainer = styled.h4`
  font-family: Inter;
  font-size: clamp(8px, 1.06vw, 16px);
  font-weight: 700;
  text-align: left;
  color: #ffffff;
  word-break: break-all;

  &.member-details {
    font-size: 28px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
    &.member-text {
      font-size: 14px;
    }
    &.member-details {
      font-size: 16px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 14px;
  }
`
export const NumberContainer = styled.p`
  font-family: Inter;
  font-size: clamp(7px, 0.9vw, 13px);
  font-weight: 600;
  letter-spacing: -0.01em;
  text-align: left;
  color: #9a9fa5;
  word-break: break-all;
  @media (max-width: 1366px) {
    font-size: 10px;
    white-space: nowrap;
  }
  @media (max-width: 1366px) {
    &.member-text {
      font-size: 12px;
    }
  }
  &.member-details {
    font-size: 14px;
  }
  @media (max-width: 767px) {
    &.member-details {
      font-size: 12px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 12px;
  }
`

export const EmailContainer = styled.p`
  font-family: Inter;
  font-size: clamp(7px, 0.9vw, 13px);
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #64718c;
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 13px;
  }
`
export const ProductContainer = styled.h4`
  font-family: Inter;
  font-size: clamp(8px, 1.06vw, 15px);
  font-weight: 700;
  /* text-align: center; */
  color: #ffffff;
  word-break: break-all;
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 14px;
  }
`

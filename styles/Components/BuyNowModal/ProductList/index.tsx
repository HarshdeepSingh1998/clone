import styled from 'styled-components'

export const ProductListContainer = styled.div`
  max-height: 250px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const ProductListContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  color: #90a3bf;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  // padding: 5px 0;
  text-transform: capitalize;
`
export const AskingPriceContainer = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #fb674b;
  span {
    font-size: 14px;
    color: #90a3bf;
    font-weight: 500;
    padding-right: 0;
  }
  @media (max-width: 767px) {
    font-size: 15px;
  }
`
export const LotContent = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
export const LotContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const ImageContainer = styled.div`
  position: relative;
  height: 55px;
  width: 55px;
  border-radius: 10px;
  background: #fb674b30;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    width: 45px;
    height: 45px;
  }

  @media (max-width: 767px) {
    height: 60px;
    width: 60px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    height: 60px;
    width: 60px;
  }
`
export const ModalNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-family: Inter;
  font-size: clamp(8px, 1.06vw, 15px);
  font-weight: 700;
  line-height: 19px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #fff;
  word-wrap: break-word;
  overflow-wrap: break-word;
  &.mobile-machine-modal {
    font-size: 16px;
    color: #fff !important;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 16px;
  }

  div {
    overflow: hidden;
    color: #fb674b;
    fontsize: 12px;
    text-overflow: ellipsis;
    font-family: Inter;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.01em;
    text-align: left;
  }

  span {
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.01em;
    text-align: left;
    color: #fff;
    font-size: 10px;
    &.mobile-hashrate {
      color: rgb(66, 73, 98);
    }
    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      font-size: 14px;
    }
  }
`
export const SerialNumberContainer = styled.div`
  font-family: Inter;
  font-size: clamp(8px, 1.06vw, 15px);
  font-weight: 700;
  line-height: 19.36px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #fff !important;
  display: flex;
  align-items: center;
`
export const BorderBottom = styled.div`
  border-bottom: 1px solid #404353;
`
export const QuantityContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #fff;
  span {
    color: #fb674b;
  }
`

import styled from 'styled-components'

export const HeaderContainer = styled.div`
  border: 2px solid rgb(22, 25, 41);
  border-radius: 12px;
  padding: 15px;
  background: linear-gradient(rgb(4, 7, 23) 1.55%, rgb(18, 19, 40) 100%);
  display: grid;
  gap: 44px;
  width: 100%;
`
export const HeaderContent = styled.div<{ cursor?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
  gap: 8px;
  cursor: ${props => (props.cursor ? 'pointer' : 'default')};

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
export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`
export const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  img {
    max-width: 55px;
    max-height: 55px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(251, 103, 75, 0.19);
  border-radius: 10px;
`
export const TextContainer = styled.div`
  display: grid;
  grid-gap: 6px;

  @media (max-width: 767px) {
    grid-gap: 2px;
  }
`
export const MachineNameContainer = styled.h3`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.01em;
  text-align: left;
  color: #ffffff;
  white-space: nowrap;

  &.model-name {
    font-size: 28px;
    @media (max-width: 767px) {
      font-size: 18px;
    }
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
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 16px;
  }
  div {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: Inter;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.01em;
    text-align: left;
    color: rgb(255, 255, 255);
    font-size: 10px;
  }

  span {
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: -0.01em;
    text-align: left;
    color: #424962;
    font-size: clamp(8px, 1.06vw, 13px);

    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      font-size: 14px;
    }
  }
`
export const MachineInfoContainer = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #424962;
`
export const PriceContainer = styled.div`
  font-size: 20px;
  font-weight: 700;
  width: unset !important;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fb674b;
  &.price {
    font-weight: 600;
    justify-content: unset;
    font-size: 15px;
  }
`
export const EndingTimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    justify-content: unset;
  }
`
export const EndingTimeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 8px;
  gap: 4px;
  background: #311b29;
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #f92727;

  &.time-end-class {
    background: #fa495828;
    color: #f42a40;
    font-size: 19.3px;
    width: 145px;
    border-radius: 4px;
    @media (max-width: 767px) {
      font-size: 14.3px;
    }
  }
`

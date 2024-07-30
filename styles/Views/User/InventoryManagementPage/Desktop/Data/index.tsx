import styled from 'styled-components'

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 286px;
  display: flex;
  gap: 12px;
  align-items: center;
  font-size: 13px;
  color: #64718c;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.01em;
  white-space: nowrap;

  @media (max-width: 767px) {
    padding: unset;
  }
`
export const ImageContent = styled.div`
  background-color: #fb674b30;
  padding: 13px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 13px;
  color: #64718c;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.01em;
  white-space: nowrap;

  @media (max-width: 767px) {
    padding: unset;
  }
  &.member-image {
    width: 80px;
    height: 80px;
  }
`
export const TitleContainer = styled.div`
  width: 100%;
  max-width: 150px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const TitleContent = styled.div`
  font-size: 15px;
  font-weight: 700;
  font-family: Inter;
`
export const DetailContainer = styled.div`
  font-size: 13px;
  color: #fff;
  font-weight: 600;
  font-family: Inter;
`
export const ContractContainer = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #fb674b;

  &.transcation-id-class {
    font-family: Inter;
    padding-left: 5px;
    font-size: 12px;
    font-weight: 400;
    color: #ffffff;
    width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (max-width: 767px) {
      padding-left: unset;
    }
    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      padding: unset;
      width: unset;
    }
  }

  @media (max-width: 1448px) {
    font-size: 12px;
  }
`
export const LotContainer = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #fff;
  width: 20%;
`
export const ActionContainer = styled.div<{ cursor?: boolean }>`
  display: flex;
  justify-content: flex-start;
  /* transform: translateX(52px); */
  align-items: center;
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

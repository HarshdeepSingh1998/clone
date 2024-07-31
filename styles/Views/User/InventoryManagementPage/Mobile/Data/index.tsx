import styled from 'styled-components'

export const CheckboxContainer = styled.div<{ publishModal?: boolean }>`
  display: flex;
  cursor: pointer;
  gap: 19px;
  align-items: center;

  font-family: Inter;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #64718c;

  input[type='checkbox'] {
    position: relative;
    cursor: pointer;
  }
  input[type='checkbox']:before {
    content: '';
    display: block;
    position: absolute;
    width: ${props => (props.publishModal ? '22px' : '18px')};
    height: ${props => (props.publishModal ? '22px' : '18px')};
    // width: 22px;
    // height: 22px;
    top: -3px;
    left: -2px;
    border: 2px solid #2a303c;
    border-radius: 7px;
    background: linear-gradient(180deg, #040717 1.55%, #121328 100%);
    transform: ${props => (props.publishModal ? 'translateY(-2px)' : '')};
  }
  input[type='checkbox']:checked:before {
    background: linear-gradient(180deg, #fb674b 1.55%, #fb674b 100%);
  }
  input[type='checkbox']:checked:after {
    content: '';
    display: block;
    width: 5px;
    height: 10px;
    // background: #fb674b,
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: ${props => (props.publishModal ? '0px' : '0')};
    // top: 0;
    left: 7px;
    left: ${props => (props.publishModal ? '7px' : '6px')};
  }
  @media (max-width: 767px) {
    gap: 14px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 50%;
    gap: 12px;
  }
`

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
  &.detail-container {
    color: #9a9fa5;
  }
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
export const MachineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
export const ModalDescriptionContainer = styled.div`
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
    font-size: 14px;
    color: #fff !important;
  }
  &.serial-number {
    font-size: 12px;
    color: #fff !important;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 14px;
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

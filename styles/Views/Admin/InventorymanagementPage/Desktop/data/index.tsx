import styled from 'styled-components'

export const ImageContainer = styled.div<{ profileImage?: string }>`
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
    ${({ profileImage }) =>
      profileImage &&
      `
      border-radius: 50px;
    `}
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
  &.reject-modal-name {
    font-size: 15px;
  }

  /* @media (max-width: 1560px) {
    font-size: 14px;
  } */
`

export const DetailContainer = styled.p`
  display: flex;

  align-items: center;
  gap: 10px;
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
  /* width: 60%; */
  word-wrap: break-word;
  overflow-wrap: break-word;

  &.mobile-machine-modal-text {
    gap: 6px;
  }

  &.mobile-machine-modal {
    font-size: 16px;
    width: 100%;
  }

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

    &.mobile-sn {
      font-size: 12px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      font-size: 12px;
    }
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

    &.mobile-hashrate {
      font-size: 14px;
    }

    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      font-size: 14px;
    }
  }
`
export const AdditionalDetailContainer = styled.div`
  display: grid;
  gap: 5px;

  @media (max-width: 767px) {
    gap: unset;
  }
`
export const ContractContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 10px;

  &.modal-description {
    cursor: pointer;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 3px;
  font-family: Inter;
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #64718c;
  align-items: center;
  /* &.host-rate {
    margin-right: 14px;
  } */
  &.host-rate {
    margin-right: 0px;
  }
`
export const CheckboxContainer = styled.div<{ publishModal?: boolean }>`
  display: flex;
  cursor: pointer;
  gap: 19px;
  align-items: center;
  width: 38%;
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
    width: 100%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 50%;
    gap: 12px;
  }
`
export const AssignContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 8px;

  @media (max-width: 767px) {
    // padding-left: 7px;
    transform: translateX(0px);
    gap: 5px;
    width: unset;
    /* &.sales-customer {
      padding-left: 14px;
    } */
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: unset;
    transform: unset;
  }
`
export const CustomerNameContainer = styled.h4`
  font-family: Inter;
  font-size: clamp(8px, 1.06vw, 16px);
  font-weight: 700;
  text-align: left;
  color: #ffffff;
  word-break: break-all;

  @media (max-width: 767px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 14px;
  }
`
export const ContactNumberContainer = styled.p`
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
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 12px;
  }
`

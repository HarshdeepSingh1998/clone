import styled from 'styled-components'

export const HeaderContainer = styled.div`
  border: 2px solid rgb(22, 25, 41);
  border-radius: 12px;
  padding: 24px 19px 24px 24px;
  background: linear-gradient(rgb(4, 7, 23) 1.55%, rgb(18, 19, 40) 100%);
  display: grid;
  gap: 44px;
  width: 100%;
`
export const HeaderContent = styled.div<{ cursor?: boolean }>`
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

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 10px;

  @media (max-width: 767px) {
    &.member-details {
      width: 50px;
      height: 50px;
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

    &.member-details {
      font-size: 16px;
    }
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

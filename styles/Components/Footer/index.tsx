import styled from 'styled-components'

export const AddressContainer = styled.div`
  width: 100%;
  max-width: 312px;
`
export const ListContainer = styled.ul`
  list-style: none;
  color: lightgrey;
  margin-top: 30px;
  color: #797979;
  font-size: 16px;

  li {
    padding-top: 8px;
    cursor: pointer;
  }
  @media (max-width: 767px) {
    margin-top: 10px;
    color: #64718c;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    margin-top: 10px;
    color: #64718c;
  }
`
export const CompanyHeading = styled.div`
  font-size: 20px;
  color: #ffffff;
`
export const CompanyDetailContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 72px;
  width: 100%;
  max-width: 911px;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 15px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    flex-direction: column;
    gap: 15px;
  }
`

export const CopyRightContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const FirstCol = styled.div`
  width: 100%;
  max-width: 184px;
  @media (max-width: 767px) {
    max-width: unset;
    border-bottom: 1px solid #ffffff21;
    padding-bottom: 15px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    max-width: unset;
    border-bottom: 1px solid #ffffff21;
    padding-bottom: 15px;
  }
`
export const FooterContainer = styled.div`
  width: 80%;
  /* padding: 40px 142px; */
  @media (max-width: 767px) {
    width: 100%;
    padding: 0 20px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 100%;
    padding: 0 43px;
  }
`
export const Heading = styled.div`
  font-size: 20px;
  color: #ffffff;
  @media (max-width: 767px) {
    border-bottom: 1px solid #ffffff21;
    padding: 13px 0;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    border-bottom: 1px solid #ffffff21;
    padding: 13px 0;
  }
`
export const HeadingWrap = styled.div`
  font-size: 25px;
  font-weight: 500;
  color: #ffffff;
  padding-top: 32px;
`

export const MainFooterContainer = styled.div<{ background?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    79.14% 79.14% at 50% 50%,
    #512709 -58.18%,
    #000513 53.58%
  );
  backdrop-filter: blur(8px);
  min-height: 450px;
  background: radial-gradient(
    84.49% 74.54% at 8.26% -15.55%,
    #692f1b 0%,
    #000513 100%
  );
  @media (max-width: 767px) {
    background: #000513;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    background: #000513;
  }
`
export const RightFooterContainer = styled.div`
  font-size: 14px;
  margin-top: 24px;
  font-family: Inter;
  color: #797979;
  line-height: 22px;
  font-weight: 400;

  @media (max-width: 767px) {
    margin: 0;
    padding: 13px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    margin: 0;
    padding: 13px;
  }
`
export const SecWrap = styled.div`
  width: 100%;
  max-width: unset;
  font-size: 14px;
  font-weight: 500;
  font-family: Inter;
  color: #797979;
  padding: 18px 0 10px 0;
  line-height: 22px;
  span {
    color: #263238;
  }
  @media (max-width: 767px) {
    max-width: unset;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    max-width: unset;
  }
`
export const SecondColumnContainer = styled(FirstCol)`
  border: none;
`
export const PrimaryFooterContainer = styled.div`
  display: flex;
  gap: 66px;
  border-bottom: 1px solid #ffffff12;
  padding: 49px 0;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 25px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    flex-direction: column;
    gap: 25px;
  }
`

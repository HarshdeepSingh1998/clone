import styled from 'styled-components'

export const TableContainer = styled.div<{ isGap: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ isGap }) => (isGap ? '40px' : '0')};
  background: linear-gradient(180deg, #040717 1.55%, #121328 100%);
  border-radius: 10px;
  padding: 16px;
  border: 1px solid #161929;
  @media (max-width: 767px) {
    margin: unset;
    padding: 12px;
    gap: 0px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    padding: 16px;
    margin: unset;
    gap: 30px;
  }
`

export const TableContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;

  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
  }
`
export const HeaderTitle = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  //styleName: Title 1 (Semibold);
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #fff;
  @media (max-width: 767px) {
    justify-content: unset;
  }
`
export const BoxImage = styled.div`
  display: flex;
  width: 20px;
  height: 35px;
  border-radius: 5px;
  background: #fb674b;
`
export const ButtonContainer = styled.div`
  display: flex;
  button {
    height: 40px;
    width: 120px;
    padding: 0px;
    border: none;
    color: #64718c;
    @media (max-width: 767px) {
      height: 30px;
      font-size: 12px;
      width: 76px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      width: 116px;
      font-size: 12px;
      height: 30px;
    }
  }
  gap: 4px;
`
export const ButtonContent = styled.div`
  display: flex;
  border: 1px solid #161929;
  border-radius: 62px;
  padding: 5px;
  gap: 5px;
  @media (max-width: 767px) {
    gap: unset;
  }

  button {
    opacity: 1;
    cursor: pointer;

    &.contained {
      color: #fff;
    }
  }
`
export const HeaderContainer = styled.div`
  @media only screen and (min-width: 768px) and (max-width: 1400px) {
    flex-direction: column;
    gap: 20px;
  }
`
export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  // justify-content: space-between;
  // margin-top: 2vw;
  align-items: center;
`
export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid rgb(28, 31, 48);
  padding: 15px 0;
  &.last {
    border-bottom: none;
  }
`
export const TableList = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #fff;
  width: 20%;

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    /* margin-right: 44px;
    justify-content: center; */
  }

  &.mobile-responsive {
    width: 100%;
    display: flex;
    align-items: center;
    /* gap: 35px; */
    text-align: unset;
    line-height: unset;

    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      width: 52%;
    }
  }

  &.first-column {
    justify-content: space-between;
  }
`
export const HeaderText = styled.div`
  font-family: Inter;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #64718c;
  width: 20%;
  &.mobile-header {
    font-size: 12px;
    text-align: unset;
    width: 35%;
    gap: 30px;
  }
  &.contract-header {
    width: 50%;
    font-size: 12px;
    text-align: unset;
    gap: 30px;
  }
  &.padding-inventory {
    transform: 'translateX(-14px)';

    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      transform: 'translateX(14px)';
    }
  }
`
export const FilterContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 85px;
  height: 30px;
  border-radius: 10px;
  border: 1.67px solid #fb674b;
  gap: 6.67px;
  cursor: pointer;
  font-family: Inter;
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #fb674b;
  #basic-button {
    width: unset;
  }
`

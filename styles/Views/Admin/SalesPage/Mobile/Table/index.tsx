import styled from 'styled-components'

export const TableContainer = styled.div<{ isGap: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ isGap }) => (isGap ? '40px' : '0')};
  background: linear-gradient(rgb(4, 7, 23) 1.55%, rgb(18, 19, 40) 100%);
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
  gap: 27px;
  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
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
    &.contained {
      color: #fff;
    }
  }
`
export const FilterContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 85px;
  height: 40px;
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

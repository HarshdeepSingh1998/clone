import styled from 'styled-components'

export const TableViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  background: linear-gradient(180deg, #040717 1.55%, #121328 100%);
  border-radius: 10px;
  padding: 16px;
  border: 1px solid #161929;
  @media (max-width: 767px) {
    margin: unset;

    gap: 0px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    margin: unset;
    gap: 30px;
  }
`
export const TableViewContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 16px;
    padding: 10px 0px 15px 0px;
  }
  &.admin-inventory {
    @media only screen and (min-width: 768px) and (max-width: 1400px) {
      flex-direction: column;
      gap: 27px;
    }
  }
`
export const HeaderSearchContainer = styled.div`
  display: flex;
  gap: 4%;
  justify-content: space-between;
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
  //   border: 1px solid #161929;
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
`

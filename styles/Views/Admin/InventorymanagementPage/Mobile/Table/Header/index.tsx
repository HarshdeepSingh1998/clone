import styled from 'styled-components'

export const HeaderSearchContainer = styled.div`
  display: flex;
  gap: 4%;
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
export const SearchContainer = styled.div`
  padding: 0px;
  width: 308px;
  height: 40px;
  padding: 8px;
  border-radius: 12px;
  position: relative;
`
export const SearchContent = styled.div`
  display: flex;
  transform: translateY(-6px);
  input {
    padding-left: 45px;
    min-height: 45px;
    border: 1px solid rgba(255, 255, 255, 0.098);
    @media (max-width: 767px) {
      padding-left: 22px;
    }
  }
`
export const SvgContainer = styled.div`
  position: absolute;
  top: 9px;
  left: 8px;
  transform: translateY(2px);

  @media (max-width: 767px) {
    left: 0px;
  }
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

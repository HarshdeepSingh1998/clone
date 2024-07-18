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

  &.admin-inventory {
    @media only screen and (min-width: 768px) and (max-width: 1400px) {
      flex-direction: column;
      gap: 27px;
    }
  }
`
export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
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
  min-height: 40px;
  width: 230px;
  padding: 6px;
  border: 1px solid #161929;
  background: #090b1d;
  gap: 8px;
  border-radius: 68px;
  .active {
    background: #fb674b;
    color: #fafafa;
  }
  &.auction-tab {
    width: unset;
  }

  @media (max-width: 767px) {
    &.member-tab-mobile {
      width: 100%;
      max-width: 302px;
    }
    &.auction-tab {
      width: 100%;
      max-width: 314px;
      gap: unset;
    }
  }
`
export const MemberDetailsButton = styled.button`
  height: 30px;
  border-radius: 72px;
  width: 116px;
  border: none;
  background: none;
  transition: background-color 0.8s ease;
  color: #64718c;
  font-family: Inter;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 150px;
  }
`

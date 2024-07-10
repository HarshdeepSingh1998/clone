import styled from 'styled-components'

export const TableContainer = styled.div<{ isGap: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 10px 10px 0 10px;
  width: 100%;
  gap: ${({ isGap }) => (isGap ? '40px' : '0')};
  background: linear-gradient(180deg, #040717 1.55%, #121328 100%);
  border-radius: 10px;
  padding: 24px;
  border: 1px solid #161929;
  @media (max-width: 767px) {
    margin: 20px 0px 0px 0px;
    padding: 12px;
    gap: 0px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    padding: 16px;
    margin: 30px 0px 0px 0px;
    gap: 30px;
  }
`

export const TableContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
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
  @media only screen and (min-width: 1224px) and (max-width: 1430px) {
    flex-direction: column;
    gap: 27px;
  }
`
export const HeaderTitle = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: 52px;
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

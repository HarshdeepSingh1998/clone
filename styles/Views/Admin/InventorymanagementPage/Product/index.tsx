import styled from 'styled-components'

export const ProductViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 10px 0 10px;
  width: 100%;
  gap: 40px;
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
export const ProductViewContent = styled.div`
  display: flex;

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
  @media only screen and (min-width: 1224px) and (max-width: 1430px) {
    flex-direction: column;
    gap: 27px;
  }
`

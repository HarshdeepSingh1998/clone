import styled from 'styled-components'

export const AddProductContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  background: linear-gradient(180deg, #040717 1.55%, #121328 100%);
  border-radius: 10px;
  padding: 10px;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    padding: 0px;
    background: none;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    padding: 0px;
    flex-direction: column-reverse;
    background: none;
  }
`
export const AddProductLeftContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  // height: calc(100vh - 215px);
  // overflow-y: scroll;
  @media (max-width: 767px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 100%;
  }
`
export const AddProductRightContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #161929;
  background: linear-gradient(
    90deg,
    rgba(4, 7, 23, 1) 100%,
    rgba(18, 19, 40, 1) 100%
  );
  height: fit-content;
  padding: 20px 30px;
  @media (max-width: 767px) {
    width: 100%;
    padding: 20px;
    margin-top: 15px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 100%;
    padding: 20px;
    margin-top: 15px;
  }
`
export const ProductRightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2vw;
`
export const TextContainer = styled.div`
  display: flex;
  gap: 10px;
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
`
export const BoxImage = styled.div`
  display: flex;
  width: 20px;
  height: 35px;
  border-radius: 5px;
  background: #fb674b52;
`

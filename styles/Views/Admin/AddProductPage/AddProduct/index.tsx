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
export const ProductImagesContainer = styled.div<{ height?: string }>`
  width: 100%;
  word-break: break-all;
  height: ${props => (props.height ? 'auto' : '200px')};
  background: #1c1f30;
  border-radius: 12px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`
export const ImagesPreviewContainer = styled.div`
  img {
    height: 150px;
    width: 150px;
  }
`
export const PreviewDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1vw;
  width: 100%;
`
export const DescriptionLabel = styled.div`
  padding: 0px 8px 0px 8px;
  border-radius: 6px;
  gap: 10px;
  // background: #469b592b;
  background: #ed832f26;
  color: #fa8949;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100px;
  height: 30px;
`

export const ModalNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #fff;
  justify-content: space-between;
  // width: 100%;
  // justify-content: start;
`
export const ModalNameText = styled.div`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #64718c;
`

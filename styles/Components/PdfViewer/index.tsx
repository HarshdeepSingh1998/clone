import styled from 'styled-components'

export const PdfviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1vw 3vw;
  background: #050a1c;
  height: 100%;
  z-index: 99;

  @media (max-width: 767px) {
    padding: 16px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1400px) {
    background-color: unset;
    padding: 20px;
  }
`
export const UploadFileModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 729px;
  padding: 20px;
  border-radius: 24px;
  border: 1px;
  gap: 10px;
  border: 1px solid #1b202b;
  padding: 40px 40px;
  background: linear-gradient(180deg, #030616 0%, #16172d 100%);
`

export const PdfviewContent = styled(UploadFileModalContainer)`
  @media (max-width: 767px) {
    width: 403px;
  }
  max-height: 70vh;
`
export const HeaderContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  span {
    cursor: pointer;
  }
`
export const HeaderContent = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  // justify-content: center;

  //styleName: Title 1 (Semibold);
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #fff;

  span {
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #a9acb4;
  }

  margin-bottom: 1vw;
  @media (max-width: 767px) {
    padding-bottom: 30px;
  }
`
export const BoxImage = styled.div`
  display: flex;
  width: 20px;
  height: 35px;
  border-radius: 5px;
  background: #fb674b52;
`
export const PdfContainer = styled.div`
  display: flex;
  justify-content: space-between;

  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
  }
`

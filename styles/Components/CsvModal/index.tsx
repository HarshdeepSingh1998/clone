import styled from 'styled-components'

export const ModalContainer = styled.div`
  display: flex;
  background: linear-gradient(rgb(3, 6, 22) 0%, rgb(22, 23, 45) 100%);

  flex-direction: column;
  border-radius: 20px;
  padding: 40px;
  width: 602px;

  @media (max-width: 767px) {
    padding: 20px;
  }
`
export const HeaderContainer = styled.div`
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

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const BoxImage = styled.div`
  display: flex;
  width: 20px;
  height: 35px;
  border-radius: 5px;
  background: #fb674b52;
`
export const UploadedFileContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  // justify-content: center;
  height: 100px;
  background: #1c1f30;
  border-radius: 20px;
  padding: 20px;
  justify-content: space-between;
`
export const UploadFile = styled.div`
  display: flex;
  gap: 20px;
`
export const UploadedFileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const UploadedFileText = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
`
export const UploadedFileContent = styled.div`
  display: flex;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #a9acb4;
  gap: 10px;
`
export const FileImageContainer = styled.div`
  display: flex;
  align-items: center;
`
export const DeleteImage = styled.div`
  // display: flex;
  // gap: 20px;
`
export const UploadFileContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 200px;
  background: #1c1f30;
  border-radius: 20px;

  span {
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #a9acb4;
    position: absolute;
    bottom: 27%;
  }
`
export const DropImages = styled.label`
  position: absolute;
  height: 40px;
  width: 200px;
  border: 2px solid #fb674b;
  border-radius: 12px;
  // top: 40%;
  // left: 30%;
  background: #392834;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 10px;

  //styleName: Button 1;
  font-family: Inter;
  font-size: 15px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #fb674b;
  justify-content: center;
`
export const InputFile = styled.input`
  display: none;
`
export const FileUploadError = styled.div`
  font-size: 13.5px;
  color: #ed832f;
`
export const ButtonContainer = styled.div<{ disable?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  // padding-bottom: 31px;
  gap: 10px;
  button {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${props =>
      props.disable &&
      `
      opacity: 0.5;
      cursor: not-allowed;
      background-color: grey
    `}
  }
  padding-top: 20px;
  .MuiCircularProgress-root {
    display: flex;
    align-items: flex-end;
  }
`

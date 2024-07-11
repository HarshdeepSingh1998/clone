import styled from 'styled-components'

export const InputContent = styled.div`
  width: 100%;
  position: relative;
  @media (max-width: 767px) {
    padding: 0px 0px 12px 0px;
  }

  ::placeholder {
    color: #64718c;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    /* padding: 10px; */
  }
  .css-166bipr-Input {
    color: #fff !important;
  }
  .rsw-toolbar {
    height: 48px;
    background: none;
    border: none;
  }
  .rsw-btn:hover {
    background-color: #2c304f;
  }
  .rsw-btn {
    color: #64718c;
    font-size: 25px;

    svg {
      width: 32px !important;
    }
  }
  .rsw-btn[data-active='true'] {
    background: none !important;
  }
  .rsw-editor {
    border: 1px solid #9a9fa53f;
  }
  .rsw-ce {
    height: 112px;
    background-color: #0e1023;
    color: #fff;
    padding-left: 10px;
  }
`
export const InputText = styled.div`
  color: #90a3bf;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  // padding: 5px 0;
  text-transform: capitalize;
`
export const LabelContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 48px;
  max-width: 100%;
  background-color: #ffffff14;
  padding-left: 13px;
  border: none;
  border-radius: 12px;
  color: #fff;
  outline: none;
  cursor: pointer;
`
export const InputContainers = styled.input`
  opacity: 0;
  width: 100%;
  cursor: pointer;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`
export const ChoseFileLabel = styled.label`
  height: 30px;
  width: 100%;

  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  background: linear-gradient(180deg, #24283a 0%, #34365f 100%);
  margin-left: 3px;
  border: 1px solid #fff;
  padding: 0 10px;
`
export const TextContainer = styled.p`
  display: inline-block;
  font-size: 15px;
  /* width: 217px; */
  color: #64718c;
  line-height: 16px;
  margin-left: 12px;
  cursor: pointer;
`
export const AttachmentContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 48px;
  max-width: 100%;
  cursor: pointer;
  background-color: #ffffff14;
  justify-content: space-between;
  padding: 0 20px;
  border: none;
  border-radius: 12px;
  color: #fff;
  outline: none;
`
export const PdfContainer = styled.div`
  display: flex;
  gap: 6px;
  padding: 7px;
  p {
    margin-top: 3px;
  }
  cursor: pointer;
  font-weight: 400;
  font-size: 15px;
`
export const ErrorMessageContainer = styled.div`
  width: 100%;
  font-size: 13.5px;
  color: #ed832f;
  padding-top: 10px;
  margin-left: 6px;
  padding-top: 5px;
`

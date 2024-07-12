import styled from 'styled-components'

export const UploadImageContainer = styled.div`
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
`
export const InputFile = styled.input`
  display: none;
`
export const ImagesContainer = styled.div`
  position: absolute;

  bottom: 0;
  img {
    height: 48px;
    width: 48px;
  }

  .image-container {
    position: relative;
    cursor: pointer;
    display: inline-block;
    margin-right: 8px; /* Adjust as needed */
  }

  .tooltip {
    position: absolute;
    top: -15px;
    right: -10px;
    background-color: #fb674b; /* Red background color, adjust as needed */
    color: #ffffff; /* White text color, adjust as needed */
    padding: 4px 8px; /* Adjust padding as needed */
    border-radius: 50px;
    opacity: 0;
    transition: opacity 0.3s;
    // width: 80px;
  }

  .image-container:hover .tooltip {
    opacity: 1;
  }
`

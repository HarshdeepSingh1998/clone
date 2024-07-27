import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (max-width: 767px) {
    gap: unset;
  }
`
export const TitleContainer = styled.h3`
  color: #fff;
  text-align: center;
  font-family: Ubuntu;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -1.68px;
  @media (min-width: 768px) {
    padding: 16px;
  }
  span {
    background: linear-gradient(93deg, #ed832f 44.84%, #fb674b 94.97%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Ubuntu;
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -1.68px;
  }
`
export const VideoContainer = styled.div`
  width: 100%;
  maxwidth: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  max-width: 1000px;
  video {
    border-radius: inherit;
  }
`
export const VideoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`
export const IframeContainer = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
`
export const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
`

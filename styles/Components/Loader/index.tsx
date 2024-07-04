import styled from 'styled-components'

export const LoaderContainer = styled.div`
  .loader-bg {
    width: 100%;
    height: 100vh;
    background: radial-gradient(
        66.53% 41.29% at 11.39% 34.48%,
        rgba(255, 76, 46, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      radial-gradient(55.18% 30.5% at 83.78% 67.65%, #572b17 0%, #000513 100%);
    backdrop-filter: blur(8px);
    opacity: 1;
    position: absolute;
    z-index: 88;
    /* transition: opacity 0.3s ease-in-out; */
    display: none;
  }

  .opacity-bg {
    display: block;
  }
`

export const SvgContainer = styled.div`
  z-index: 1000;
  position: absolute;

  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  svg {
    width: 324px;
    animation: rotateAnimation 2s linear infinite;

    @keyframes rotateAnimation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`

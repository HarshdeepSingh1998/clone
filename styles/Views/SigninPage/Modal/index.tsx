import styled from 'styled-components'

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  /* background: #00000013; */
  position: relative;
`
export const ModalMainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: radial-gradient(
      66.53% 41.29% at 11.39% 34.48%,
      rgba(255, 76, 46, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    radial-gradient(55.18% 30.5% at 83.78% 67.65%, #572b17 0%, #000513 100%);
  backdrop-filter: blur(8px);
  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }

  &.signup-class {
    @media (max-width: 767px) {
      margin-top: unset;
      /* justify-content: center; */
    }
  }

  > div:nth-child(3) {
    display: flex;
    align-items: end;
    margin-bottom: 67px;
    @media (max-width: 767px) {
      justify-content: end;
      margin-bottom: 0;
    }
  }
`

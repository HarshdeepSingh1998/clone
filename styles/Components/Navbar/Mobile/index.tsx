import styled from 'styled-components'

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const MainContainer = styled.div`
  .css-38tatp-MuiPaper-root-MuiDrawer-paper {
    top: 105px;
  }
  .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop {
    background-color: unset !important;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  text-align: center;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: space-between;
    height: 90vh;
    align-items: start;
    padding: 42px 22px 72px 22px;
    text-align: unset;

    &.dashboard-responsive {
      padding: 0px 30px;
      height: 89vh;
      display: flex;
      flex-direction: column;
      justify-content: start;
      gap: 32px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    padding: 42px 22px 0px 22px;
    text-align: unset;
    height: unset;

    &.dashboard-responsive {
      padding: 0px 30px;
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
    &.landing-nav {
      flex-direction: column;
      align-items: center;
      padding: unset;
      text-align: center;
      justify-content: center;
      height: 81vh;
    }
  }
`

export const NavTextContainer = styled.div`
  font-size: 34px;
  color: #ffffff;
  line-height: 48px;
  font-weight: 700;
  font-family: Ubuntu;
  cursor: pointer;
`
export const NavButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 767px) {
    /* width: 100%; */
    justify-content: center;
    gap: 20px;
  }
`
export const NavButtonStyle = styled.div<{ variant?: string }>`
  button {
    display: flex;
    height: 51px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 64px;
    font-family: Inter;
  }

  @media (max-width: 767px) {
    button {
      padding: 0px 16px;
      height: 43px;
    }
    &.mobile-nav {
      display: flex;
      gap: 10px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    button {
      padding: 0px 16px;
      height: 43px;
    }
    &.mobile-nav {
      display: flex;
      gap: 10px;
    }
  }
`
export const NavButtonSignIn = styled(NavButtonStyle)`
  button {
    background: none;
  }
  @media (max-width: 767px) {
    button {
      background: #1c1f30;
    }
  }
`

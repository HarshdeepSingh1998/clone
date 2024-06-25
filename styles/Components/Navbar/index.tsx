import styled from 'styled-components'

export const NavbarHeader = styled.div<{ background?: string }>`
  width: 100%;
  background: ${({ background }) => background};
  border-bottom: 1px solid #ffffff2e;

  position: fixed;
  top: 0;
  z-index: 100;

  @media (max-width: 767px) {
    .MuiDrawer-root .MuiDrawer-modal .MuiModal-root .css-2d3bib {
      position: unset !important;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    .MuiDrawer-root .MuiDrawer-modal .MuiModal-root .css-2d3bib {
      position: unset !important;
    }
  }
`

export const NavTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10%;
  width: 100%;
  justify-content: end;
`
export const NavItemsContainer = styled.div`
  width: 50%;
  height: 18px;
  display: flex;
  justify-content: space-around;
  color: #ffffff;
  p {
    color: #ffffff;
    text-align: right;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 129.7%; /* 18.158px */
    text-transform: capitalize;
    width: 20%;
  }
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

export const NavbarContainer = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  margin: auto;
  padding-top: 30px;

  @media (max-width: 767px) {
    width: 93%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 95%;
  }
`

export const NavTextContentContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 60px;
  padding-bottom: 24px;
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
export const LogoMenuContainer = styled.div`
  display: flex;
  gap: 5px;
`
export const MobileMenuIconContainer = styled.div`
  display: flex;
  cursor: pointer;
  @media (max-width: 767px) {
    display: inline-flex;
    align-items: center;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    svg {
      margin-top: 5px;
    }
  }
`
export const MobileRightSection = styled.div`
  display: flex;
  @media (max-width: 767px) {
    display: flex;
    justify-content: flex-start;
    gap: 5.278vw;
  }
`

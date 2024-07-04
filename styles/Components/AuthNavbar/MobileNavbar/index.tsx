import styled from 'styled-components'

export const MobileNavbarContainer = styled.div`
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

export const NavbarContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  @media (max-width: 767px) {
    border-bottom: 2px solid #272b30;
    width: 100%;
    height: unset;
    padding-bottom: 16px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    border-bottom: 2px solid #272b30;
    height: unset;
    padding-bottom: 16px;
    width: 100%;
  }
`

export const ItemContent = styled.div<{
  isSelected?: boolean
}>`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 12px 0 12px 20px;
  cursor: pointer;
  background-color: ${props => (props.isSelected ? '#FB674B' : 'transparent')};
  color: ${props => (props.isSelected ? '#fff' : '#64718C')};
  border-radius: 62px;
  margin-top: 8px;
  height: 48px;
  svg {
    width: 100%;
    max-width: 25px;
    fill: ${props => (props.isSelected ? '#fff' : '#64718C')};
  }

  &:hover {
    color: ${props => (props.isSelected ? '#fff' : '#64718C')};
    background-color: ${props => (props.isSelected ? '#FB674B' : '#4f4d563d')};
    height: 48px;
    margin-top: ${props => (props.isSelected ? '0px' : '8px')};
    margin-bottom: ${props => (props.isSelected ? '0px' : '8px')};
    margin-top: 8px;
    svg {
      fill: ${props => (props.isSelected ? '#fff' : '#64718C')};
    }
    .fillSvgClass {
      path {
        fill: ${props => (props.isSelected ? '#fff' : '#64718C')};
      }
    }
  }
  @media (max-width: 767px) {
    width: 225px;
    background-color: unset;
    padding-left: 0px;
    &:hover {
      background-color: unset;
      color: #fff;
      svg {
        fill: #fff;
      }
      .fillSvgClass {
        path {
          fill: #fff;
        }
      }
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    /* width: 225px; */
    background-color: unset;
    padding-left: 0px;
    &:hover {
      background-color: unset;
      color: #fff;
      svg {
        fill: #fff;
      }
      .fillSvgClass {
        path {
          fill: #fff;
        }
      }
    }
  }
`
export const TextContainer = styled.div<{
  isSelected?: boolean
}>`
  width: 100%;
  font-family: Inter;
  font-size: 15px;
  font-weight: 600;
  margin-top: 1px;
  &:hover {
    padding: 12px 0 12px 0;
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 20px;
  }
`

export const EditProfileContainer = styled.div`
  cursor: pointer;
  font-weight: 400;
  font-size: 15px;
  // padding: 5px;
`
export const ChangePasswordContainer = styled.div`
  cursor: pointer;
  font-weight: 400;
  font-size: 15px;
  padding: 5px;
`
export const LogoutContainer = styled.div`
  cursor: pointer;
  font-weight: 400;
  font-size: 15px;
  padding: 5px;
  @media (max-width: 767px) {
    color: #64718c;
    &:hover {
      color: #fff;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    color: #64718c;
    &:hover {
      color: #fff;
    }
  }
`
export const TermsAndConditionsContainer = styled.div`
  padding: 0 30px;
  position: fixed;
  bottom: 2vw;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;

  bottom: 2vw;
  width: 260px;

  color: #fff;

  display: flex;

  align-items: end;

  height: 20px;

  cursor: pointer;
`

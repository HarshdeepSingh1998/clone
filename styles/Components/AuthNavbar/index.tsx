import styled from 'styled-components'

export const NavbarContainer = styled.div<{ background?: string }>`
  width: 100%;
  background: ${({ background }) => background};
`
export const NavbarContent = styled.div`
  display: flex;
  padding: 1.5vw 3vw;
  height: 96px;
  justify-content: space-between;
  background: linear-gradient(
    90deg,
    rgba(4, 7, 23, 1) 100%,
    rgba(18, 19, 40, 1) 100%
  );

  .css-130dmu7-MuiTypography-root {
    border-radius: 20px;
    background: linear-gradient(
      90deg,
      rgba(27, 32, 43, 1) 0%,
      rgba(2, 6, 21, 1) 100%,
      rgba(23, 24, 46, 1) 100%,
      rgba(27, 32, 43, 1) 100%
    ) !important;
    background-color: none;
    color: #64718c !important;
  }
  @media (max-width: 767px) {
    padding: 29px 16px 10px 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    padding: 29px 16px 10px 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  }
`

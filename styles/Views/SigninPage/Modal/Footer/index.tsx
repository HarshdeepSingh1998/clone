import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 20px;
  padding-top: 0;
  border-top: 1px solid #ffffff17;
  background: radial-gradient(
    87.58% 46.04% at 4.03% 41.08%,
    #030201 0%,
    #000513 100%
  );
  backdrop-filter: blur(8px);
  @media (max-width: 767px) {
    padding: 10px;
  }
  @media (max-width: 375px) {
    padding: 0px;
  }
  &.signup-footer {
    @media (max-width: 767px) {
      padding: unset;
    }
  }
`
export const FooterContent = styled.div`
  font-size: 14px;
  margin-top: 24px;
  font-family: Inter;
  color: #797979;
  line-height: 22px;
  font-weight: 400;

  @media (max-width: 767px) {
    margin: 0;
    padding: 13px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    margin: 0;
    padding: 13px;
  }
`

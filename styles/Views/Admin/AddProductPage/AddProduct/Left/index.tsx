import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 12px;
  @media screen and (max-width: 1366px) {
    gap: 5px;
  }
`

export const AddProductLeftContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #161929;
  background: linear-gradient(
    90deg,
    rgba(4, 7, 23, 1) 100%,
    rgba(18, 19, 40, 1) 100%
  );
  height: fit-content;
  padding: 20px;
  // height: calc(100vh - 215px);
  // overflow-y: scroll;
  @media (max-width: 767px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 100%;
  }
`
export const AddContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2vw;
`
export const AddContentTitle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  //styleName: Title 1 (Semibold);
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #fff;
`
export const BoxImage = styled.div`
  display: flex;
  width: 20px;
  height: 35px;
  border-radius: 5px;
  background: #fb674b52;
`

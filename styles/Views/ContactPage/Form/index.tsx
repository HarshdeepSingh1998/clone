import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 5vw 0;

  background: radial-gradient(
      89.38% 92.27% at 23.51% 10.77%,
      #472520 0%,
      #000513 97.32%
    ),
    radial-gradient(
      89.38% 92.27% at 23.51% 10.77%,
      #472520 0%,
      #000513 67.61%,
      #42221f 76.48%
    );

  svg:first-child {
    margin-top: 5%;
  }

  svg:last-child {
    margin-top: 15%;
  }
`
export const UpperFanContainer = styled.div`
  position: relative;
  svg {
    position: absolute;
  }
  @media (max-width: 767px) {
    svg {
      width: unset;
      top: 60px;
      left: -40px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    svg {
      width: unset;
      top: 33px;
      left: 9px;
    }
  }
`
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 706px;
  align-items: center;
  gap: 10px;
  margin: auto;
  border-radius: 24px;
  // margin-top: 30px;
  z-index: 1;
  padding: 5vw 0;
  @media (max-width: 767px) {
    width: 93%;
  }
`
export const TitleContainer = styled.div`
  display: flex;
  gap: 18px;
  color: #ffffff;
  font-family: Ubuntu;
  font-size: 62px;
  font-style: normal;
  font-weight: 700;
  line-height: 129.7%; /* 80.414px */
  text-transform: capitalize;
  span {
    color: #fb674b;
  }
  @media (max-width: 767px) {
    font-size: 38px;
    gap: 7px;
    img {
      width: 48px;
      height: 48px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 48px;
    img {
      width: 50px;
      height: 50px;
    }
  }
`
export const ContactFormContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  padding: 28px 24px;
  width: 100%;
  background: linear-gradient(#030616, #14162a, #1b202b, #1b202b);
  width: 100%;
  border-radius: 40px;

  @media (max-width: 767px) {
    background: linear-gradient(to bottom, #030616 0%, #14162a 100%);
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    font-size: 38px;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  @media screen and (max-width: 1366px) {
    gap: 5px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  input {
    width: 100%;
    border: 1px solid #323a4b;
    background: #ffffff14;
    color: #ffffff;
    padding-left: 40px;
    ::placeholder {
      color: #64718c;
    }
  }
  svg {
    position: absolute;
    top: 15px;
    left: 12px;
  }
  span {
    svg {
      position: absolute;
      top: 10px;
      left: 12px;
    }
  }
`

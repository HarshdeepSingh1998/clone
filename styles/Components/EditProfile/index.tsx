import styled from 'styled-components'

export const EditProfileContainer = styled.div`
  width: 100%;
  display: flex;

  svg:first-child {
    margin-top: 5%;
  }

  svg:last-child {
    margin-top: 15%;
  }

  flex-direction: column;
  width: 100%;
  max-width: 706px;
  align-items: center;
  gap: 10px;
  margin: auto;
  z-index: 1;
  @media (max-width: 767px) {
    width: 93%;
  }
`
export const EditProfileContent = styled.div`
  background: linear-gradient(#030616, #14162a, #1b202b, #1b202b);
  border: 1px solid #323d5c;
  gap: 23px;

  @media (max-width: 767px) {
    margin-top: unset;
    background: linear-gradient(to bottom, #030616 0%, #14162a 100%);
  }

  @media screen and (max-width: 1266px) {
    padding: 18px 24px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    margin-top: unset;
    padding: 30px 24px;
  }
`

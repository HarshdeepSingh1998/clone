import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: unset;
    gap: 20px;
  `
export const ProfileContent = styled.div`
  display: flex;
  gap: 10px;
`
export const ImageContainer = styled.div`
  cursor: pointer;
  image {
    width: 48px;
    height: 48px;
    border-radius: 50px;
  }
`

export const ButtonContainer = styled.div`
  margin-bottom: 0;
  display: flex;
  justify-content: center;

  align-items: center;

  button {
    background-color: none;
    padding: 12px 19px;
    display: flex;
    gap: 5px;
    width: 100%;
    max-width: 320px;
    position: relative;
    padding: 12px 30px 12px 34px;

    svg {
      position: absolute;
      left: 12px;
      margintop: 4;
    }
  }

  input {
    display: none;
  }
`

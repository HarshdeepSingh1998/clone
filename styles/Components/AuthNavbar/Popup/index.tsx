import styled from 'styled-components'

export const ImageContainer = styled.div<{ userRole: boolean }>`
  ${props =>
    !props.userRole &&
    `
      border: 2px solid #fb674b;
      border-radius: 50%;
    `}

  img {
    ${props =>
      props.userRole
        ? `
          border-radius: 50px;
        `
        : `
          max-width: 45px;
          max-height: 42px;
          padding: 8px;
        `}
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

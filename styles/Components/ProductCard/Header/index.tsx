import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  min-height: 30px;
  .toggle {
    background: transparent;
  }
`
export const HeadingContent = styled.div<{ isProfileImage: boolean }>`
  display: flex;
  width: 100%;
  height: 40px;
  position: relative;
  justify-content: ${({ isProfileImage }) =>
    isProfileImage ? 'space-between' : ''};
`

export const CardHeading = styled.div`
  display: flex;
  width: max-content;
  height: 26px;
  border-radius: 4px;
  padding: 4px 8px;
  background: rgba(250, 137, 73, 0.16);
  color: #f07d35;
  font-family: Inter;
  font-size: 10px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  position: absolute;

  &.card-heading {
    @media only screen and (min-width: 768px) and (max-width: 900px) {
      font-size: 8px;
    }
  }
`
export const ProfileImageContainer = styled.div<{ isAdmin?: boolean }>`
  position: absolute;
  right: 0;
  &.admin-marketplace {
    img {
      border-radius: ${props => (props.isAdmin ? '0' : '50%')};
      transform: translateY(-2px);
    }
  }

  &.marketplace {
    img {
      border-radius: 50%;
      transform: translateY(-2px);
    }
  }
`

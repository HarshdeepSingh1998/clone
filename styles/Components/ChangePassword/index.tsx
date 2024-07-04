import styled from 'styled-components'

export const ChangePasswordContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 375px) {
    padding: 0px 16px;
  }

  @media (max-width: 767px) {
    padding: 0px 16px;
  }
`
export const ChangePasswordContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 396px;
  background: linear-gradient(180deg, #030616 0%, #16172d 100%);
  border: 1px solid #323d5c;
  padding: 29px;
  border-radius: 24px;
  // margin-top: 16px;
`
export const HeadingContainer = styled.div`
  color: #ffffff;
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  // gap: 120px;
  justify-content: space-between;
  span {
    cursor: pointer;
  }
`
export const TextContent = styled.div`
  display: flex;
  gap: 10px;
  alignitems: center;
`

export const BoxImage = styled.div`
  width: 16px;
  height: 32px;
  border-radius: 4px;
  background: #fb674b;
`

import styled from 'styled-components'

export const EditProfileContainer = styled.div`
  width: 100%;
  display: flex;
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
export const EditProfileContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 706px;
  background: linear-gradient(180deg, #030616 0%, #16172d 100%);
  border: 1px solid #323d5c;
  padding: 29px;
  border-radius: 24px;
  gap: 10px;
`

import styled from 'styled-components'

export const CardViewContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 60px;
  margin: auto;
  align-items: flex-start;
  padding: 5vw 0;
  background: radial-gradient(
    79.14% 67.14% at 50% 38.86%,
    #512709 3.82%,
    #000513 53.58%
  );
`
export const CardViewContent = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  gap: 60px;
  margin: auto;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 767px) {
    width: 90%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    /* width: unset; */
    width: 91%;
    gap: 20px;
  }
`
export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 60px;
  margin: auto;
  align-items: flex-start;
  justify-content: center;
  max-width: 1100px;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    gap: 20px;
  }
`

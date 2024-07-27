import styled from 'styled-components'

export const DetailsContainer = styled.div`
  display: flex;
  margin-top: 2vw;
  margin-bottom: 2vw;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 38px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    flex-direction: column;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  justify-content: center;

  @media (max-width: 767px) {
    /* position: unset; */
    width: unset;
    gap: 25px;
    /* flex-direction: unset; */
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    position: unset;
    width: unset;
    flex-direction: unset;
  }
`

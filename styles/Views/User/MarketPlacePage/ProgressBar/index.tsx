import styled from 'styled-components'

export const ProgressBarContainer = styled.div<{ width: number | undefined }>`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;

  span {
    width: 100%;
    color: #fff;
    display: flex;
    font-size: 32px;
    gap: 15px;
    font-weight: 600;
    align-items: center;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: unset;
    }
    @media only screen and (min-width: 768px) and (max-width: 1224px) {
      flex-direction: column;
      align-items: unset;
    }

    p {
      font-size: 16px;
      color: #fb674b;
    }
  }

  .progress {
    width: 100%;
    display: flex;
    // justify-content: end;
    background-color: #111425;
    height: auto;
    border-radius: 20px;

    @media (max-width: 767px) {
      width: 97%;
      margin-left: 5px;
    }
  }

  .progress-bar {
    // width: 60%;
    border-radius: 20px;
    background-color: #fb674b;
    font-family: Inter;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ width }) => (width ? width + '%' : '0%')};
    transition: width 0.5s ease-in-out;
    background-color: ${({ width }) => (width ? '#fb674b' : '#050a1c')};
  }

  @media (max-width: 767px) {
    gap: 20px;
  }
`
export const ProgressBarContent = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 16px;
  }
`
export const ButtonContainer = styled.div`
  width: 100%;
  max-width: 201px;
  button {
    padding: 10px 36px;

    @media (max-width: 767px) {
      padding: 8px 20px;
      width: unset;
    }
  }
`

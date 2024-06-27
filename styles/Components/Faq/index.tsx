import styled from 'styled-components'

export const FaqAccordian = styled.div<{
  isOpen?: boolean
}>`
  background: ${props =>
    props.isOpen ? 'linear-gradient(180deg, #040717 0%, #15162C 100%)' : ''};
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-radius: ${props => (props.isOpen ? '12px' : '')};
  //   background: linear-gradient(180deg, #1e2648 0%, #151a33 100%);
  cursor: pointer;
  width: calc(50% - 20px); // Subtracting margin/padding
  box-sizing: border-box; // To include padding and border in the total width
  padding: 20px;
  flex-shrink: 0;

  @media (max-width: 767px) {
    width: 100%;
    padding: ${props => (props.isOpen ? '20px' : '0px')};
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 100%;
  }
`
export const FaqAccordianHeading = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  gap: 12px;
`
export const FaqAccordianTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  flex: 1 0 0;
  color: #64718c;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  span {
    color: #fff;
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 120% */
  }
  @media (max-width: 767px) {
    span {
      font-size: 16px;
      color: #d9d9d9;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    span {
      font-size: 16px;
      color: #d9d9d9;
    }
  }
`
export const FaqAccordianContent = styled.div`
  color: #64718c;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px; /* 164.286% */
  width: 100%;
`
export const FaqLists = styled.li`
  text-decoration: none;
  list-style: none;
  .title {
    text-decoration: underline;
  }
`

import styled from 'styled-components'
import Select, { selectClasses } from '@mui/joy/Select'

export const StyledSelect = styled(Select)<{ width: string }>`
  width: ${props => props.width || '10%'};
  background: #1c1f30;
  color: #64718c;
  border: 1px solid #363847;
  border-radius: 12px;
  height: 45px;
  font-family: 'Inter';
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .${selectClasses.indicator} {
    transition: transform 0.2s ease-in-out;
    margin-right: 10px; // Adjust to your preference

    &.${selectClasses.expanded} {
      transform: rotate(-180deg);
      color: #64718c;
      background: #1c1f30;
    }
  }

  &:hover {
    background: #1c1f30;
  }
`
export const InputContent = styled.div`
  width: 100%;
  position: relative;
  @media (max-width: 767px) {
    padding: 0px 0px 12px 0px;
  }

  ::placeholder {
    color: #64718c;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    /* padding: 10px; */
  }
`
export const InputText = styled.div`
  color: #90a3bf;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  // padding: 5px 0;
  text-transform: capitalize;
`
export const ErrorMessageContainer = styled.div`
  width: 100%;
  font-size: 13.5px;
  color: #ed832f;
  padding-top: 10px;
  margin-left: 6px;
  padding-top: 5px;
`

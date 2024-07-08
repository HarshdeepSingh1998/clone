import styled from 'styled-components'
import Switch from '@mui/material/Switch'

export const SwitchContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SwitchContent = styled.div`
  // disply: flex;
  width: 100%;
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
export const MainContainer = styled.div<{ toggleValue: string }>`
  display: flex;
  gap: 20px;
  margin-top: 6px;
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  // color: #fff;
  ${props =>
    props.toggleValue === 'Bid' &&
    `
    margin-top: 0;
    transform: translateY(-5px);
  `}

  span:first-child {
    color: ${props => (props.toggleValue === 'Buy' ? '#FB674B' : '#fff')};
  }

  span:last-child {
    color: ${props => (props.toggleValue === 'Bid' ? '#FB674B' : '#fff')};
  }

  // .css-0 {
  //   margin-top: 6px;
  // }
  div {
    transform: translateY(3px);
  }
`
export const ToggleContainer = styled.div``

export const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)'
    }
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#FB674B',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: 'transparent',
        border: '2px solid #fb674b',
        boxSizing: 'border-box'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions?.create(['width'], {
      duration: 200
    })
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: 'transparent',
    border: '2px solid #fb674b',
    boxSizing: 'border-box'
  }
}))

export const CheckboxContainer = styled.div`
  display: flex;
`
export const CheckboxContent = styled.div<{ publishModal?: boolean }>`
  display: flex;
  cursor: pointer;
  gap: ${props => (props.publishModal ? '15px' : '19px')};
  gap: 19px;
  align-items: center;
  // width: 38%;
  font-family: Inter;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #64718c;

  &.mobile-machine-modal {
    width: 100%;
    padding-top: 24px;
    gap: 12px;
  }
  &.mobile-aucton-popup {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  input[type='checkbox'] {
    position: relative;
    cursor: pointer;
  }
  input[type='checkbox']:before {
    content: '';
    display: block;
    position: absolute;
    width: ${props => (props.publishModal ? '22px' : '18px')};
    height: ${props => (props.publishModal ? '22px' : '18px')};
    // width: 22px;
    // height: 22px;
    top: -3px;
    left: -2px;
    border: 2px solid #2a303c;
    border-radius: 7px;
    background: linear-gradient(180deg, #040717 1.55%, #121328 100%);
    transform: ${props => (props.publishModal ? 'translateY(-2px)' : '')};
  }
  input[type='checkbox']:checked:before {
    background: linear-gradient(180deg, #fb674b 1.55%, #fb674b 100%);
  }
  input[type='checkbox']:checked:after {
    content: '';
    display: block;
    width: 5px;
    height: 10px;
    // background: #fb674b,
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: ${props => (props.publishModal ? '0px' : '0')};
    // top: 0;
    left: 7px;
    left: ${props => (props.publishModal ? '7px' : '6px')};
  }
  @media (max-width: 767px) {
    gap: 14px;
    width: 100%;
    transform: translateX(2px);
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    gap: 12px;
  }

  &.inventory-machine-model {
    @media only screen and (min-width: 1224px) {
      /* width: 46%; */
      // gap: 12px;
    }
    gap: 15px;
  }

  input {
    width: unset !important;
  }
`

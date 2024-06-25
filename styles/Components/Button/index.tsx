import React from 'react'
import styled from 'styled-components'

interface IStyledButton extends React.HTMLProps<HTMLButtonElement> {
  variant: 'contained' | 'text' | 'outline' | string | undefined
}

const getButtonStyles = ({ variant }: IStyledButton) => {
  switch (variant) {
    case 'contained':
      return `
      background: #FB674B;
      color: #FFFFFF;
      border: none;
      `
    case 'outline':
      return `
      background: none;
      color: #ffffff;
      border: 1px solid #FB674B;
      `
    case 'text':
      return `
      background: #ffffff1e;
      color: #FFFFFF;
      border: none;
      `
    default:
      return `
      background: #ffffff1e;
      color: #FFFFFF;
      border: none;
  `
  }
}

export const StyledButton = styled.button<IStyledButton>`
  width: 100%;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  ${({ variant }) => variant && getButtonStyles({ variant, disabled: false })};
  padding: ${({ disabled }) => (disabled ? '5px' : '15px')} 36px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 62px;
  font-family: Inter;
  line-height: 24px;
`

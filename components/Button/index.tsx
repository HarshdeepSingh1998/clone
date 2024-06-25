import React from 'react'
import { IButtonProps } from 'components/Button/types'
import { StyledButton } from 'styles/Components/Button'

const Button: React.FC<IButtonProps> = ({
  label,
  variant,
  type,
  onClick,
  children,
  style,
  disable,
  className,
  padding,
  ...rest
}: IButtonProps) => (
  <StyledButton
    variant={variant}
    type={type}
    onClick={onClick}
    disabled={disable}
    {...rest}
    style={style}
    className={className}
    padding={padding}
  >
    {label}
    {children}
  </StyledButton>
)

Button.defaultProps = {
  variant: 'contained',
  onClick: () => null
}

export default Button

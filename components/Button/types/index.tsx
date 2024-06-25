import { CSSProperties, ReactElement, ReactNode } from 'react'

export interface IButtonProps {
  variant?: 'contained' | 'text' | 'outline' | string
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
  label: ReactElement | string
  children?: ReactNode
  disable?: boolean
  style?: CSSProperties
  className?: string
  padding?: string
}

import { ReactNode } from 'react'

export interface AuthLayoutInterface {
  children: ReactNode
  userRole?: string | undefined
  isPopUpVisible?: boolean
}

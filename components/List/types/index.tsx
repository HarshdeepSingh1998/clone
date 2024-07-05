import { ReactNode } from 'react'

export interface ListInterface {
  anchorEl: HTMLElement | null
  children: ReactNode
  handleClose: () => void
  //   setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
}

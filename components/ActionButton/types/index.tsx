import { Dispatch, SetStateAction } from 'react'

export interface ActionButtonProps {
  actionButtonData: any
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>
  anchorEl: HTMLElement | null
  disabled: boolean
  open: boolean
  handleClose: () => void
  setData?: () => void
}

import { Dispatch, SetStateAction } from 'react'

export interface FilterMenuListProps {
  actionButtonData: any
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>
  anchorEl: HTMLElement | null
  disabled: boolean
  open: boolean
  handleClose: () => void
  setData?: () => void
  inventoryData?: any
  id?: string
  icon?: any
}

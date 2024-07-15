import { MemberList } from '@/utils/ApiTypes/MemberList'
import { Dispatch, SetStateAction } from 'react'

export interface MemberDataInterface {
  showAddMemberModal: boolean
  memberList: MemberList[] | undefined
  handleLoadMoreClick: () => void
  addMember: () => void
  closeAddProductModal: () => void
  forceUpdate: boolean
  setForceUpdate: React.Dispatch<React.SetStateAction<boolean>>
  membersList: any
  anchorEl: HTMLElement | null
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>
  open: boolean
  handleClose: () => void
  actionButtonData: any[]
  setSelectedMember: Dispatch<SetStateAction<MemberList | undefined>>
}

export interface NoProductViewInterface {
  productList: MemberList[] | undefined
  data: any
  handleLoadMoreClick: () => void
}

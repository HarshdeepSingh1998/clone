/* eslint-disable no-unused-vars */
import { ContractList } from '@/utils/ApiTypes/ContractList'
import { Dispatch, SetStateAction } from 'react'

export interface ContractDataInterface {
  isModalOpen: boolean
  actionButtonData: any
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  openPdfViewer: boolean
  pdfUrl: string
  isEditModalOpen: boolean
  setIsEditModalOpen: Dispatch<SetStateAction<boolean>>
  showDeleteModel: boolean
  setShowDeleteModel: Dispatch<SetStateAction<boolean>>
  contractDetails: ContractList | undefined
  anchorEl: HTMLElement | null
  open: boolean
  page: number
  contractList: ContractList[] | undefined
  loadMoreButtonClicked: boolean
  forceUpdate: boolean
  openPdfView: (pdfURL: string) => void
  closePdfModal: () => void
  handleModal: () => void
  handleDeleteButton: () => void
  handleDeleteProduct: () => Promise<void>
  handleEditProduct: () => void
  handleLoadMoreClick: () => void
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>
  setContractDetails: Dispatch<SetStateAction<ContractList | undefined>>
  handleClose: () => void
  contractData: any
  setForceUpdate: Dispatch<SetStateAction<boolean>>
  setPage: Dispatch<SetStateAction<number>>
}
export interface NoProductViewInterface {
  productList: ContractList[] | undefined
  data: any
  handleLoadMoreClick: () => void
}

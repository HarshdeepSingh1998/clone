/* eslint-disable no-unused-vars */
import { ContractList } from '@/utils/ApiTypes/ContractList'

export interface ContractDataInterface {
  isModalOpen: boolean
  openPdfViewer: boolean
  pdfUrl: string
  isEditModalOpen: boolean
  showDeleteModel: boolean
  contractDetails: ContractList | undefined
  anchorEl: HTMLElement | null
  open: boolean
  page: number
  contractList: any[]
  loadMoreButtonClicked: boolean
  forceUpdate: boolean
  openPdfView: (pdfURL: string) => void
  handleClick: (
    event: React.MouseEvent<HTMLElement>,
    item: ContractList
  ) => void
  handleClose: () => void
  closePdfModal: () => void
  handleModal: () => void
  handleDeleteButton: () => void
  handleDeleteProduct: () => Promise<void>
  handleEditProduct: () => void
  handleLoadMoreClick: () => void
}

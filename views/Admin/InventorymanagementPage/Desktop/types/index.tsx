/* eslint-disable no-unused-vars */
import { UserState } from '@/store/userSlice'
import { ContractList } from '@/utils/ApiTypes/ContractList'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import { Dispatch, SetStateAction } from 'react'

export interface UseInventoryProductInterface {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  productList: ProductList[] | undefined
  loading: boolean
  searchBySerialNumber: string
  setSearchBySerialNumber: React.Dispatch<React.SetStateAction<string>>
  mutateDeleteAsync: any
  mutateAsync: any
  importCsvModalVisible: boolean
  setImportCsvModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  selectedProduct: string
  setSelectedProduct: React.Dispatch<React.SetStateAction<string>>
  contractValue: string
  setContractValue: React.Dispatch<React.SetStateAction<string>>
  modelName: string
  setModelName: React.Dispatch<React.SetStateAction<string>>
  assigneeName: string
  setAssigneeName: React.Dispatch<React.SetStateAction<string>>
  contractFilterClicked: boolean
  setContractFilterClicked: React.Dispatch<React.SetStateAction<boolean>>
  assignFilterClicked: boolean
  setAssignFilterClicked: React.Dispatch<React.SetStateAction<boolean>>
  selectedFiles: FileList | null
  setSelectedFiles: React.Dispatch<React.SetStateAction<FileList | null>>
  status: string
  setStatus: React.Dispatch<React.SetStateAction<string>>
  loadMoreButtonClicked: boolean
  setLoadMoreButtonClicked: React.Dispatch<React.SetStateAction<boolean>>
  forceUpdate: boolean
  setForceUpdate: React.Dispatch<React.SetStateAction<boolean>>
  isAssignModalVisible: boolean
  setIsAssignModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  contractList: ContractList[] | undefined
  setContractList: React.Dispatch<
    React.SetStateAction<ContractList[] | undefined>
  >
  selectedButton: {
    type: string
    label: string
    id: number
    disabled: boolean
  }[]
  setSelectedButton: React.Dispatch<
    React.SetStateAction<
      { type: string; label: string; id: number; disabled: boolean }[]
    >
  >
  productDetails: ProductList | undefined
  setProductDetails: React.Dispatch<
    React.SetStateAction<ProductList | undefined>
  >
  statusProduct: string
  setStatusProduct: React.Dispatch<React.SetStateAction<string>>
  fileUploadError: string
  setFileUploadError: React.Dispatch<React.SetStateAction<string>>
  selectedProductIds: string[]
  setSelectedProductIds: React.Dispatch<React.SetStateAction<string[]>>
  selectAll: boolean
  setSelectAll: React.Dispatch<React.SetStateAction<boolean>>
  bulkAssignModalVisible: boolean
  setBulkAssignModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  isLotModalOpen: boolean
  setIsLotModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  selectedContract: string | null
  setSelectedContract: React.Dispatch<React.SetStateAction<string | null>>
  selectedAssignee: string | null
  setSelectedAssignee: React.Dispatch<React.SetStateAction<string | null>>
  isModalOpen: ModalState
  toggleModal: (modalName: keyof ModalState) => void
  data: any
  handleLoadMoreClick: () => void
  handleHeaderCheckboxToggle: () => void
  handleCheckboxToggle: (productId: string) => void
  userData: UserState
  handleClose: () => void
  isPublishModalVisible: boolean
  showRevokeModel: boolean
  showDeleteModel: boolean
  showBulkDeleteModel: boolean
  showUnassignedModel: boolean
  actionButtonData: any[]
  anchorEl: HTMLElement | null
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>
  assignEl: HTMLElement | null
  contractEl: HTMLElement | null
  open: boolean
  assignOpen: boolean
  contractOpen: boolean
  setShowBulkDeleteModel: React.Dispatch<React.SetStateAction<boolean>>
  filterData: FilterData
  setAssignEl: Dispatch<SetStateAction<HTMLElement | null>>
  setContractEl: Dispatch<SetStateAction<HTMLElement | null>>
  handleViewProduct: (productId: string) => void
}

export type ModalState = {
  showDeleteModel: boolean
  showBulkDeleteModel: boolean
  showUnassignedModel: boolean
  showRevokeModel: boolean
  isPublishModalVisible: boolean
  isAssignModalVisible: boolean
  isLotModalOpen: boolean
  bulkAssignModalVisible: boolean
}

export interface NoProductViewInterface {
  productList: ProductList[] | undefined
  data: any
  handleLoadMoreClick: () => void
}

export interface FilterData {
  id: string
  open: boolean
  // setAnchorEl: (element: HTMLElement | null) => void
  anchorEl: HTMLElement | null
  actionButtonData: {
    key: string
    title: string
    handleClick: () => void
    selected: boolean
  }[]
  handleClose: () => void
}

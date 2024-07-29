/* eslint-disable no-unused-vars */
import { ProductList } from '@/utils/ApiTypes/ProductList'

export interface UserInventoryDataInterface {
  loading: boolean
  status: string
  setStatus: React.Dispatch<React.SetStateAction<string>>
  itemsPerPage: number
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
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
  productList: ProductList[] | undefined
  isPublishModalVisible: boolean
  setIsPublishModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  showRevokeModel: boolean
  setShowRevokeModel: React.Dispatch<React.SetStateAction<boolean>>
  productDetails: ProductList | undefined
  selectedProduct: string
  loadMoreButtonClicked: boolean
  forceUpdate: boolean
  data: any
  fetchData: () => void
  handleButtonClick: (i: number, label: string) => void
  handleLoadMoreClick: () => void
  handleRevokeButton: (productId: string, product: ProductList) => void
  selectedProductIds: string[]
  selectAll: boolean
  isLotModalOpen: boolean
  handleCheckboxToggle: (productId: string) => void
  handleHeaderCheckboxToggle: () => void
  handleLotModalClick: () => void
  totalLength: number | undefined
  setForceUpdate: React.Dispatch<React.SetStateAction<boolean>>
}

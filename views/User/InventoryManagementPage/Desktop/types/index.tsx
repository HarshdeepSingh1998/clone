/* eslint-disable no-unused-vars */
import { Dispatch, SetStateAction } from 'react'
import { UserState } from '@/store/userSlice'
import { SalesListInterface } from '@/utils/ApiTypes/getSales'
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
  productList: ProductList[] | SalesListInterface[] | undefined
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
  userData: UserState
  handlePublishButtonClick: (productId: string, product: ProductList) => void
  isProductList: (item: ProductList | SalesListInterface) => item is ProductList
  isSalesList: (
    item: ProductList | SalesListInterface
  ) => item is SalesListInterface
  setSelectedProductIds: Dispatch<SetStateAction<string[]>>
  setSelectedProduct: Dispatch<SetStateAction<string>>
}

export interface NoProductViewInterface {
  productList: ProductList[] | SalesListInterface[] | undefined
  data: any
  handleLoadMoreClick: () => void
  totalLength: number | undefined
}

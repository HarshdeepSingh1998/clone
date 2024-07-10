/* eslint-disable no-unused-vars */
import { ProductList } from '@/utils/ApiTypes/ProductList'
import { Dispatch, SetStateAction } from 'react'

export interface ProductDetailsInterface {
  productDetails: ProductList[] | undefined
  selectedProduct: ProductList | undefined
  index: number
  images: string[] | undefined
  selectedImageIndex: number
  handleClick: (i: number) => void
  sanitizeHTML: (html: string | undefined) => string | null | undefined
  setIndex: React.Dispatch<React.SetStateAction<number>>
  page?: string
  data: any
  setSelectedProduct: Dispatch<SetStateAction<ProductList | undefined>>
  fetchData: any
}

export interface ActionButtonInterface {
  actionButtonData: any
  showRevokeModel: boolean
  isPubishModalVisible: boolean
  isAssignModalVisible: boolean
  showDeleteModel: boolean
  descriptionDetails: any
  handleClose: () => void
}

export interface DetailsViewInterface {
  productDetailsData: ProductDetailsInterface
  actionButtonDetails: ActionButtonInterface
  open: boolean
  anchorEl: HTMLElement | null
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>
}

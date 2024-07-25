/* eslint-disable no-unused-vars */
import { UserState } from '@/store/userSlice'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import { StaticImageData } from 'next/image'
import { Dispatch, SetStateAction } from 'react'

export interface MarketPlaceDataInterface {
  toggleActive: string
  productList: ProductList[] | undefined
  switchActive: string
  hosting: boolean
  showEditProfileModal: boolean
  setShowEditProfileModal: React.Dispatch<React.SetStateAction<boolean>>
  showPlaceBidModal: boolean
  setShowPlaceBidModal: React.Dispatch<React.SetStateAction<boolean>>
  selectedImage: string | StaticImageData
  showBuyNowModal: boolean
  setShowBuyNowModal: React.Dispatch<React.SetStateAction<boolean>>
  handleLoadMoreClick: () => void
  handleBuyAndHostClick: () => void
  handleShopClick: () => void
  data: any
  userData: UserState
  setProductList: Dispatch<SetStateAction<ProductList[] | undefined>>
  setPage: Dispatch<SetStateAction<number>>
  setSwitchActive: Dispatch<SetStateAction<string>>
  setSelectedImage: Dispatch<SetStateAction<string | StaticImageData>>
  selectedMachine: string
  setSelectedMachine: Dispatch<SetStateAction<string>>
  productId: string | null
  setProductId: Dispatch<SetStateAction<string | null>>
  productDetailData: any
  placeBidClick: (productId: string) => void
  buyNowClick: (productId: string) => void
  closeAllModal: () => void
  clickGetQuote: (productId: string | undefined) => Promise<void>
  forceUpdate: boolean
  setForceUpdate: Dispatch<SetStateAction<boolean>>
}

export interface NoProductViewInterface {
  productList: ProductList[] | undefined
  data: any
  handleLoadMoreClick: () => void
}

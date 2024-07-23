import { UserState } from '@/store/userSlice'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import { StaticImageData } from 'next/image'

export interface MarketPlaceDataInterface {
  toggleActive: string
  productList: ProductList[] | undefined
  switchActive: string
  hosting: boolean
  showEditProfileModal: boolean
  setShowEditProfileModal: React.Dispatch<React.SetStateAction<boolean>>
  showPlaceModal: boolean
  setShowPlaceModal: React.Dispatch<React.SetStateAction<boolean>>
  selectedImage: string | StaticImageData
  showBuyNowModal: boolean
  setShowBuyNowModal: React.Dispatch<React.SetStateAction<boolean>>
  handleLoadMoreClick: () => void
  handleBuyAndHostClick: () => void
  handleShopClick: () => void
  data: any
  userData: UserState
}

import { MemberDetailsList } from '@/utils/ApiTypes/MemberDetailsList'

export interface MemberDetailsDataInterface {
  loading: boolean
  displayedRows: number
  active: string
  memberDetailsData: MemberDetailsList | undefined
  handleShowMoreRows: () => void
  setActive: React.Dispatch<React.SetStateAction<string>>
  data: any
}
export interface NoProductViewInterface {
  productList: MemberDetailsDataInterface
  data: any
  handleLoadMoreClick: () => void
}

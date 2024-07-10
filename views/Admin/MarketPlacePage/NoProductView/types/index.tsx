import { ContractList } from '@/utils/ApiTypes/ContractList'

export interface NoProductViewInterface {
  productList: ContractList[] | undefined
  data: any
  handleLoadMoreClick: () => void
}

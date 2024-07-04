import { ProductList } from '@/utils/ApiTypes/ProductList'

export interface NoProductViewInterface {
  productList: ProductList[] | undefined
  data: any
  handleLoadMoreClick: () => void
}

import { ProductList } from 'utils/ApiTypes/ProductList'

export interface MemberDetailsList {
  assignedProducts: ProductList[]
  email: string
  personalData: {
    name: string
    phone: string
    profileImage: string
    username: string
  }
  profileCompletion: number
  role: string
  termsAgreed: boolean
  id: string
}

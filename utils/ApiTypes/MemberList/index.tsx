import { ProductList } from 'utils/ApiTypes/ProductList'

export interface MemberList {
  assignedProducts: ProductList[]
  createdAt: string
  email: string
  isActive: boolean
  name: string
  phone: string
  role: string
  updatedAt: string
  username: string
  _id: string
  profileImage: string
}

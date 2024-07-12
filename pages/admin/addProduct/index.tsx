import AuthLayout from '@/components/AuthLayout'
import HeaderView from '@/views/Admin/AddProductPage/HeaderView'
import AddProductView from '@/views/Admin/AddProductPage/AddProductView'
import { AddProductContainer } from '@/styles/Pages/Admin/AddProductPage'
import useAddProduct from '@/utils/Customhooks/useAddProduct'

const AddProduct = () => {
  useAddProduct()
  return (
    <AuthLayout>
      <AddProductContainer>
        <HeaderView />
        <AddProductView />
      </AddProductContainer>
    </AuthLayout>
  )
}

export default AddProduct

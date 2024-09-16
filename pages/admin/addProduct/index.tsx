import AuthLayout from '@/components/AuthLayout'
import HeaderView from '@/views/Admin/AddProductPage/HeaderView'
import AddProductView from '@/views/Admin/AddProductPage/AddProductView'
import { AddProductContainer } from '@/styles/Pages/Admin/AddProductPage'

const AddProduct = () => {
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

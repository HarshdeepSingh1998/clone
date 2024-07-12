import AuthLayout from '@/components/AuthLayout'
import HeaderView from '@/views/Admin/AddProductPage/HeaderView'
import { AddProductContainer } from '@/styles/Pages/Admin/AddProductPage'

const AddProduct = () => {
  return (
    <AuthLayout>
      <AddProductContainer>
        <HeaderView />
      </AddProductContainer>
    </AuthLayout>
  )
}

export default AddProduct

import { useState, useEffect } from 'react'
import AuthLayout from '@/components/AuthLayout'
import HeaderView from '@/views/Admin/AddProductPage/HeaderView'
import AddProductView from '@/views/Admin/AddProductPage/AddProductView'
import { AddProductContainer } from '@/styles/Pages/Admin/AddProductPage'

const AddProduct = () => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

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

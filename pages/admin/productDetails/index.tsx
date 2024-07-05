import { useState } from 'react'
import withAuth from '@/utils/Authentication'
import { useProductDetails } from '@/utils/Customhooks/useProductDetails'
import useActionButton from '@/utils/Customhooks/useActionButton'
import AuthLayout from '@/components/AuthLayout'
import HeaderView from '@/views/Admin/ProductDetailsPage/HeaderView'
import DetailsView from '@/views/Admin/ProductDetailsPage/DetailsView'
import { ProductDetailsContainer } from '@/styles/Pages/Admin/ProductDetailsPage'

const ProductDetails = () => {
  const productDetailsData = useProductDetails()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const actionButtonDetails = useActionButton(
    productDetailsData.productDetails?.[productDetailsData?.index],
    setAnchorEl
  )
  console.log('product', productDetailsData)
  return (
    <AuthLayout>
      <ProductDetailsContainer>
        <HeaderView {...productDetailsData} />
        <DetailsView
          productDetailsData={productDetailsData}
          actionButtonDetails={actionButtonDetails}
          open={open}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
        />
        <HostingView />
      </ProductDetailsContainer>
    </AuthLayout>
  )
}

export default withAuth(ProductDetails, 'admin')

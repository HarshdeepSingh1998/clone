import withAuth from '@/utils/Authentication'
import { useProductDetails } from '@/utils/Customhooks/useProductDetails'
import useUserActionButton from '@/utils/Customhooks/useUserActionButton'
import AuthLayout from '@/components/AuthLayout'
import HeaderView from '@/views/User/ProductDetailsPage/HeaderView'
import DetailsView from '@/views/User/ProductDetailsPage/DetailsView'
import HostingView from '@/views/User/ProductDetailsPage/HostingView'
import DescriptionView from '@/views/User/ProductDetailsPage/DescriptionView'
import { ProductDetailsContainer } from '@/styles/Pages/User/ProductDetailsPage'

const ProductDetails = () => {
  const productDetailsData = useProductDetails()

  const actionButtonDetails = useUserActionButton(
    productDetailsData.productDetails?.[productDetailsData?.index]
  )

  return (
    <AuthLayout>
      <ProductDetailsContainer>
        <HeaderView productDetailsData={productDetailsData} />
        <DetailsView
          productDetailsData={productDetailsData}
          actionButtonDetails={actionButtonDetails}
        />
        <HostingView productDetailsData={productDetailsData} />
        <DescriptionView productDetailsData={productDetailsData} />
      </ProductDetailsContainer>
    </AuthLayout>
  )
}

export default withAuth(ProductDetails, 'user')

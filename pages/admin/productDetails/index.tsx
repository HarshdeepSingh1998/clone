import { useState } from 'react'
import withAuth from '@/utils/Authentication'
import { useProductDetails } from '@/utils/Customhooks/useProductDetails'
import useActionButton from '@/utils/Customhooks/useActionButton'
import AuthLayout from '@/components/AuthLayout'
import HeaderView from '@/views/Admin/ProductDetailsPage/HeaderView'
import DetailsView from '@/views/Admin/ProductDetailsPage/DetailsView'
import HostingView from '@/views/Admin/ProductDetailsPage/HostingView'
import DescriptionView from '@/views/Admin/ProductDetailsPage/DescriptionView'
import { ProductDetailsContainer } from '@/styles/Pages/Admin/ProductDetailsPage'
import RevokeModal from '@/components/RevokeModal'
import AssignModal from '@/components/AssignModal'

const ProductDetails = () => {
  const productDetailsData = useProductDetails()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const actionButtonDetails = useActionButton(
    productDetailsData.productDetails?.[productDetailsData?.index],
    setAnchorEl
  )
  console.log(
    'product',
    productDetailsData.selectedProduct,
    productDetailsData.productDetails?.[productDetailsData?.index]
  )
  return (
    <AuthLayout isPopUpVisible={actionButtonDetails?.showRevokeModel}>
      <ProductDetailsContainer>
        <HeaderView {...productDetailsData} />
        <DetailsView
          productDetailsData={productDetailsData}
          actionButtonDetails={actionButtonDetails}
          open={open}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
        />
        <HostingView productDetailsData={productDetailsData} />
        <DescriptionView productDetailsData={productDetailsData} />
        <RevokeModal
          setShowRevokeModel={actionButtonDetails?.setShowRevokeModel}
          isOpen={actionButtonDetails?.showRevokeModel}
          fetchData={productDetailsData.fetchData}
          selectedProduct={productDetailsData.selectedProduct}
          productDetails={
            productDetailsData.productDetails?.[productDetailsData?.index]
          }
        />
        <AssignModal
          selectedProduct={productDetailsData.selectedProduct}
          setSelectedProductId={() => {}}
          fetchData={productDetailsData.fetchData}
          setIsAssignModalVisible={actionButtonDetails.setIsAssignModalVisible}
          inventoryPage={false}
          isOpen={actionButtonDetails.isAssignModalVisible}
        />
      </ProductDetailsContainer>
    </AuthLayout>
  )
}

export default withAuth(ProductDetails, 'admin')

import { useState } from 'react'
import withAuth from '@/utils/Authentication'
import { useProductDetails } from '@/utils/Customhooks/useProductDetails'
import useActionButton from '@/utils/Customhooks/useActionButton'
import AuthLayout from '@/components/AuthLayout'
import RevokeModal from '@/components/RevokeModal'
import AssignModal from '@/components/AssignModal'
import DeleteModal from '@/components/DeleteModal'
import PublishModal from '@/components/PublishModal'
import HeaderView from '@/views/Admin/ProductDetailsPage/HeaderView'
import DetailsView from '@/views/Admin/ProductDetailsPage/DetailsView'
import HostingView from '@/views/Admin/ProductDetailsPage/HostingView'
import DescriptionView from '@/views/Admin/ProductDetailsPage/DescriptionView'
import { ProductDetailsContainer } from '@/styles/Pages/Admin/ProductDetailsPage'

const ProductDetails = () => {
  const productDetailsData = useProductDetails()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const actionButtonDetails = useActionButton(
    productDetailsData.productDetails?.[productDetailsData?.index],
    setAnchorEl
  )
  // console.log(
  //   'product',
  //   productDetailsData.selectedProduct,
  //   productDetailsData.productDetails?.[productDetailsData?.index]
  // )
  return (
    <AuthLayout
      isPopUpVisible={
        actionButtonDetails?.showRevokeModel ||
        actionButtonDetails?.isAssignModalVisible ||
        actionButtonDetails?.showDeleteModel ||
        actionButtonDetails?.isPubishModalVisible
      }
    >
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
        <DeleteModal
          setShowDeleteModel={actionButtonDetails?.setShowDeleteModel}
          isOpen={actionButtonDetails?.showDeleteModel}
          fetchData={productDetailsData.fetchData}
          productDetails={
            productDetailsData.productDetails?.[productDetailsData?.index]
          }
        />
        <PublishModal
          selectedProduct={productDetailsData.selectedProduct}
          fetchData={productDetailsData.fetchData}
          setIsPublishModalVisible={
            actionButtonDetails.setIsPublishModalVisible
          }
          inventoryPage={false}
          isOpen={actionButtonDetails.isPubishModalVisible}
        />
        {actionButtonDetails.isAssignModalVisible && (
          <AssignModal
            selectedProduct={productDetailsData.selectedProduct}
            fetchData={productDetailsData.fetchData}
            setIsAssignModalVisible={
              actionButtonDetails.setIsAssignModalVisible
            }
            inventoryPage={false}
            isOpen={actionButtonDetails.isAssignModalVisible}
          />
        )}
      </ProductDetailsContainer>
    </AuthLayout>
  )
}

export default withAuth(ProductDetails, 'admin')

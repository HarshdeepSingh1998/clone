import withAuth from '@/utils/Authentication'
import useScreenType from '@/utils/Customhooks/useScreenType'
import CsvModal from '@/components/CsvModal'
import AdminDeleteModal from '@/components/AdminDeleteModal'
import AuthLayout from '@/components/AuthLayout'
import AssignModal from '@/components/AssignModal'
import PublishModal from '@/components/PublishModal'
import AdminLotModal from '@/components/AdminLotModal'
import BulkDeleteModal from '@/components/BulkDeleteModal'
import AdminUnassignModal from '@/components/AdminUnassignModal'
import AdminRevokeModal from '@/components/AdminRevokeModal'
import { useInventoryProduct } from '@/utils/Customhooks/useInventoryProduct'
import InventoryManagementDesktop from '@/views/Admin/InventorymanagementPage/Desktop'
import InventoryManagementMobile from '@/views/Admin/InventorymanagementPage/Mobile'
import { InventorymanagementContainer } from '@/styles/Pages/Admin/InventorymanagementPage'

const InventoryManagement = () => {
  const inventoryData = useInventoryProduct()
  const { screenType } = useScreenType()
  return (
    <AuthLayout
      isPopUpVisible={
        inventoryData.importCsvModalVisible ||
        inventoryData.isModalOpen.showDeleteModel ||
        inventoryData.isModalOpen.showBulkDeleteModel ||
        inventoryData.isModalOpen.showUnassignedModel ||
        inventoryData.isModalOpen.showRevokeModel ||
        inventoryData.isModalOpen.isPublishModalVisible ||
        inventoryData.isModalOpen.isLotModalOpen ||
        inventoryData.isModalOpen.isAssignModalVisible
      }
    >
      <InventorymanagementContainer>
        {(screenType === 'desktop' || screenType === 'tab') && (
          <InventoryManagementDesktop
            inventoryData={inventoryData}
            screenType={screenType}
          />
        )}
        {screenType === 'mobile' && (
          <InventoryManagementMobile inventoryData={inventoryData} />
        )}
      </InventorymanagementContainer>
      <CsvModal
        isModalOpen={inventoryData.importCsvModalVisible}
        closeModal={inventoryData.setImportCsvModalVisible}
        inventoryData={inventoryData}
        setPage={inventoryData.setPage}
        setForceUpdate={inventoryData.setForceUpdate}
        selectedFiles={inventoryData.selectedFiles}
        setSelectedFiles={inventoryData.setSelectedFiles}
        handleFileChange={inventoryData.handleFileChange}
        fileUploadError={inventoryData.fileUploadError}
        setFileUploadError={inventoryData.setFileUploadError}
      />
      <AdminDeleteModal
        isOpen={inventoryData?.isModalOpen.showDeleteModel}
        setShowDeleteModel={inventoryData?.toggleModal}
        setPage={inventoryData.setPage}
        setForceUpdate={inventoryData.setForceUpdate}
        inventoryData={inventoryData}
      />
      <BulkDeleteModal
        isOpen={inventoryData?.isModalOpen.showBulkDeleteModel}
        setShowDeleteModel={inventoryData?.toggleModal}
        setPage={inventoryData.setPage}
        setForceUpdate={inventoryData.setForceUpdate}
        inventoryData={inventoryData}
      />
      <AdminUnassignModal
        isOpen={inventoryData?.isModalOpen.showUnassignedModel}
        setShowUnassignModel={inventoryData?.toggleModal}
        setPage={inventoryData.setPage}
        setForceUpdate={inventoryData.setForceUpdate}
        inventoryData={inventoryData}
      />
      <AdminRevokeModal
        isOpen={inventoryData?.isModalOpen.showRevokeModel}
        setShowRevokeModel={inventoryData?.toggleModal}
        setPage={inventoryData.setPage}
        setForceUpdate={inventoryData.setForceUpdate}
        inventoryData={inventoryData}
      />
      {inventoryData.isModalOpen.isPublishModalVisible && (
        <PublishModal
          selectedProduct={inventoryData.productDetails}
          fetchData={inventoryData.fetchData}
          setIsPublishModalVisible={inventoryData.toggleModal as any}
          inventoryPage={true}
          isOpen={inventoryData.isModalOpen.isPublishModalVisible}
          setPage={inventoryData.setPage}
          setSelectedProductIds={inventoryData.setSelectedProductIds}
          setForceUpdate={inventoryData.setForceUpdate}
          fetchContractData={inventoryData.fetchContractData}
          setSelectedProduct={inventoryData.setSelectedProduct}
        />
      )}
      {inventoryData.isModalOpen.isAssignModalVisible && (
        <AssignModal
          selectedProduct={inventoryData.productDetails}
          fetchData={inventoryData.fetchData}
          setIsAssignModalVisible={inventoryData.toggleModal as any}
          inventoryPage={true}
          isOpen={inventoryData.isModalOpen.isAssignModalVisible}
          setPage={inventoryData.setPage}
          setUserPage={inventoryData.setUserPage}
          setSelectedProductIds={inventoryData.setSelectedProductIds}
          setForceUpdate={inventoryData.setForceUpdate}
          fetchContractData={inventoryData.fetchContractData}
          setSelectedProduct={inventoryData.setSelectedProduct}
        />
      )}
      {inventoryData.isModalOpen.isLotModalOpen && (
        <AdminLotModal inventoryData={inventoryData} />
      )}
    </AuthLayout>
  )
}

export default withAuth(InventoryManagement, 'admin')

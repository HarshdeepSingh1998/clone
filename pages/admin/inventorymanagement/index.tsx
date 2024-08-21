import AuthLayout from '@/components/AuthLayout'
import withAuth from '@/utils/Authentication'
import useScreenType from '@/utils/Customhooks/useScreenType'
import { useInventoryProduct } from '@/utils/Customhooks/useInventoryProduct'
import InventoryManagementDesktop from '@/views/Admin/InventorymanagementPage/Desktop'
import InventoryManagementMobile from '@/views/Admin/InventorymanagementPage/Mobile'
import CsvModal from '@/components/CsvModal'
import { InventorymanagementContainer } from '@/styles/Pages/Admin/InventorymanagementPage'

const InventoryManagement = () => {
  const inventoryData = useInventoryProduct()
  const { screenType } = useScreenType()
  return (
    <AuthLayout isPopUpVisible={inventoryData.importCsvModalVisible}>
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
    </AuthLayout>
  )
}

export default withAuth(InventoryManagement, 'admin')

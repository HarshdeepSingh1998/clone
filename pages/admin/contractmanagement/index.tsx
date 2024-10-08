import withAuth from '@/utils/Authentication'
import useContractList from '@/utils/Customhooks/useContactList'
import useScreenType from '@/utils/Customhooks/useScreenType'
import AuthLayout from '@/components/AuthLayout'
import AddContract from '@/components/AddContract'
import Modal from '@/components/Modal'
import ContractDeleteModal from '@/components/ContractDeleteModal'
import ContractManagementDesktop from '@/views/Admin/ContractmanagementPage/Desktop'
import ContractManagementMobile from '@/views/Admin/ContractmanagementPage/Mobile'
import { ContractmanagementContainer } from '@/styles/Pages/Admin/contractmanagementPage'
import PdfViewer from '@/components/PdfViewer'

const ContractManagement = () => {
  //   const inventoryData = useInventoryProduct()
  const { screenType } = useScreenType()
  const contractData = useContractList()

  return (
    <AuthLayout
      isPopUpVisible={
        contractData.isModalOpen ||
        contractData.isEditModalOpen ||
        contractData.showDeleteModel ||
        contractData.openPdfViewer
      }
    >
      <ContractmanagementContainer>
        {(screenType === 'desktop' || screenType === 'tab') && (
          <ContractManagementDesktop contractData={contractData} />
        )}
        {screenType === 'mobile' && (
          <ContractManagementMobile contractData={contractData} />
        )}
      </ContractmanagementContainer>
      <AddContract
        isModalOpen={contractData.isModalOpen}
        isEditModalOpen={contractData.isEditModalOpen}
        closeModal={contractData.handleModal}
        contractDetails={contractData.contractDetails}
        setPage={contractData.setPage}
        setForceUpdate={contractData.setForceUpdate}
        setIsModalOpen={contractData.setIsModalOpen}
      />
      <ContractDeleteModal
        contractData={contractData}
        setShowDeleteModel={contractData.setShowDeleteModel}
        setForceUpdate={contractData.setForceUpdate}
        setPage={contractData.setPage}
        isOpen={contractData.showDeleteModel}
      />
      {contractData.openPdfViewer && (
        <Modal
          isOpen={contractData.openPdfViewer}
          hideModal={contractData.closePdfModal}
        >
          <PdfViewer
            url={contractData.pdfUrl}
            closePdfModal={contractData.closePdfModal}
          />
        </Modal>
      )}
    </AuthLayout>
  )
}

export default withAuth(ContractManagement, 'admin')

import withAuth from '@/utils/Authentication'
import useContractList from '@/utils/Customhooks/useContactList'
import useScreenType from '@/utils/Customhooks/useScreenType'
import AuthLayout from '@/components/AuthLayout'
import Modal from '@/components/Modal'
import ContractManagementDesktop from '@/views/User/ContractManagementPage/Desktop'
import ContractManagementMobile from '@/views/User/ContractManagementPage/Mobile'
import { ContractmanagementContainer } from '@/styles/Pages/User/ContractManagementPage'
import PdfViewer from '@/components/PdfViewer'

const ContractManagement = () => {
  //   const inventoryData = useInventoryProduct()
  const { screenType } = useScreenType()
  const contractData = useContractList()
  return (
    <AuthLayout isPopUpVisible={contractData.openPdfViewer}>
      <ContractmanagementContainer>
        {(screenType === 'desktop' || screenType === 'tab') && (
          <ContractManagementDesktop contractData={contractData} />
        )}
        {screenType === 'mobile' && (
          <ContractManagementMobile contractData={contractData} />
        )}
      </ContractmanagementContainer>
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

export default withAuth(ContractManagement, 'user')

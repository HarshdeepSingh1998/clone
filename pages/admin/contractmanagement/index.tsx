import withAuth from '@/utils/Authentication'
import useContractList from '@/utils/Customhooks/useContactList'
import useScreenType from '@/utils/Customhooks/useScreenType'
import AuthLayout from '@/components/AuthLayout'
import AddContract from '@/components/AddContract'
import ContractManagementDesktop from '@/views/Admin/ContractmanagementPage/Desktop'
import { ContractmanagementContainer } from '@/styles/Pages/Admin/contractmanagementPage'

const ContractManagement = () => {
  //   const inventoryData = useInventoryProduct()
  const { screenType } = useScreenType()
  const contractData = useContractList()
  return (
    <AuthLayout
      isPopUpVisible={contractData.isModalOpen || contractData.isEditModalOpen}
    >
      <ContractmanagementContainer>
        {(screenType === 'desktop' || screenType === 'tab') && (
          <ContractManagementDesktop contractData={contractData} />
        )}
        {/* {screenType === 'mobile' && <ContractManagementMobile />} */}
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
    </AuthLayout>
  )
}

export default withAuth(ContractManagement, 'admin')

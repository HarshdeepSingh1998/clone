import AuthLayout from '@/components/AuthLayout'
import withAuth from '@/utils/Authentication'
import useContractList from '@/utils/Customhooks/useContactList'
import useScreenType from '@/utils/Customhooks/useScreenType'
import ContractManagementDesktop from '@/views/Admin/ContractmanagementPage/Desktop'
import { ContractmanagementContainer } from '@/styles/Pages/Admin/contractmanagementPage'

const InventoryManagement = () => {
  //   const inventoryData = useInventoryProduct()
  const { screenType } = useScreenType()
  const contractData = useContractList()
  return (
    <AuthLayout>
      <ContractmanagementContainer>
        {(screenType === 'desktop' || screenType === 'tab') && (
          <ContractManagementDesktop contractData={contractData} />
        )}
        {/* {screenType === 'mobile' && <ContractManagementMobile />} */}
      </ContractmanagementContainer>
    </AuthLayout>
  )
}

export default withAuth(InventoryManagement, 'admin')

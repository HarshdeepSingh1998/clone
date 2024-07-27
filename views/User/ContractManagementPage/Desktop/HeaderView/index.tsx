import { ContractDataInterface } from 'views/User/ContractManagementPage/Desktop/types'
import Loader from '@/components/Loader'
import {
  HeaderContainer,
  TitleContainer
} from '@/styles/Views/User/ContractManagementPage/Desktop/Header'

const ContractManagementDesktop = ({
  contractData
}: {
  contractData: ContractDataInterface
}) => {
  return (
    <HeaderContainer>
      <TitleContainer>Contract Management</TitleContainer>
      {!contractData?.contractData && (
        <Loader blurredBackgroundtrue={!contractData?.contractData} />
      )}
    </HeaderContainer>
  )
}

export default ContractManagementDesktop

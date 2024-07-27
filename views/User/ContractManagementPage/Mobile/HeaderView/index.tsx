import { ContractDataInterface } from 'views/User/ContractManagementPage/Mobile/types'
import Loader from '@/components/Loader'
import {
  HeaderContainer,
  TitleContainer
} from '@/styles/Views/User/ContractManagementPage/Mobile/Header'

const HeaderView = ({
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

export default HeaderView

import { ContractDataInterface } from 'views/Admin/ContractmanagementPage/Mobile/types'
import Button from '@/components/Button'
import Loader from '@/components/Loader'
import CircleIcon from '@/assets/images/svg/CircleIcon'
import {
  HeaderContainer,
  TitleContainer,
  ButtonContainer
} from '@/styles/Views/Admin/ContractManagementPage/Mobile/Header'

const HeaderView = ({
  contractData
}: {
  contractData: ContractDataInterface
}) => {
  return (
    <HeaderContainer>
      <TitleContainer>Contract Management</TitleContainer>
      <ButtonContainer onClick={contractData.handleModal}>
        <Button type="button" variant="contained" label={''}>
          <CircleIcon cursor="pointer" /> {''}
          Add Product
        </Button>
      </ButtonContainer>
      {!contractData?.contractData && (
        <Loader blurredBackgroundtrue={!contractData?.contractData} />
      )}
    </HeaderContainer>
  )
}

export default HeaderView

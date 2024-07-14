import { SalesDataInterface } from 'views/Admin/SalesPage/Mobile/types'
import Loader from '@/components/Loader'
import {
  HeaderContainer,
  TitleContainer
} from '@/styles/Views/Admin/SalesPage/Mobile/Header'

const HeaderView = ({ salesData }: { salesData: SalesDataInterface }) => {
  return (
    <HeaderContainer>
      <TitleContainer>Sales</TitleContainer>
      {!salesData?.salesMemberList && (
        <Loader blurredBackgroundtrue={!salesData?.salesMemberList} />
      )}
    </HeaderContainer>
  )
}

export default HeaderView

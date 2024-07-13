import { SalesDataInterface } from 'views/Admin/SalesPage/Desktop/types'
import {
  HeaderContainer,
  TitleContainer
} from '@/styles/Views/Admin/SalesPage/Desktop/Header'
import Loader from '@/components/Loader'

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

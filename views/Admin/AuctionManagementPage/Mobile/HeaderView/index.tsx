import { AuctionManagementDataInterface } from 'views/Admin/AuctionManagementPage/Mobile/types'
import Loader from '@/components/Loader'
import {
  HeaderContainer,
  TitleContainer
} from '@/styles/Views/Admin/AuctionManagementPage/Mobile/Header'

const HeaderView = ({
  auctionManagementData
}: {
  auctionManagementData: AuctionManagementDataInterface
}) => {
  return (
    <HeaderContainer>
      <TitleContainer>Auction Management</TitleContainer>
      {!auctionManagementData?.auctionData && (
        <Loader blurredBackgroundtrue={!auctionManagementData?.auctionData} />
      )}
    </HeaderContainer>
  )
}

export default HeaderView

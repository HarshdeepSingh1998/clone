import { AuctionManagementDataInterface } from 'views/User/AuctionManagementPage/Desktop/types'
import Loader from '@/components/Loader'
import {
  HeaderContainer,
  TitleContainer
} from '@/styles/Views/User/AuctionManagementPage/Desktop/Header'

const HeaderView = ({
  auctionManagementData
}: {
  auctionManagementData: AuctionManagementDataInterface
}) => {
  return (
    <HeaderContainer>
      <TitleContainer>Auction & Bidding</TitleContainer>
      {!auctionManagementData?.auctionData && (
        <Loader blurredBackgroundtrue={!auctionManagementData?.auctionData} />
      )}
    </HeaderContainer>
  )
}

export default HeaderView

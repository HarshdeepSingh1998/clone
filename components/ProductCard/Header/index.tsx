import Image from 'next/image'
import { useRouter } from 'next/router'
import { endDate } from '@/utils/HelperFunctions/AuctionEndDate'
import { HeaderProps } from 'components/ProductCard/types'
import DEFAULT_PROFILE_URL from 'assets/images/images/default-profile.png'
import BasicMiningLogo from '@/assets/images/images/basic-mining-logo.png'
import {
  CardHeading,
  HeaderContainer,
  HeadingContent,
  ProfileImageContainer
} from 'styles/Components/ProductCard/Header'

const Header: React.FC<HeaderProps> = ({ data, userData }) => {
  const router = useRouter()
  const { pathname } = router
  const marketPlaceImage =
    data?.user?.profileImage && pathname === '/marketplace'
  const adminMarketPlaceImage =
    userData?.data?.id !== data?.user?._id && pathname !== '/marketplace'
  return (
    <HeaderContainer>
      <HeadingContent isProfileImage={Boolean(data?.user?.profileImage)}>
        {data?.auctionStartDate && (
          <CardHeading className="card-heading">
            {'Auction Ends:' + endDate(data?.auctionEndDate)}
          </CardHeading>
        )}
        {marketPlaceImage && (
          <ProfileImageContainer
            style={{ position: 'absolute', right: '0' }}
            className="marketplace"
          >
            <Image
              src={data?.user?.profileImage || DEFAULT_PROFILE_URL}
              alt="profile-image"
              width={30}
              height={30}
            />
          </ProfileImageContainer>
        )}
        {adminMarketPlaceImage && (
          <ProfileImageContainer
            style={{ position: 'absolute', right: '0' }}
            className="admin-marketplace"
            isAdmin={data?.user?.role === 'admin'}
          >
            <Image
              src={
                data?.user?.role === 'admin'
                  ? BasicMiningLogo
                  : data?.user?.profileImage || DEFAULT_PROFILE_URL
              }
              alt="profile-image"
              width={30}
              height={30}
            />
          </ProfileImageContainer>
        )}
      </HeadingContent>
    </HeaderContainer>
  )
}

export default Header

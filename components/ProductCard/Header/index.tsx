import Image from 'next/image'
import { endDate } from '@/utils/HelperFunctions/AuctionEndDate'
import { HeaderProps } from 'components/ProductCard/types'
import DEFAULT_PROFILE_URL from 'assets/images/images/default-profile.png'
import {
  CardHeading,
  HeaderContainer,
  HeadingContent,
  ProfileImageContainer
} from 'styles/Components/ProductCard/Header'

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <HeaderContainer>
      <HeadingContent isProfileImage={Boolean(data?.user?.profileImage)}>
        {data?.auctionStartDate && (
          <CardHeading className="card-heading">
            {'Auction Ends:' + endDate(data?.auctionEndDate)}
          </CardHeading>
        )}
        {data?.user?.profileImage && (
          <ProfileImageContainer style={{ position: 'absolute', right: '0' }}>
            <Image
              src={data?.user?.profileImage || DEFAULT_PROFILE_URL}
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

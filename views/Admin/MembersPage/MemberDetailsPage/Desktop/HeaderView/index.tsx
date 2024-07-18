import Image from 'next/image'
import { MemberDetailsDataInterface } from '@/views/Admin/MembersPage/MemberDetailsPage/Desktop/types'
import Loader from '@/components/Loader'
import DEFAULT_PROFILE_URL from 'assets/images/images/default-profile.png'
import {
  HeaderContainer,
  HeaderContent,
  ImageContainer,
  TextContainer,
  CustomerNameContainer,
  ContactNumberContainer
} from '@/styles/Views/Admin/MembersPage/Desktop/Header'

const HeaderView = ({
  memberDetailsData
}: {
  memberDetailsData: MemberDetailsDataInterface
}) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <ImageContainer className="member-details">
          <Image
            src={
              memberDetailsData?.memberDetailsData?.personalData
                ?.profileImage || DEFAULT_PROFILE_URL
            }
            alt="customer"
            width={80}
            height={80}
            style={{ borderRadius: '50px' }}
          />
        </ImageContainer>
        <TextContainer>
          <CustomerNameContainer className="member-details">
            {memberDetailsData?.memberDetailsData?.personalData?.name ||
              memberDetailsData?.memberDetailsData?.personalData?.username ||
              memberDetailsData?.memberDetailsData?.email.split('@')[0]}
          </CustomerNameContainer>
          <ContactNumberContainer className="member-details">
            {memberDetailsData?.memberDetailsData?.personalData?.phone || '--'}{' '}
            | {memberDetailsData?.memberDetailsData?.email}
          </ContactNumberContainer>
        </TextContainer>
      </HeaderContent>
      {!memberDetailsData?.memberDetailsData && (
        <Loader blurredBackgroundtrue={!memberDetailsData?.memberDetailsData} />
      )}
    </HeaderContainer>
  )
}

export default HeaderView

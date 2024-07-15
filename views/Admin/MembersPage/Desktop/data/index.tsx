import Image from 'next/image'
import router from 'next/router'
import ActionButton from '@/components/ActionButton'
import { MemberDataInterface } from 'views/Admin/MembersPage/Desktop/types'
import DEFAULT_PROFILE_URL from 'assets/images/images/default-profile.png'
import {
  ImageContainer,
  ImageContent,
  TextContainer,
  CustomerNameContainer,
  NumberContainer,
  EmailContainer,
  ProductContainer
} from '@/styles/Views/Admin/MembersPage/Desktop/Data'

export const generateTableData = (memberData: MemberDataInterface) => {
  return (memberData.memberList || []).map(data => ({
    members: (
      <ImageContainer
        onClick={() =>
          router.push(`/admin/members/memberDetails?memberId=${data._id}`)
        }
      >
        <ImageContent className="customer">
          <Image
            src={data?.profileImage || DEFAULT_PROFILE_URL}
            alt="customer"
            width={40}
            height={40}
            style={{ borderRadius: '50px' }}
          />
        </ImageContent>
        <TextContainer>
          <CustomerNameContainer>
            {data?.name || data?.username || data?.email.split('@')[0]}
          </CustomerNameContainer>
          <NumberContainer>{data?.phone}</NumberContainer>
        </TextContainer>
      </ImageContainer>
    ),
    email: <EmailContainer>{data?.email}</EmailContainer>,
    product: (
      <ProductContainer>
        {data?.assignedProducts?.length || 'N/A'}
      </ProductContainer>
    ),
    action: (
      <ActionButton
        open={memberData.open}
        setAnchorEl={memberData.setAnchorEl}
        anchorEl={memberData.anchorEl}
        disabled={false}
        actionButtonData={memberData.actionButtonData}
        handleClose={memberData.handleClose}
        setData={() => memberData.setSelectedMember(data)}
      />
    )
  }))
}

export const columns = [
  { id: 'members', label: 'Members' },
  { id: 'email', label: 'Email' },
  { id: 'product', label: 'Acquired Products' },
  { id: 'action', label: 'Action' }
]

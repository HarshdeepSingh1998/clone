import Image from 'next/image'
import router from 'next/router'
import { Tooltip } from '@mui/material'
import { MemberDataInterface } from 'views/Admin/MembersPage/Mobile/types'
import ActionButton from '@/components/ActionButton'
import DEFAULT_PROFILE_URL from 'assets/images/images/default-profile.png'
import {
  CustomerNameContainer,
  ImageContainer,
  ImageContent,
  NumberContainer,
  TextContainer
} from '@/styles/Views/Admin/MembersPage/Mobile/Data'
import { MemberList } from '@/utils/ApiTypes/MemberList'

export const generateTableData = (
  memberData: MemberDataInterface
): TableData[] => {
  return (memberData.memberList || []).map(data => ({
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
    ),
    email: (
      <Tooltip title={data?.email} placement="top-end">
        <div>
          {data?.email
            ? data?.email?.length > 15
              ? `${data?.email?.substring(0, 15)}...`
              : `${data?.email}` || 'N/A'
            : 'N/A'}
        </div>
      </Tooltip>
    ),
    product: (
      <Tooltip title={data?.assignedProducts?.length}>
        <div>
          {data?.assignedProducts?.length && data?.assignedProducts?.length > 5
            ? `${data?.assignedProducts?.length}`
            : data?.assignedProducts?.length || 'N/A'}
        </div>
      </Tooltip>
    )
  }))
}

export const columns = [
  {
    id: 'action',
    label: ({ memberData }: { memberData: MemberList }) => (
      <ImageContainer
        onClick={() =>
          router.push(`/admin/members/memberDetails?memberId=${memberData._id}`)
        }
      >
        <ImageContent className="customer">
          <Image
            src={memberData?.profileImage || DEFAULT_PROFILE_URL}
            alt="customer"
            width={40}
            height={40}
            style={{ borderRadius: '50px' }}
          />
        </ImageContent>
        <TextContainer>
          <CustomerNameContainer>
            {memberData?.name ||
              memberData?.username ||
              memberData?.email.split('@')[0]}
          </CustomerNameContainer>
          <NumberContainer>{memberData?.phone}</NumberContainer>
        </TextContainer>
      </ImageContainer>
    )
  },
  { id: 'email', label: 'Email' },
  { id: 'product', label: 'Acquired Products' }
]

export type TableData = {
  action: JSX.Element
  email: JSX.Element
  product: JSX.Element
}

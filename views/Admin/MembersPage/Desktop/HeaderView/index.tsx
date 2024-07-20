import { MemberDataInterface } from 'views/Admin/MembersPage/Desktop/types'
import Button from '@/components/Button'
import Loader from '@/components/Loader'
import CircleIcon from '@/assets/images/svg/CircleIcon'
import {
  HeaderContainer,
  TitleContainer,
  ButtonContainer
} from '@/styles/Views/Admin/MembersPage/Desktop/Header'

const HeaderView = ({ memberData }: { memberData: MemberDataInterface }) => {
  return (
    <HeaderContainer>
      <TitleContainer>Members</TitleContainer>
      <ButtonContainer onClick={memberData.addMember}>
        <Button type="button" variant="contained" label={''}>
          <CircleIcon cursor="pointer" /> {''}
          Add Member
        </Button>
      </ButtonContainer>
      {!memberData?.membersList && (
        <Loader blurredBackgroundtrue={!memberData?.membersList} />
      )}
    </HeaderContainer>
  )
}

export default HeaderView

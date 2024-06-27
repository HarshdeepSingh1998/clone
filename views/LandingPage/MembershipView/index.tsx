import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button'
import useScreenType from '@/utils/Customhooks/useScreenType'
import { MembershipDataType } from '@/utils/LandingPageContent/Membership/types'
import Clock from 'assets/images/images/clock.png'
import {
  MiningAccountContainer,
  MiningAccountContent,
  ImageContainer,
  MiningAccountHeader,
  ButtonContainer
} from '@/styles/Views/LandingPage/Membership'

interface MembershipViewType {
  membershipData: MembershipDataType
}

const MembershipView: React.FC<MembershipViewType> = ({ membershipData }) => {
  const { screenType } = useScreenType()

  return (
    <MiningAccountContainer>
      <MiningAccountContent>
        <ImageContainer>
          <div></div>
          <div></div>
        </ImageContainer>
        <MiningAccountHeader>
          {screenType === 'mobile' ? (
            <span>
              <Image src={Clock} alt="clock" />
              {membershipData.heading}
            </span>
          ) : (
            <span>
              {membershipData.heading.split('Mining')[0]}
              <Image src={Clock} alt="clock" />
              {membershipData.heading.split('Mining')[1]}
            </span>
          )}
        </MiningAccountHeader>
        <ButtonContainer>
          <Link href="/signup">
            <Button
              type="submit"
              variant="contained"
              label={membershipData.buttonText}
            />
          </Link>
        </ButtonContainer>
      </MiningAccountContent>
    </MiningAccountContainer>
  )
}

export default MembershipView

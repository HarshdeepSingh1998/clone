import Link from 'next/link'
import { MinerSellerDataType } from '@/utils/LandingPageContent/MinerSeller/types'
import FanAnimation from '@/components/FanAnimation'
import Button from '@/components/Button'
import StepperComponent from '@/components/Stepper'
import {
  SellerSectionContainer,
  LowerFanContainer,
  UpperFanContainer,
  SellerMainSection,
  SellerSectionHeading,
  StepperContainer,
  SellerButton
} from '@/styles/Views/LandingPage/MinerSeller'

interface MinerSellerViewProps {
  minerSellerData: MinerSellerDataType
}

const MinerSellerView: React.FC<MinerSellerViewProps> = ({
  minerSellerData
}) => {
  return (
    <SellerSectionContainer>
      <UpperFanContainer>
        <FanAnimation />
      </UpperFanContainer>
      <LowerFanContainer>
        <FanAnimation />
      </LowerFanContainer>
      <SellerMainSection>
        <SellerSectionHeading>
          Basic Mining Auction
          <span>{minerSellerData.heading}</span>
          <span>{minerSellerData.subheading}</span>
        </SellerSectionHeading>
        <StepperContainer>
          <StepperComponent steps={minerSellerData.steps} />
        </StepperContainer>
        <SellerButton>
          {' '}
          <Link href="/signup">
            <Button type="submit" variant="contained" label="Get started Now" />
          </Link>
        </SellerButton>
      </SellerMainSection>
    </SellerSectionContainer>
  )
}

export default MinerSellerView

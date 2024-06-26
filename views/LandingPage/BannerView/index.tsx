import Link from 'next/link'
import Button from '@/components/Button'
import FanAnimation from '@/components/FanAnimation'
import { bannerDataType } from '@/utils/LandingPageContent/Banner/types'
import {
  TitleContainer,
  Title,
  ButtonContainer,
  ButtonStyle,
  BannerContentContainer,
  ButtonWrapper,
  ButtonPricingStyle,
  UpperFanWrapper,
  BottomFanWrapper,
  StartEarningText,
  BitcoinText,
  BasicText,
  MiningText,
  SubTitle,
  ImageContainer
} from 'styles/Views/LandingPage/Banner'

interface BannerViewProps {
  onSeePricingClick: () => void
  bannerData: bannerDataType
}

const BannerView: React.FC<BannerViewProps> = ({
  onSeePricingClick,
  bannerData
}) => {
  const splitHeading = bannerData.heading.split(' ')
  const startEarningHeadingText = splitHeading.slice(0, 2).join(' ')
  const bitcoinHeadingText = splitHeading[2]
  const basicHeadingText = splitHeading.slice(3, 5).join(' ')
  const miningHeadingText = splitHeading[5]

  return (
    <BannerContentContainer>
      <TitleContainer>
        <Title>
          <div>
            <StartEarningText>{startEarningHeadingText}</StartEarningText>
            <BitcoinText>&nbsp;{bitcoinHeadingText}</BitcoinText>
          </div>
          <BasicText>&nbsp;{basicHeadingText}</BasicText>
          <MiningText>&nbsp;{miningHeadingText}</MiningText>
        </Title>

        <SubTitle>{bannerData.subheading}</SubTitle>
        <ButtonContainer>
          <ButtonWrapper>
            <Link href={'/signup'}>
              <ButtonStyle>
                <Button
                  type="button"
                  variant="contained"
                  label="Get Started Today"
                />
              </ButtonStyle>
            </Link>
            <ButtonPricingStyle>
              <Button
                type="button"
                label="See Pricing"
                onClick={onSeePricingClick}
              />
            </ButtonPricingStyle>
          </ButtonWrapper>
        </ButtonContainer>
      </TitleContainer>

      <ImageContainer>
        <UpperFanWrapper>
          <FanAnimation />
        </UpperFanWrapper>
        <BottomFanWrapper>
          <FanAnimation />
          <FanAnimation />
        </BottomFanWrapper>
      </ImageContainer>
    </BannerContentContainer>
  )
}

export default BannerView

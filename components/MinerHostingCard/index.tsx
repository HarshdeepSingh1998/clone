import { useRouter } from 'next/router'
import { MinerHostingCardProps } from 'components/MinerHostingCard/types'
import Button from '@/components/Button'
import Close from '@/assets/images/svg/Close'
import {
  ButtonSection,
  FeatureSection,
  FeatureSectionRow,
  MembershipText,
  MinerHostingCard,
  MinerHostingCardHeader,
  MinerHostingCardHeading,
  MinerHostingCardImage,
  MinerHostingTitle,
  PopularCard
} from '@/styles/Components/MinerHostingCard'

const MinerHostingCardComponent: React.FC<MinerHostingCardProps> = ({
  data,
  i,
  active,
  setActive
}) => {
  const router = useRouter()
  const handleButtonClick = (text: string) => {
    if (text === 'Contact Us') {
      router.push('/contact')
    } else if (text === 'Shop Miners') {
      router.push('/signup')
    } else {
      router.push('/signup')
    }
  }

  return (
    <MinerHostingCard
      key={i}
      isSelected={active === i ? true : false}
      onClick={() => setActive(i)}
    >
      <MinerHostingCardHeading>
        <MinerHostingCardHeader>
          <MinerHostingCardImage>
            {data.headerIcon()}
            {data.headerTitle}
          </MinerHostingCardImage>
          <span style={{ display: 'flex' }}>
            {data.headerSubTitle}
            {i === 1 && <PopularCard>Popular</PopularCard>}
          </span>
        </MinerHostingCardHeader>
        <MinerHostingTitle>
          {data.rate}
          <span>{data.unit}</span>
        </MinerHostingTitle>
      </MinerHostingCardHeading>
      <MembershipText className="membership">{data?.membership}</MembershipText>
      <FeatureSection>
        {data.list.map(data => (
          <>
            <FeatureSectionRow isCrossIcon={data.icon === Close}>
              {data.icon()}
              {data.text}
            </FeatureSectionRow>
          </>
        ))}
      </FeatureSection>
      <ButtonSection>
        {' '}
        {active === i ? (
          <Button
            type="submit"
            variant="contained"
            label={data?.buttonText}
            onClick={() => {
              handleButtonClick(data?.buttonText)
            }}
          />
        ) : (
          <Button
            type="submit"
            variant="outline"
            label={data?.buttonText}
            onClick={() => {
              handleButtonClick(data?.buttonText)
            }}
          />
        )}
      </ButtonSection>
    </MinerHostingCard>
  )
}

export default MinerHostingCardComponent

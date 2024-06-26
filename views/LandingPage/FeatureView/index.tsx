import Image from 'next/image'
import { FeaturesDataType } from '@/utils/LandingPageContent/Features/types'
import {
  CardImage,
  Container,
  FeatureCard,
  FeatureCardContainer,
  FeatureContainer,
  FeatureContentSection,
  FeatureHeadingSection,
  FeatureSection,
  FeatureSubHeading
} from 'styles/Views/LandingPage/Feature'

interface FeatureProps {
  featuresData: FeaturesDataType[]
}

const FeatureView: React.FC<FeatureProps> = ({ featuresData }) => {
  return (
    <FeatureContainer>
      <FeatureSection>
        <FeatureHeadingSection>
          {`OUR FEATURES`}
          <FeatureSubHeading>
            {`Maximize your bitcoin earnings.`}
            <span>
              Our best in class service ensures your investment is optimized for
              profitability.
            </span>
          </FeatureSubHeading>
        </FeatureHeadingSection>
        <FeatureContentSection>
          <FeatureCardContainer>
            <FeatureCard>
              {featuresData?.map((data, i) => (
                <Container key={i}>
                  <CardImage>
                    <Image src={data?.img} alt="feature-section" />
                  </CardImage>
                  {data?.title}
                </Container>
              ))}
            </FeatureCard>
          </FeatureCardContainer>
        </FeatureContentSection>
      </FeatureSection>
    </FeatureContainer>
  )
}

export default FeatureView

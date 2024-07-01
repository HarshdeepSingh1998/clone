import { useState } from 'react'
import { useRouter } from 'next/router'
import useScreenType from '@/utils/Customhooks/useScreenType'
import { HostingCardProps } from 'components/HostingCard/types'
import Button from 'components/Button'
import {
  HostingCardContainer,
  HeadingContainer,
  ImageContainer,
  CardTextContainer,
  CardLowerTextContainer,
  CardUpperTextContainer,
  ButtonContainer
} from '@/styles/Components/HostingCard'

const HostingCard: React.FC<HostingCardProps> = ({ data, index }) => {
  const router = useRouter()
  const [selectedCard, setSelectedCard] = useState(null)
  const { screenType } = useScreenType()
  const handleCardClick = (index: any) => {
    setSelectedCard(index)
  }

  return (
    <HostingCardContainer
      onClick={() => handleCardClick(index)}
      isSelected={selectedCard === index}
      screenType={screenType}
    >
      <HeadingContainer>{data.heading}</HeadingContainer>
      <ImageContainer index={index} screenType={screenType}>
        {index === 1 ? (
          <div>
            {data.image()}
            {data.image()}
          </div>
        ) : (
          <div>{data.image()}</div>
        )}
      </ImageContainer>

      <CardTextContainer>
        <CardUpperTextContainer>
          <span>
            {data.title}
            <span>/miner</span>
          </span>
        </CardUpperTextContainer>
        <CardLowerTextContainer>
          Number of Units<span>{data.units}</span>
        </CardLowerTextContainer>
      </CardTextContainer>

      <ButtonContainer>
        <Button
          type="submit"
          variant="contained"
          label={data.buttonText}
          onClick={() => router.push('/signup')}
        />
      </ButtonContainer>
    </HostingCardContainer>
  )
}

export default HostingCard

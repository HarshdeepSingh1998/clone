import { useState } from 'react'
import { card } from '@/utils/HostingPageContent/Card'
import HostingCard from '@/components/HostingCard'
import {
  CardViewContainer,
  CardViewContent,
  CardContainer
} from '@/styles/Views/HostingPage/Card'

const CardView = () => {
  const [selectedCard, setSelectedCard] = useState(null)
  const handleCardClick = (index: any) => {
    setSelectedCard(index)
  }

  return (
    <CardViewContainer>
      <CardViewContent>
        <CardContainer>
          {card.map((data, index) => (
            <HostingCard
              data={data}
              index={index}
              key={index}
              handleCardClick={handleCardClick}
              selectedCard={selectedCard}
            />
          ))}
        </CardContainer>
      </CardViewContent>
    </CardViewContainer>
  )
}

export default CardView

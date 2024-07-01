import { card } from '@/utils/HostingPageContent/Card'
import HostingCard from '@/components/HostingCard'
import {
  CardViewContainer,
  CardViewContent,
  CardContainer
} from '@/styles/Views/HostingPage/Card'

const CardView = () => {
  return (
    <CardViewContainer>
      <CardViewContent>
        <CardContainer>
          {card.map((data, index) => (
            <HostingCard data={data} index={index} key={index} />
          ))}
        </CardContainer>
      </CardViewContent>
    </CardViewContainer>
  )
}

export default CardView

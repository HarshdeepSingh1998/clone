/* eslint-disable no-unused-vars */
import { CardType } from '@/utils/HostingPageContent/Card/types'

export interface HostingCardProps {
  data: CardType
  index: number
  handleCardClick: (index: any) => void
  selectedCard: null
}

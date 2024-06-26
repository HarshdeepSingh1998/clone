import { BuyAndHostDataType } from '@/utils/LandingPageContent/BuyAndHost/types'

export interface BuyAndHostCardProps {
  data: BuyAndHostDataType
  checked?: boolean
  activeIndex: number
  i: number
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  length: number
}

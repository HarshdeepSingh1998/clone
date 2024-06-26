import { MinerHostingDataType } from '@/utils/LandingPageContent/MinerHosting/types'

export interface MinerHostingCardProps {
  data: MinerHostingDataType
  i: number
  active: number
  setActive: Dispatch<SetStateAction<number>>
}

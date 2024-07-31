import { UsePublishDataInterface } from '@/utils/Customhooks/usePublishModal/types'
import { MarketPlaceDataInterface } from '@/views/User/MarketPlacePage/types'

export interface SwitchProps {
  publishModalData?: UsePublishDataInterface
  className?: string
  startvalue: string
  endvalue: string
  marketplaceData?: MarketPlaceDataInterface
  title?: string
  userPublishModalData?: {
    toggleValue: string
    handleToggleChange: () => void
  }
  userLotModalData?: {
    toggleValue: string
    handleToggleChange: () => void
  }
}

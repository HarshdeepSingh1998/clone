import { ContractList } from '@/utils/ApiTypes/ContractList'

export interface UsePublishDataInterface {
  contractList: ContractList[] | undefined
  contractTypeOptions: { label: string; value: string }[] | undefined
  toggleValue: string
  calenderClick: boolean
  setCalenderClick: React.Dispatch<React.SetStateAction<boolean>>
  checkboxSelected: boolean
  hostingType: string
  auctionDate: string
  contract: string
  askPrice: string
  auctionType: string
  handleToggleChange: () => void
  handleHeaderCheckboxToggle: () => void
}

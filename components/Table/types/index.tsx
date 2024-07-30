import { UserInventoryDataInterface } from '@/views/User/InventoryManagementPage/Desktop/types'

/* eslint-disable no-unused-vars */
export interface TableInterface {
  columns: {
    id: string
    label: string
    icon?: JSX.Element
    renderHeader?: (inventoryData?: UserInventoryDataInterface) => JSX.Element
  }[]
  data: any
  openStates?: any[]
  openData?: {
    closedPrice: JSX.Element
    depositPrice: JSX.Element
    setupPrice: JSX.Element
  }[]
  filtersData?: any
  inventoryData?: UserInventoryDataInterface
}

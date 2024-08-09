/* eslint-disable no-unused-vars */
export interface TableInterface {
  columns: {
    id: string
    label: string
    icon?: any
    renderHeader?: (inventoryData?: any) => JSX.Element
  }[]
  data: any
  openStates?: any[]
  openData?: {
    closedPrice: JSX.Element
    depositPrice: JSX.Element
    setupPrice: JSX.Element
  }[]
  filtersData?: any
  inventoryData?: any
}

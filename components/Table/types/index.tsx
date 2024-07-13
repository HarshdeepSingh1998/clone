export interface TableInterface {
  columns: {
    id: string
    label: string
    icon?: JSX.Element
  }[]
  data: any
  openStates?: any[]
  openData?: {
    closedPrice: JSX.Element
    depositPrice: JSX.Element
    setupPrice: JSX.Element
  }[]
  filtersData?: any
}

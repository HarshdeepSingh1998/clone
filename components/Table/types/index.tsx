export interface TableInterface {
  columns: {
    id: string
    label: string
  }[]
  data: any
  openStates?: any[]
  openData?: {
    closedPrice: JSX.Element
    depositPrice: JSX.Element
    setupPrice: JSX.Element
  }[]
}

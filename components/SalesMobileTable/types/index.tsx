/* eslint-disable no-unused-vars */
export interface SalesMobileTableProps {
  openData: {
    open: JSX.Element
  }[]
  openStates: any[]
  handleToggle: (index: number) => void
  salesListData: {
    machine: JSX.Element
    content: JSX.Element
  }[]
}

import { SalesListInterface } from '@/utils/ApiTypes/getSales'

/* eslint-disable no-unused-vars */
export interface SalesDataInterface {
  itemsPerPage: number
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  loadMoreButtonClicked: boolean
  setLoadMoreButtonClicked: React.Dispatch<React.SetStateAction<boolean>>
  showPaymentConformationModal: boolean
  setPaymentConformationModal: React.Dispatch<React.SetStateAction<boolean>>
  selectedButton: Array<{
    type: string
    label: string
    id: number
    disabled: boolean
  }>
  setSelectedButton: React.Dispatch<
    React.SetStateAction<
      Array<{ type: string; label: string; id: number; disabled: boolean }>
    >
  >
  forceUpdate: boolean
  setForceUpdate: React.Dispatch<React.SetStateAction<boolean>>
  salesList: SalesListInterface[] | undefined
  setSalesList: React.Dispatch<
    React.SetStateAction<SalesListInterface[] | undefined>
  >
  type: string
  setType: React.Dispatch<React.SetStateAction<string>>
  status: string | boolean
  setStatus: React.Dispatch<React.SetStateAction<string | boolean>>
  screenType: string
  setScreenType: React.Dispatch<React.SetStateAction<string>>
  anchorEl: HTMLElement | null
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
  open: boolean
  salesMemberList: any
  fetchSalesData: () => void
  handleLoadMoreClick: () => void
  handleButtonClick: (i: number) => void
  selectedStatus: string | null
  setSelectedStatus: React.Dispatch<React.SetStateAction<string | null>>
  handlePendingButton: () => void
  handleCompletedButton: () => void
  handleAllButton: () => void
  productId: string
  setProductId: React.Dispatch<React.SetStateAction<string>>
  handlePaymentReceived: (id: string) => void
  handleClose: () => void
  actionButtonData: any
}

export interface NoProductViewInterface {
  productList: SalesListInterface[] | undefined
  data: any
  handleLoadMoreClick: () => void
}

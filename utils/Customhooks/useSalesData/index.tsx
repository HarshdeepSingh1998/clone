import { useState, useEffect } from 'react'
import useGet from '@/hooks/useGet'
import { SalesListInterface } from '@/utils/ApiTypes/getSales'
import { SalesDataInterface } from '@/views/Admin/SalesPage/Desktop/types'

const useSalesData = (): SalesDataInterface => {
  const itemsPerPage = 10
  const [page, setPage] = useState(1)
  const [loadMoreButtonClicked, setLoadMoreButtonClicked] = useState(false)
  const [showPaymentConformationModal, setPaymentConformationModal] =
    useState(false)
  const [selectedButton, setSelectedButton] = useState([
    { type: 'contained', label: 'All', id: 0, disabled: true },
    { type: 'outline', label: 'Assigned', id: 1, disabled: false },
    { type: 'outline', label: 'Purchased', id: 2, disabled: false }
  ])
  const [actionButtonData, setActionButtonData] = useState<any>([])
  const [forceUpdate, setForceUpdate] = useState(false)
  const [salesList, setSalesList] = useState<SalesListInterface[] | undefined>(
    undefined
  )
  const [productId, setProductId] = useState('')
  const [type, setType] = useState<string>('All')
  const [status, setStatus] = useState<string | boolean>('')
  const [screenType, setScreenType] = useState('desktop')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const { data: salesMemberList, refetch: fetchSalesData } = useGet(
    'salesMemberList',
    `/api/getSales?page=${page}&limit=${itemsPerPage}&isPending=${status}&type=${type === 'All' ? '' : type === 'Assigned' ? 'Assign' : 'Purchase'}`,
    true
  )

  useEffect(() => {
    fetchSalesData()
  }, [fetchSalesData, page, forceUpdate, status])

  useEffect(() => {
    const list = salesMemberList?.data?.results || []
    if (loadMoreButtonClicked) {
      setSalesList(prev => [...(prev || []), ...list])
      setLoadMoreButtonClicked(false)
    } else {
      setSalesList(list)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [salesMemberList])

  const handleLoadMoreClick = () => {
    setPage(prev => prev + 1)
    setLoadMoreButtonClicked(true)
  }

  const handleButtonClick = (i: number) => {
    setSelectedButton(prev =>
      prev.map(prev => {
        if (prev.id === i) {
          return {
            ...prev,
            type: 'contained',
            disabled: !prev.disabled
          }
        } else {
          return { ...prev, type: 'outline', disabled: false }
        }
      })
    )

    const clickedButton = selectedButton.find(button => button.id === i)
    const clickedLabel = clickedButton ? clickedButton.label : 'All'
    setForceUpdate(prev => !prev)
    setPage(1)
    setType(clickedLabel)
    setSelectedStatus('all')
    setStatus('')
  }

  const [selectedStatus, setSelectedStatus] = useState<string | null>('all')

  const handlePendingButton = () => {
    handleClose()
    setForceUpdate(prev => !prev)
    setPage(1)
    setStatus(prev => (prev ? '' : true))
    setSelectedStatus(prev => (prev === 'pending' ? 'all' : 'pending'))
  }

  const handleCompletedButton = () => {
    handleClose()
    setForceUpdate(prev => !prev)
    setPage(1)
    setStatus(prev => (prev === false ? '' : false))
    setSelectedStatus(prev => (prev === 'completed' ? 'all' : 'completed'))
  }

  const handleAllButton = () => {
    handleClose()
    setForceUpdate(prev => !prev)
    setPage(1)
    setStatus('')
    setSelectedStatus(prevSelected => (prevSelected === 'all' ? 'all' : 'all'))
  }

  const handlePaymentReceived = (id: string) => {
    setPaymentConformationModal(true)
    setProductId(id)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    setActionButtonData([
      {
        key: 'all',
        title: 'All',
        handleClick: handleAllButton,
        selected: selectedStatus === 'all'
      },
      {
        key: 'pending',
        title: 'Pending',
        handleClick: handlePendingButton,
        selected: selectedStatus === 'pending'
      },
      {
        key: 'completed',
        title: 'Completed',
        handleClick: handleCompletedButton,
        selected: selectedStatus === 'completed'
      }
    ])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [salesList, forceUpdate])

  return {
    itemsPerPage,
    page,
    setPage,
    loadMoreButtonClicked,
    setLoadMoreButtonClicked,
    showPaymentConformationModal,
    setPaymentConformationModal,
    selectedButton,
    setSelectedButton,
    forceUpdate,
    setForceUpdate,
    salesList,
    setSalesList,
    type,
    setType,
    status,
    setStatus,
    screenType,
    setScreenType,
    anchorEl,
    setAnchorEl,
    open,
    salesMemberList,
    fetchSalesData,
    handleLoadMoreClick,
    handleButtonClick,
    selectedStatus,
    setSelectedStatus,
    handlePendingButton,
    handleCompletedButton,
    handleAllButton,
    productId,
    setProductId,
    handlePaymentReceived,
    handleClose,
    actionButtonData
  }
}

export default useSalesData

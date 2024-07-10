import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import useDelete from '@/hooks/useDelete'
import useGet from '@/hooks/useGet'
import {
  fetchContractStart,
  fetchContractSuccess,
  fetchContractFailure
} from 'store/contractSlice'
import { toast } from 'react-toastify'
import { ContractList } from '@/utils/ApiTypes/ContractList'

const useContractList = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [openPdfViewer, setOpenPdfViewer] = useState<boolean>(false)
  const [pdfUrl, setPdfUrl] = useState<string>('')
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [showDeleteModel, setShowDeleteModel] = useState(false)
  const [contractDetails, setContractDetails] = useState<
    ContractList | undefined
  >(undefined)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const [page, setPage] = useState(1)
  const [contractList, setContractList] = useState<any>([])
  const [loadMoreButtonClicked, setLoadMoreButtonClicked] = useState(false)
  const [forceUpdate, setForceUpdate] = useState(false)

  const dispatch = useDispatch()
  const { mutateAsync: mutateDeleteAsync } = useDelete()
  const { data: contractData, refetch: fetchData } = useGet(
    'contractData',
    `/api/getcontracts?limit=${10}&page=${page}`,
    true
  )

  useEffect(() => {
    dispatch(fetchContractStart())
    fetchData()
      .then((response: { data: any }) => {
        dispatch(fetchContractSuccess(response.data))
      })
      .catch((error: { message: any }) => {
        dispatch(fetchContractFailure(error.message))
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData, page, forceUpdate])

  useEffect(() => {
    const list = contractData?.data?.contracts || []

    if (loadMoreButtonClicked) {
      setContractList((prev: any) => [...prev, ...list])
      setLoadMoreButtonClicked(false)
    } else {
      setContractList(list)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contractData])

  const openPdfView = (pdfURL: string) => {
    if (pdfURL) {
      setPdfUrl(pdfURL)
      setOpenPdfViewer(true)
    }
  }

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    item: ContractList
  ) => {
    setAnchorEl(event.currentTarget)
    setContractDetails(item)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleScroll = () => {
    handleClose()
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const closePdfModal = () => {
    setOpenPdfViewer(false)
  }

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
    setIsEditModalOpen(false)
  }

  const handleDeleteButton = () => {
    handleClose()
    setShowDeleteModel(true)
  }

  const handleDeleteProduct = async () => {
    try {
      const response = await mutateDeleteAsync({
        url: `/api/removeContract/${contractDetails?._id?.trim()}`
      })

      if (response?.status == 200) {
        toast.success(`${response?.data?.message}`)
        handleClose()
        setShowDeleteModel(false)
        setPage(1)
        setForceUpdate((prev: any) => !prev)
      }
    } catch (error: any) {
      if (!error?.response?.data?.message) {
        toast.error(`Oops! Something went wrong. Please try again later`)
      } else {
        toast.error(`${error?.response?.data?.message}`)
      }
    }
  }

  const handleEditProduct = () => {
    setAnchorEl(null)
    handleClose()
    setIsModalOpen(!isModalOpen)
    setIsEditModalOpen(true)
  }

  const handleLoadMoreClick = () => {
    setPage(prev => prev + 1)
    setLoadMoreButtonClicked(true)
  }

  return {
    isModalOpen,
    openPdfViewer,
    pdfUrl,
    isEditModalOpen,
    showDeleteModel,
    contractDetails,
    anchorEl,
    open,
    page,
    contractList,
    loadMoreButtonClicked,
    forceUpdate,
    openPdfView,
    handleClick,
    handleClose,
    closePdfModal,
    handleModal,
    handleDeleteButton,
    handleDeleteProduct,
    handleEditProduct,
    handleLoadMoreClick
  }
}

export default useContractList

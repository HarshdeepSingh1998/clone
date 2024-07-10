/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import useDelete from '@/hooks/useDelete'
import useGet from '@/hooks/useGet'
import {
  fetchContractStart,
  fetchContractSuccess,
  fetchContractFailure
} from 'store/contractSlice'
import { ContractList } from '@/utils/ApiTypes/ContractList'
import { ContractDataInterface } from '@/views/Admin/ContractmanagementPage/Desktop/types'
import EditModal from '@/assets/images/images/edit-modal.png'
import Remove from '@/assets/images/images/Remove.png'

const useContractList = (): ContractDataInterface => {
  const [actionButtonData, setActionButtonData] = useState<any>([])
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
  const [contractList, setContractList] = useState<ContractList[] | undefined>(
    undefined
  )
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
      setContractList(prev => [...(prev || []), ...list])
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

  const closePdfModal = () => {
    setOpenPdfViewer(false)
  }

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
    setIsEditModalOpen(false)
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
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDeleteButton = () => {
    handleClose()
    setShowDeleteModel(true)
  }

  const handleEditProduct = () => {
    setAnchorEl(null)
    handleClose()
    setIsModalOpen(!isModalOpen)
    setIsEditModalOpen(true)
  }

  useEffect(() => {
    setActionButtonData([
      {
        key: 'edit',
        image: EditModal,
        title: 'Edit',
        handleClick: handleEditProduct
      },
      {
        key: 'delete',
        image: Remove,
        title: 'Delete',
        handleClick: handleDeleteButton
      }
    ])
  }, [contractList])

  const handleLoadMoreClick = () => {
    setPage(prev => prev + 1)
    setLoadMoreButtonClicked(true)
  }

  return {
    isModalOpen,
    actionButtonData,
    setIsModalOpen,
    openPdfViewer,
    pdfUrl,
    isEditModalOpen,
    setIsEditModalOpen,
    showDeleteModel,
    setShowDeleteModel,
    contractDetails,
    anchorEl,
    open,
    page,
    contractList,
    loadMoreButtonClicked,
    forceUpdate,
    openPdfView,
    closePdfModal,
    handleModal,
    handleDeleteButton,
    handleDeleteProduct,
    handleEditProduct,
    handleLoadMoreClick,
    setAnchorEl,
    setContractDetails,
    handleClose
  }
}

export default useContractList

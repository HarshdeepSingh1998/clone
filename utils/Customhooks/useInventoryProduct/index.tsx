/* eslint-disable no-console */
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import useGet from '@/hooks/useGet'
import useDelete from '@/hooks/useDelete'
import usePut from '@/hooks/usePut'
import { selectUser } from '@/store/userSlice'
import { setProductDetail } from '@/store/productSlice'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import { UsersList } from '@/utils/ApiTypes/UsersList'
import { ContractList } from '@/utils/ApiTypes/ContractList'
import {
  FilterData,
  ModalState,
  UseInventoryProductInterface
} from '@/views/Admin/InventorymanagementPage/Desktop/types'
import Revoke from '@/assets/images/images/Revoke.png'
import Publish from '@/assets/images/images/Publish.png'
import Assign from '@/assets/images/images/Assign.png'
import EditModal from '@/assets/images/images/edit-modal.png'
import Remove from '@/assets/images/images/Remove.png'
import { toast } from 'react-toastify'

export const useInventoryProduct = (): UseInventoryProductInterface => {
  const handleClose = () => {
    setAnchorEl(null)
    setContractEl(null)
    setAssignEl(null)
  }
  const dispatch = useDispatch()
  const router = useRouter()
  const userData = useSelector(selectUser)
  const { mutateAsync: mutateDeleteAsync } = useDelete()
  const { mutateAsync } = usePut()
  const itemsPerPage = 10
  const [page, setPage] = useState(1)
  const [productList, setProductList] = useState<ProductList[] | undefined>(
    undefined
  )
  const [userDataList, setUserDataList] = useState<UsersList[] | undefined>(
    undefined
  )
  const [contractList, setContractList] = useState<ContractList[] | undefined>(
    undefined
  )
  const [productDetails, setProductDetails] = useState<ProductList | undefined>(
    undefined
  )
  const [selectedProduct, setSelectedProduct] = useState('')
  const [isPublishModalVisible, setIsPublishModalVisible] = useState(false)
  const [showRevokeModel, setShowRevokeModel] = useState(false)
  const [showDeleteModel, setShowDeleteModel] = useState(false)
  const [showBulkDeleteModel, setShowBulkDeleteModel] = useState(false)
  const [showUnassignedModel, setShowUnassignedModel] = useState(false)
  const [isAssignModalVisible, setIsAssignModalVisible] = useState(false)
  const [bulkAssignModalVisible, setBulkAssignModalVisible] =
    useState<boolean>(false)
  const [isLotModalOpen, setIsLotModalOpen] = useState(false)
  const [actionButtonData, setActionButtonData] = useState<any>()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [assignEl, setAssignEl] = useState<null | HTMLElement>(null)
  const [contractEl, setContractEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const assignOpen = Boolean(assignEl)
  const contractOpen = Boolean(contractEl)
  const [filterData, setFilterData] = useState<FilterData>({
    id: '',
    open: false,
    anchorEl: null,
    actionButtonData: [
      {
        key: '',
        title: '',
        handleClick: () => {},
        selected: false
      }
    ],
    handleClose: () => {}
  })
  const [statusProduct, setStatusProduct] = useState('Published')
  const [fileUploadError, setFileUploadError] = useState('')
  const [userPage, setUserPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [searchBySerialNumber, setSearchBySerialNumber] = useState('')
  const [importCsvModalVisible, setImportCsvModalVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState<ModalState>({
    showDeleteModel: false,
    showBulkDeleteModel: false,
    showUnassignedModel: false,
    showRevokeModel: false,
    isPublishModalVisible: false,
    isAssignModalVisible: false,
    isLotModalOpen: false,
    bulkAssignModalVisible: false
  })
  const toggleModal = (modalName: keyof ModalState) => {
    setIsModalOpen(prevState => ({
      ...prevState,
      [modalName]: !prevState[modalName]
    }))
  }
  const [contractValue, setContractValue] = useState<string>('')
  const [modelName, setModelName] = useState('')
  const [assigneeName, setAssigneeName] = useState('')
  const [contractFilterClicked, setContractFilterClicked] = useState(false)
  const [assignFilterClicked, setAssignFilterClicked] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null)
  const [status, setStatus] = useState('')
  const [loadMoreButtonClicked, setLoadMoreButtonClicked] = useState(false)
  const [forceUpdate, setForceUpdate] = useState(false)
  const [selectedButton, setSelectedButton] = useState([
    { type: 'contained', label: 'All', id: 0, disabled: true },
    { type: 'outline', label: 'Published', id: 1, disabled: false },
    { type: 'outline', label: 'Assigned', id: 2, disabled: false },
    { type: 'outline', label: 'Unpublished', id: 3, disabled: false }
  ])
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([])
  const [selectAll, setSelectAll] = useState(false)
  const [selectedContract, setSelectedContract] = useState<string | null>('all')
  const [selectedAssignee, setSelectedAssignee] = useState<string | null>('all')
  const { data, refetch: fetchData } = useGet(
    `productListStatus${status}`,
    status === 'Assigned'
      ? `/api/getAssignedProducts?page=${page}&limit=${itemsPerPage}&search=${searchBySerialNumber}&contractId=${contractValue}&modelName=${modelName}&userId=${assigneeName}`
      : status === ''
        ? `/api/getProducts?limit=${itemsPerPage}&status=${status}&page=${page}&search=${searchBySerialNumber}&contractId=${contractValue}&modelName=${modelName}&userId=${assigneeName}`
        : `/api/getProducts?limit=${itemsPerPage}&status=${status}&page=${page}&search=${searchBySerialNumber}&contractId=${contractValue}&modelName=${modelName}&userId=${status === 'UnPublished' ? userData?.data?.id : assigneeName}`,
    true
  )

  useEffect(() => {
    fetchData()
  }, [fetchData, status, page, forceUpdate])

  useEffect(() => {
    const list = data?.data?.products || []
    if (loadMoreButtonClicked) {
      setProductList(prev => [...(prev || []), ...list])
      setLoadMoreButtonClicked(false)
    } else {
      setProductList(list)
    }

    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, status])

  const { data: usersData, refetch: fetchUsersData } = useGet(
    'userList',
    `/api/getUsers?role=user&limit=${10}&status=&page=${userPage}&requiredProducts=${true}`,
    true
  )

  useEffect(() => {
    fetchUsersData()
    setLoading(false)
  }, [fetchUsersData, userPage])

  useEffect(() => {
    const list = usersData?.data?.users || []
    setUserDataList(prev => [...(prev || []), ...list])
  }, [usersData])

  useEffect(() => {
    if ((userDataList || [])?.length === 0) return
    if ((userDataList || [])?.length < usersData?.data?.meta?.totalResults) {
      setUserPage(prev => prev + 1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDataList])

  const { data: contractData, refetch: fetchContractData } = useGet(
    'contractData',
    `/api/getContracts`,
    true
  )

  useEffect(() => {
    if (isAssignModalVisible) {
      fetchContractData()
    }
  }, [fetchContractData, isAssignModalVisible])

  useEffect(() => {
    fetchContractData()
    const contractsList = contractData?.data?.contracts
    setContractList(contractsList)
  }, [contractData, fetchContractData])

  useEffect(() => {
    const controller = new AbortController()
    async function fetchSerialNumber() {
      try {
        setLoading(true)
        setPage(1)
        setForceUpdate(prev => !prev)
      } catch (err: any) {
        console.log(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchSerialNumber()
    return function () {
      controller.abort()
    }
  }, [fetchData, searchBySerialNumber])

  useEffect(() => {
    if (status !== 'UnPublished') {
      setSelectAll(false)
      setSelectedProductIds([])
    }
  }, [status])

  useEffect(() => {
    fetchData()
  }, [contractValue, contractFilterClicked, fetchData])

  useEffect(() => {
    fetchData()
  }, [assigneeName, assignFilterClicked, fetchData])

  useEffect(() => {
    fetchData()
  }, [fetchData, modelName])

  const handleLoadMoreClick = () => {
    setPage(prev => prev + 1)
    setLoadMoreButtonClicked(true)
  }

  const handleHeaderCheckboxToggle = () => {
    if (selectAll) {
      setSelectedProductIds([])
    } else {
      const allProductIds = productList?.map(product => product._id)
      setSelectedProductIds(allProductIds || [])
    }

    setSelectAll(prev => !prev)
  }

  const handleCheckboxToggle = (productId: string) => {
    if (selectedProductIds?.includes(productId)) {
      setSelectedProductIds(prevIds => prevIds?.filter(id => id !== productId))
    } else {
      setSelectedProductIds(prevIds => [...prevIds, productId])
    }
  }

  const handleRevokeButton = (productId: string) => {
    handleClose()
    setSelectedProduct(productId)
    setShowRevokeModel(true)
  }
  const handlePublishButtonClick = (productId: string) => {
    handleClose()
    setSelectedProduct(productId)
    setIsPublishModalVisible(true)
  }
  const handleAssignButtonClick = (productId: string) => {
    handleClose()
    setSelectedProduct(productId)
    setIsAssignModalVisible(true)
  }
  const handleEditProduct = (productDetails: ProductList) => {
    setAnchorEl(null)
    handleClose()
    dispatch(setProductDetail(productDetails))

    if (productDetails._id) router.push(`/admin/product/${productDetails?._id}`)
  }
  const handleDeleteButton = (productId: string) => {
    handleClose()
    setSelectedProduct(productId)
    setShowDeleteModel(true)
  }
  const handleUnassignedButton = (productId: string) => {
    handleClose()
    setSelectedProduct(productId)
    setShowUnassignedModel(true)
  }

  const handleAllButton = () => {
    setContractValue('')
    setPage(1)
    setContractFilterClicked(prev => !prev)
    handleClose()
    setSelectedContract(prevSelected =>
      prevSelected === 'all' ? 'all' : 'all'
    )
  }

  const handleContractButton = (value: string) => {
    selectedContract === value ? setContractValue('') : setContractValue(value)
    setPage(1)
    setContractFilterClicked(prev => !prev)
    handleClose()
    setSelectedContract(prevSelected =>
      prevSelected === value ? 'all' : value
    )
  }

  const dynamicEntries =
    contractList
      ?.filter(data => data?.isAssignedToProduct)
      ?.map(data => ({
        key: data._id,
        title: data.contractId,
        handleClick: () => handleContractButton(data._id),
        selected: selectedContract === data._id
      })) || []

  const handleAssignAllButton = () => {
    setAssigneeName('')
    setPage(1)
    setAssignFilterClicked(prev => !prev)
    handleClose()
    setSelectedAssignee(prevSelected =>
      prevSelected === 'all' ? 'all' : 'all'
    )
  }

  const handleAssignButton = (value: string) => {
    selectedAssignee === value ? setAssigneeName('') : setAssigneeName(value)
    // setAssigneeName(value)
    setPage(1)
    setAssignFilterClicked(prev => !prev)
    handleClose()
    setSelectedAssignee(prevSelected =>
      prevSelected === value ? 'all' : value
    )
  }

  const dynamicAssigneeEntries =
    userDataList
      ?.filter(
        data => data.assignedProducts && data.assignedProducts.length > 0
      )
      ?.map(data => ({
        key: data._id,
        title: !data?.name ? data?.email?.split('@')[0] : data?.name,
        handleClick: () => handleAssignButton(data._id),
        selected: selectedAssignee === data._id
      })) || []

  useEffect(() => {
    if (productDetails?.status === 'Published') {
      setActionButtonData([
        {
          key: 'revoke',
          image: Revoke,
          title: 'Revoke',
          handleClick: () => handleRevokeButton(productDetails?._id as string)
        }
      ])
    } else if (
      statusProduct === 'UnPublished' &&
      !productDetails?.transaction
    ) {
      setActionButtonData([
        {
          key: 'publishProduct',
          image: Publish,
          title: 'Publish',
          handleClick: () =>
            handlePublishButtonClick(productDetails?._id as string)
        },
        {
          key: 'assignProduct',
          image: Assign,
          title: 'Assign',
          handleClick: () =>
            handleAssignButtonClick(productDetails?._id as string)
        },
        {
          key: 'editProduct',
          image: EditModal,
          title: 'Edit',
          handleClick: () => handleEditProduct(productDetails as ProductList)
        },
        {
          key: 'delete',
          image: Remove,
          title: 'Delete',
          handleClick: () => handleDeleteButton(productDetails?._id as string)
        }
      ])
    } else {
      setActionButtonData([
        {
          key: 'unAssigned',
          image: Revoke,
          title: 'Unassign',
          handleClick: () =>
            handleUnassignedButton(productDetails?._id as string)
        }
      ])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productList, productDetails, open])

  useEffect(() => {
    if (contractOpen) {
      setFilterData({
        id: 'contract',
        open: contractOpen,
        anchorEl: contractEl,
        actionButtonData: [
          {
            key: 'all',
            title: 'All',
            handleClick: handleAllButton,
            selected: selectedContract === 'all'
          },
          ...dynamicEntries
        ],
        handleClose: handleClose
      })
    } else {
      setFilterData({
        id: 'assign',
        open: assignOpen,
        anchorEl: assignEl,
        actionButtonData: [
          {
            key: 'all',
            title: 'All',
            handleClick: handleAssignAllButton,
            selected: selectedAssignee === 'all'
          },
          ...dynamicAssigneeEntries
        ],
        handleClose: handleClose
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contractEl, assignEl])

  const handleViewProduct = (productId: string) => {
    router.push(`/admin/productDetails?productId=${productId}&page=inventory`)
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const fileType = files[i].type
        const allowedTypes = [
          'text/csv',
          'application/vnd.ms-excel',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ]
        if (!allowedTypes.includes(fileType)) {
          setFileUploadError('Please select only CSV or Excel files.')
          event.target.value = ''
          return
        } else {
          setFileUploadError('')
        }

        const fileSizeExceeded = Array.from(files).every(
          file => file.size > 2 * 1024 * 1024
        )
        if (fileSizeExceeded) {
          toast.error(`Maximum file size allowed is ${2}MB`)
          return
        }
      }

      setSelectedFiles(files)
    }
  }

  return {
    page,
    setPage,
    productList,
    loading,
    searchBySerialNumber,
    setSearchBySerialNumber,
    mutateDeleteAsync,
    mutateAsync,
    importCsvModalVisible,
    setImportCsvModalVisible,
    selectedProduct,
    setSelectedProduct,
    contractValue,
    setContractValue,
    modelName,
    setModelName,
    assigneeName,
    setAssigneeName,
    contractFilterClicked,
    setContractFilterClicked,
    assignFilterClicked,
    setAssignFilterClicked,
    selectedFiles,
    setSelectedFiles,
    status,
    setStatus,
    loadMoreButtonClicked,
    setLoadMoreButtonClicked,
    forceUpdate,
    setForceUpdate,
    isAssignModalVisible,
    setIsAssignModalVisible,
    contractList,
    setContractList,
    selectedButton,
    setSelectedButton,
    productDetails,
    setProductDetails,
    statusProduct,
    setStatusProduct,
    fileUploadError,
    setFileUploadError,
    selectedProductIds,
    selectAll,
    bulkAssignModalVisible,
    setBulkAssignModalVisible,
    isLotModalOpen,
    setIsLotModalOpen,
    selectedContract,
    setSelectedContract,
    selectedAssignee,
    setSelectedAssignee,
    setSelectedProductIds,
    setSelectAll,
    isModalOpen,
    toggleModal,
    data,
    handleLoadMoreClick,
    handleHeaderCheckboxToggle,
    handleCheckboxToggle,
    userData,
    handleClose,
    isPublishModalVisible,
    showRevokeModel,
    showDeleteModel,
    showBulkDeleteModel,
    showUnassignedModel,
    actionButtonData,
    anchorEl,
    setAnchorEl,
    assignEl,
    contractEl,
    open,
    assignOpen,
    contractOpen,
    setShowBulkDeleteModel,
    filterData,
    setAssignEl,
    setContractEl,
    handleViewProduct,
    handleFileChange,
    fetchData
  }
}

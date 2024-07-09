/* eslint-disable no-console */
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import useGet from '@/hooks/useGet'
import useDelete from '@/hooks/useDelete'
import usePut from '@/hooks/usePut'
import { selectUser } from '@/store/userSlice'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import { UsersList } from '@/utils/ApiTypes/UsersList'
import { ContractList } from '@/utils/ApiTypes/ContractList'
import {
  ModalState,
  UseInventoryProductInterface
} from '@/views/Admin/InventorymanagementPage/HeaderView/types'

export const useInventoryProduct = (): UseInventoryProductInterface => {
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
  const [selectedProduct, setSelectedProduct] = useState('')
  const [contractValue, setContractValue] = useState<string>('')
  const [modelName, setModelName] = useState('')
  const [assigneeName, setAssigneeName] = useState('')
  const [contractFilterClicked, setContractFilterClicked] = useState(false)
  const [assignFilterClicked, setAssignFilterClicked] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null)
  const [status, setStatus] = useState('')
  const [loadMoreButtonClicked, setLoadMoreButtonClicked] = useState(false)
  const [forceUpdate, setForceUpdate] = useState(false)
  const [isAssignModalVisible, setIsAssignModalVisible] = useState(false)
  const [selectedButton, setSelectedButton] = useState([
    { type: 'contained', label: 'All', id: 0, disabled: true },
    { type: 'outline', label: 'Published', id: 1, disabled: false },
    { type: 'outline', label: 'Assigned', id: 2, disabled: false },
    { type: 'outline', label: 'Unpublished', id: 3, disabled: false }
  ])
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([])
  const [selectAll, setSelectAll] = useState(false)
  const [bulkAssignModalVisible, setBulkAssignModalVisible] =
    useState<boolean>(false)
  const [isLotModalOpen, setIsLotModalOpen] = useState(false)
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
  }, [data, loadMoreButtonClicked, status])

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
    data
  }
}

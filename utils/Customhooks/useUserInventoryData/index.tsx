import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import useGet from '@/hooks/useGet'
import { selectUser } from '@/store/userSlice'
import { ProductList } from '@/utils/ApiTypes/ProductList'

const useUserInventoryData = () => {
  const userData = useSelector(selectUser)
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState('')
  const itemsPerPage = 10
  const [page, setPage] = useState(1)

  const [selectedButton, setSelectedButton] = useState([
    { type: 'contained', label: 'All', id: 0, disabled: true },
    { type: 'outline', label: 'Published', id: 1, disabled: false },
    { type: 'outline', label: 'Unpublished', id: 2, disabled: false },
    { type: 'outline', label: 'Pending', id: 3, disabled: false }
  ])
  const [isPublishModalVisible, setIsPublishModalVisible] = useState(false)
  const [showRevokeModel, setShowRevokeModel] = useState(false)
  const [productList, setProductList] = useState<ProductList[] | undefined>(
    undefined
  )
  const [productDetails, setProductDetails] = useState<ProductList | undefined>(
    undefined
  )
  const [selectedProduct, setSelectedProduct] = useState('')
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([])
  const [selectAll, setSelectAll] = useState(false)
  const [isLotModalOpen, setIsLotModalOpen] = useState(false)
  const [loadMoreButtonClicked, setLoadMoreButtonClicked] = useState(false)
  const [forceUpdate, setForceUpdate] = useState(false)
  const { data, refetch: fetchData } = useGet(
    'productList',
    status === 'Assigned'
      ? '/api/getAssignedProducts'
      : status === 'Pending'
        ? `/api/getSales?isPending=true&assignedUser=${userData.data?.id}`
        : `/api/getProducts?status=${status}&userId=${userData.data?.id}&limit=${itemsPerPage}&page=${page}`,
    true
  )

  useEffect(() => {
    fetchData()
  }, [fetchData, status, page, forceUpdate])

  useEffect(() => {
    let list
    if (status !== 'Pending') {
      list = data?.data?.products || []
    } else {
      list = data?.data?.results || []
    }

    if (loadMoreButtonClicked) {
      setProductList(prev => [...(prev || []), ...list])
      setLoadMoreButtonClicked(false)
    } else {
      setProductList(list)
    }

    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, status])

  const handleButtonClick = (i: number, label: string) => {
    setStatus(
      label === 'All'
        ? ''
        : label === 'Published'
          ? label
          : label === 'Pending'
            ? label
            : 'UnPublished'
    )
    setSelectedButton(prev =>
      prev.map(btn =>
        btn.id === i
          ? { ...btn, type: 'contained', disabled: !btn.disabled }
          : { ...btn, type: 'outline', disabled: false }
      )
    )
    setPage(1)
  }

  const handleLoadMoreClick = () => {
    setLoading(true)
    setLoading(false)
    setPage(prev => prev + 1)
    setLoadMoreButtonClicked(true)
  }

  const handleRevokeButton = (productId: string, product: ProductList) => {
    setSelectedProduct(productId)
    setProductDetails(product)
    setShowRevokeModel(true)
  }

  const handleLotModalClick = () => {
    const selectedProducts = productList?.filter(product =>
      selectedProductIds.includes(product._id)
    )

    const modelNames = selectedProducts?.map(product => product?.modelName)
    const contractId = selectedProducts?.map(
      product => product?.contract?.contractId
    )
    const isSameModelName = modelNames?.every(name => name === modelNames[0])
    const isSameContractId = contractId?.every(
      contract => contract === contractId[0]
    )

    if (
      isSameModelName &&
      (contractId || [])?.length > 0 &&
      isSameContractId &&
      (selectedProducts || [])?.length > 0
    ) {
      setIsLotModalOpen(true)
    } else if (
      isSameModelName &&
      !contractId?.length &&
      (selectedProducts || [])?.length > 0
    ) {
      setIsLotModalOpen(true)
    } else {
      toast.error(
        'Error: Products must have the same model name and Contract Id'
      )
    }
  }

  const handleCheckboxToggle = (productId: string) => {
    setSelectedProductIds(prevIds =>
      prevIds.includes(productId)
        ? prevIds.filter(id => id !== productId)
        : [...prevIds, productId]
    )
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

  useEffect(() => {
    if (status !== 'UnPublished') {
      setSelectAll(false)
      setSelectedProductIds([])
    }
  }, [status])

  const totalLength =
    status !== 'Pending'
      ? data?.data?.meta?.totalNumberOfProducts
      : data?.data?.meta?.totalNumberOfResults

  return {
    loading,
    status,
    setStatus,
    itemsPerPage,
    page,
    setPage,
    selectedButton,
    setSelectedButton,
    productList,
    isPublishModalVisible,
    setIsPublishModalVisible,
    showRevokeModel,
    setShowRevokeModel,
    productDetails,
    selectedProduct,
    loadMoreButtonClicked,
    forceUpdate,
    data,
    fetchData,
    handleButtonClick,
    handleLoadMoreClick,
    handleRevokeButton,
    selectedProductIds,
    selectAll,
    isLotModalOpen,
    handleCheckboxToggle,
    handleHeaderCheckboxToggle,
    handleLotModalClick,
    totalLength,
    setForceUpdate
  }
}

export default useUserInventoryData

import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { setProductDetail } from '@/store/productSlice'
import Revoke from '@/assets/images/images/Revoke.png'
import Publish from '@/assets/images/images/Publish.png'
import Assign from '@/assets/images/images/Assign.png'
import Remove from '@/assets/images/images/Remove.png'
import EditModal from '@/assets/images/images/edit-modal.png'
import { ProductList } from '@/utils/ApiTypes/ProductList'

const useActionButton = (
  modelDetails: ProductList | undefined,
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>
) => {
  const [actionButtonData, setActionButtonData] = useState<any>()
  const [descriptionDetails, setDescriptionDetails] = useState<any>()
  const [showRevokeModel, setShowRevokeModel] = useState(false)
  const [isPubishModalVisible, setIsPublishModalVisible] = useState(false)
  const [isAssignModalVisible, setIsAssignModalVisible] = useState(false)
  const [showDeleteModel, setShowDeleteModel] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleRevokeButton = () => {
    handleClose()
    setShowRevokeModel(true)
  }

  const handlePublishButtonClick = () => {
    handleClose()
    setIsPublishModalVisible(true)
  }

  const handleAssignButtonClick = () => {
    handleClose()
    setIsAssignModalVisible(true)
  }

  const handleEditProduct = (productDetails: ProductList) => {
    setAnchorEl(null)
    handleClose()
    dispatch(setProductDetail(productDetails))
    if (productDetails._id)
      router.push(`/admin/addProduct/${productDetails?._id}`)
  }

  const handleDeleteButton = () => {
    handleClose()
    setShowDeleteModel(true)
  }

  useEffect(() => {
    if (modelDetails?.status === 'UnPublished') {
      setActionButtonData([
        {
          key: 'revoke',
          image: Revoke,
          title: 'Revoke',
          handleClick: handleRevokeButton
        }
      ])
    } else {
      setActionButtonData([
        {
          key: 'publishProduct',
          image: Publish,
          title: 'Publish',
          handleClick: handlePublishButtonClick
        },
        {
          key: 'assignProduct',
          image: Assign,
          title: 'Assign',
          handleClick: handleAssignButtonClick
        },
        {
          key: 'editProduct',
          image: EditModal,
          title: 'Edit',
          handleClick: () => handleEditProduct(modelDetails as ProductList)
        },
        {
          key: 'delete',
          image: Remove,
          title: 'Delete',
          handleClick: handleDeleteButton
        }
      ])
    }

    setDescriptionDetails([
      { title: 'Manufacturer:', content: modelDetails?.manufacturer, unit: '' },
      { title: 'Status:', content: modelDetails?.productStatus, unit: '' },
      { title: 'Power:', content: modelDetails?.power, unit: 'KW' },
      {
        title: 'Cooling:Power:',
        content:
          modelDetails?.cooling &&
          modelDetails.cooling.charAt(0).toUpperCase() +
            modelDetails?.cooling.slice(1),
        unit: ''
      },
      { title: 'Hashrate:', content: modelDetails?.hashRate, unit: 'TH/s' },
      { title: 'Efficiency:', content: modelDetails?.efficiency, unit: '' }
    ])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modelDetails])

  return {
    actionButtonData,
    showRevokeModel,
    setShowRevokeModel,
    isPubishModalVisible,
    setIsPublishModalVisible,
    isAssignModalVisible,
    setIsAssignModalVisible,
    showDeleteModel,
    setShowDeleteModel,
    descriptionDetails
  }
}

export default useActionButton

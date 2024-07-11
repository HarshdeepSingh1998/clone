import useDelete from '@/hooks/useDelete'
import { ContractDataInterface } from '@/views/Admin/ContractmanagementPage/Desktop/types'
import { Dispatch, SetStateAction } from 'react'
import { toast } from 'react-toastify'

interface DeleteModalProps {
  contractData: ContractDataInterface
  setForceUpdate: Dispatch<SetStateAction<boolean>>
  setPage: Dispatch<SetStateAction<number>>
  setShowDeleteModel: Dispatch<SetStateAction<boolean>>
}

export const useDeleteProduct = ({
  contractData,
  setForceUpdate,
  setPage,
  setShowDeleteModel
}: DeleteModalProps) => {
  const { mutateAsync: mutateDeleteAsync } = useDelete()
  const handleDeleteProduct = async () => {
    try {
      const response = await mutateDeleteAsync({
        url: `/api/removeContract/${contractData.contractDetails?._id?.trim()}`
      })

      if (response?.status == 200) {
        toast.success(`${response?.data?.message}`)
        contractData.handleClose()
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

  return {
    handleDeleteProduct
  }
}

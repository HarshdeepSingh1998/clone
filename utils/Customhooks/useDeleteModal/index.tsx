/* eslint-disable no-unsafe-optional-chaining */
// useRevokeProduct.ts
import { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import useDelete from '@/hooks/useDelete'

interface DeleteModalProps {
  productDetails?: ProductList
  selectedProduct?: ProductList
  fetchData: () => void
  setShowDeleteModel: Dispatch<SetStateAction<boolean>>
}

export const useDeleteProduct = ({
  productDetails,
  fetchData,
  setShowDeleteModel
}: DeleteModalProps) => {
  const { mutateAsync: mutateDeleteAsync } = useDelete()
  const router = useRouter()
  const handleDeleteProduct = async () => {
    try {
      const response = await mutateDeleteAsync({
        url: `/api/removeProduct/${productDetails?._id?.trim()}`
      })

      if (response?.status == 200) {
        toast.success(`${response?.data?.message}`)
        fetchData()
        setShowDeleteModel(false)
        setShowDeleteModel(false)
        router.back()
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

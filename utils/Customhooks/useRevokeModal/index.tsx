// useRevokeProduct.ts
import { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import usePut from 'hooks/usePut'
import { ProductList } from '@/utils/ApiTypes/ProductList'

interface RevokeProductProps {
  productDetails?: ProductList
  selectedProduct?: ProductList
  fetchData: () => void
  setShowRevokeModel: Dispatch<SetStateAction<boolean>>
}

export const useRevokeProduct = ({
  productDetails,
  selectedProduct,
  fetchData,
  setShowRevokeModel
}: RevokeProductProps) => {
  const { mutateAsync } = usePut()
  const router = useRouter()

  const handleRevoke = async () => {
    try {
      let response
      if (!productDetails?.lotId) {
        response = await mutateAsync({
          url: `/api/revokeProduct/${productDetails?._id?.trim()}` // single product
        })
      } else {
        response = await mutateAsync({
          url: `/api/revokeProduct/${selectedProduct?._id?.trim()}`
        })
      }

      if (response?.data.status === 200) {
        toast.success(`${response?.data?.message}`)
        setShowRevokeModel(false)
        fetchData()
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
    handleRevoke
  }
}

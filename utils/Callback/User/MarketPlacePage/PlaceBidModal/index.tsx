import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import usePost from '@/hooks/usePost'
import { ProductList } from '@/utils/ApiTypes/ProductList'

const useSubmit = (
  productList: ProductList[] | undefined,
  selectedProduct: string,
  closePlaceBidModal: () => void,
  reset: any
) => {
  const { mutateAsync } = usePost()
  const router = useRouter()

  const onSubmit = async (values: any) => {
    const product = productList?.find(
      (product: any) => product._id === selectedProduct
    )
    const bidPrice = values.bidamount
    const bidType = 'bid'

    try {
      const response = await mutateAsync({
        url: `/api/placeBid/${product?._id}`,
        payload: { bidPrice, bidType }
      })
      if (response?.data.status === 200) {
        toast.success(`${response?.data?.message}`)
        closePlaceBidModal()
        reset()
        router.push('/user/biddingmanagement')
      }
    } catch (error: any) {
      if (!error?.response?.data?.message) {
        toast.error(`Oops! Something went wrong. Please try again later`)
      } else {
        const objectKeys =
          typeof error?.response?.data?.message !== 'string' &&
          Object.keys(error?.response?.data?.message)
        objectKeys && objectKeys?.length > 0
          ? objectKeys.forEach((key: string) =>
              toast.error(`${error?.response?.data?.message[key].message}`)
            )
          : toast.error(`${error?.response?.data?.message}`)
      }
    }
  }

  return { onSubmit }
}

export default useSubmit

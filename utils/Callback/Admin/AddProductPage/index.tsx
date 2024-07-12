import { useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import usePost from '@/hooks/usePost'
import usePut from '@/hooks/usePut'
import { UseAddProductInterface } from '@/views/Admin/AddProductPage/types'
import { ProductList } from '@/utils/ApiTypes/ProductList'

const useSubmit = (
  addProductData: UseAddProductInterface,
  productDetails: ProductList | null
) => {
  const { mutateAsync } = usePost()
  const { mutateAsync: mutatePutAsync } = usePut()
  const router = useRouter()
  const [, setDisable] = useState(false)
  const onSubmit = async (values: {
    [x: string]: string | Blob | number | null
  }) => {
    setDisable(true)
    const formData = new FormData()
    let response
    Object.keys(values).forEach((key: string) => {
      return formData.append(`${key}`, values[key] as string | Blob)
    })

    const filesArray = Array.from(addProductData.files as File[])
    filesArray.forEach(file => {
      formData.append('images', file)
    })

    try {
      if (productDetails) {
        const payloadData = { ...values }
        payloadData.images = addProductData.selectedImages as any
        response = await mutatePutAsync({
          url: `/api/updateProduct/${productDetails._id}`,
          payload: payloadData
        })
      } else {
        response = await mutateAsync({
          url: '/api/addProduct',
          payload: formData
        })
      }

      if (response?.data.status === 200) {
        toast.success(`${response?.data?.message}`)
        router.push('/admin/inventorymanagement')
        setDisable(false)
      }
    } catch (error: any) {
      if (error?.response?.status === 500 || error?.response?.status === 413) {
        toast.error(`File too large`)
      } else if (!error?.response?.data?.message) {
        toast.error(`Oops! Something went wrong. Please try again later`)
      } else {
        if (
          typeof error?.response?.data?.message === 'object' &&
          Object.keys(error?.response?.data?.message).length > 0
        ) {
          Object.keys(error?.response?.data?.message)?.map((key: string) => {
            toast.error(`${error?.response?.data?.message[key].message}`)
          })
        } else {
          toast.error(`${error?.response?.data?.message}`)
        }
      }

      setDisable(false)
    } finally {
      setDisable(false)
    }
  }

  return { onSubmit }
}

export default useSubmit

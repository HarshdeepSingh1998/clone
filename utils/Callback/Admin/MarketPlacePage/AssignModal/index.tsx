import { Dispatch, SetStateAction, useEffect } from 'react'
import { toast } from 'react-toastify'
import usePut from '@/hooks/usePut'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import { UsersList } from '@/utils/ApiTypes/UsersList'

const useSubmit = (
  setError: any,
  watch: any,
  setValue: any,
  reset: any,
  selectedProduct: ProductList | undefined,
  setIsAssignModalVisible: any,
  inventoryPage: boolean,
  fetchData: any,
  setPage: Dispatch<SetStateAction<number>> | undefined,
  setUserPage: Dispatch<SetStateAction<number>> | undefined,
  setSelectedProductIds: Dispatch<SetStateAction<string[]>> | undefined,
  setForceUpdate: Dispatch<SetStateAction<boolean>> | undefined,
  fetchContractData: any,
  setSelectedProduct: Dispatch<SetStateAction<string>> | undefined,
  setUserDataList: Dispatch<SetStateAction<UsersList[] | undefined>>
) => {
  const contract = watch('contract')
  const hosting = watch('hosting')
  const assignedUser = watch('assignedUser')
  const { mutateAsync } = usePut()
  useEffect(() => {
    if (hosting) {
      reset()
      setValue('hosting', hosting)
    }
  }, [hosting, reset, setValue])

  const onSubmit = async (values: any) => {
    if (hosting === 'with_hosting' && !contract) {
      setError('contract', {
        type: 'manual',
        message: 'contract is required.'
      })
      return
    }

    if (!hosting) {
      setError('hosting', {
        type: 'manual',
        message: 'Hosting is required.'
      })
      return
    }

    if (!assignedUser) {
      setError('assignedUser', {
        type: 'manual',
        message: 'Assigned User is required.'
      })
      return
    }

    const payload: {
      assignedUser: any
      productIds: string[]
      hosting: boolean
      contract?: any
    } = {
      assignedUser: values.assignedUser,
      productIds: [selectedProduct?._id as string],
      hosting: hosting === 'with_hosting' ? true : false
    }
    if (hosting === 'with_hosting') {
      payload.contract = values.contract
    }

    try {
      const response = await mutateAsync({
        url: `/api/assignProduct`,
        payload: payload
      })
      if (response?.data.status === 200) {
        toast.success(`${response?.data?.message}`)
        setIsAssignModalVisible(false)
        reset()
        if (inventoryPage) {
          setPage?.(1)
          setForceUpdate?.((prev: any) => !prev)
          setSelectedProductIds?.([])
          setUserDataList?.([])
          setUserPage?.(1)
          fetchContractData()
          setIsAssignModalVisible('isAssignModalVisible')
        } else {
          fetchData()
        }

        setSelectedProduct?.('')
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

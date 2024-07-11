import { Dispatch, SetStateAction, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { fetchContractStart } from '@/store/contractSlice'
import { ContractList } from '@/utils/ApiTypes/ContractList'
import usePost from '@/hooks/usePost'
import usePut from '@/hooks/usePut'

interface UseContractFormProps {
  setError: any
  contractDetails: ContractList | undefined
  closeModal: () => void
  setPage: Dispatch<SetStateAction<number>>
  setForceUpdate: Dispatch<SetStateAction<boolean>>
}

const useSubmit = ({
  setError,
  contractDetails,
  closeModal,
  setPage,
  setForceUpdate
}: UseContractFormProps) => {
  const dispatch = useDispatch()
  const { mutateAsync } = usePost()
  const { mutateAsync: callEditContractAPI } = usePut()
  const [loading, setLoading] = useState(false)

  const handleFormSubmit = async (data: any, isEdit: boolean) => {
    if (!data.expirationDate || data.expirationDate === 'Invalid Date') {
      setError('expirationDate', {
        type: 'manual',
        message: 'Expiration Date is required.'
      })
      return
    }

    const formData = new FormData()
    Object.keys(data).forEach((key: string) => {
      return formData.append(`${key}`, data[key] as string | Blob)
    })

    setLoading(true)
    try {
      const response = isEdit
        ? await callEditContractAPI({
            url: `/api/editcontract/${contractDetails?._id}`,
            payload: formData
          })
        : await mutateAsync({
            url: '/api/addcontract',
            payload: formData
          })

      if (response?.data.status === 200) {
        toast.success(`${response?.data?.message}`)
        closeModal()
        dispatch(fetchContractStart())
        setPage(1)
        setForceUpdate(prev => !prev)
      }
    } catch (error) {
      const axiosError = error as any
      const errorMessage = axiosError?.response?.data?.message

      if (typeof errorMessage === 'string') {
        toast.error(errorMessage)
      } else if (errorMessage && typeof errorMessage === 'object') {
        if (Object.keys(errorMessage).length > 0) {
          Object.keys(errorMessage).map(key => {
            toast.error(errorMessage[key].message)
          })
        } else {
          toast.error('Oops! Something went wrong. Please try again later')
        }
      } else {
        toast.error('Oops! Something went wrong. Please try again later')
      }
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = (data: any) => handleFormSubmit(data, false)
  const handleEditSubmit = (data: any) => handleFormSubmit(data, true)

  return { onSubmit, handleEditSubmit, loading }
}

export default useSubmit

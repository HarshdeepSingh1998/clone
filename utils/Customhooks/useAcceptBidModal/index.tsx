import { Dispatch, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import usePost from '@/hooks/usePost'

interface UseAcceptBidModalProps {
  selectedBid: any
  setIsAcceptBidModalVisible: Dispatch<SetStateAction<boolean>>
  setPage: Dispatch<SetStateAction<number>>
  setForceUpdate: Dispatch<SetStateAction<boolean>>
}

export const useAcceptBidModal = ({
  selectedBid,
  setIsAcceptBidModalVisible,
  setPage,
  setForceUpdate
}: UseAcceptBidModalProps) => {
  const { mutateAsync } = usePost()

  const handleAcceptBid = async () => {
    try {
      const response = await mutateAsync({
        url: `/api/acceptBid/${selectedBid?._id}`
      })
      if (response?.data.status === 200) {
        toast.success(`${response?.data?.message}`)
        setIsAcceptBidModalVisible(false)
        setPage(1)
        setForceUpdate(prev => !prev)
      }
    } catch (error: any) {
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message)
      }
    }
  }

  return {
    handleAcceptBid
  }
}

import { Dispatch, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import usePut from '@/hooks/usePut'

interface UseAcceptBidModalProps {
  selectedBid: any
  setIsRejectBidModalVisible: Dispatch<SetStateAction<boolean>>
  setPage: Dispatch<SetStateAction<number>>
  setForceUpdate: Dispatch<SetStateAction<boolean>>
}

export const useRejectBidModal = ({
  selectedBid,
  setIsRejectBidModalVisible,
  setPage,
  setForceUpdate
}: UseAcceptBidModalProps) => {
  const { mutateAsync } = usePut()

  const handleRejectBidBid = async () => {
    try {
      const response = await mutateAsync({
        url: `/api/rejectBid/${selectedBid?._id}`
        // payload: { userId: selectedBid?.bidUser._id}
      })
      if (response?.data.status === 200) {
        toast.success(`${response?.data?.message}`)
        setIsRejectBidModalVisible(false)
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
    handleRejectBidBid
  }
}

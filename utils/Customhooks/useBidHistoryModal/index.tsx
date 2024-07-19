import { Dispatch, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import usePost from '@/hooks/usePost'

interface UseCounterBidModalInterface {
  selectedBid: any
  setIsBidHistoryModalVisible: Dispatch<SetStateAction<boolean>>
  setPage: Dispatch<SetStateAction<number>>
  setForceUpdate: Dispatch<SetStateAction<boolean>>
  reset: any
}

const useBidHistoryModal = ({
  selectedBid,
  setIsBidHistoryModalVisible,
  setPage,
  setForceUpdate,
  reset
}: UseCounterBidModalInterface) => {
  const { mutateAsync } = usePost()

  const onSubmit = async (values: { counterprice: string }) => {
    const bidPrice = values.counterprice
    const bidType = 'counter'
    try {
      const response = await mutateAsync({
        url: `/api/placeBid/${selectedBid?.product?._id}`,
        payload: { bidPrice, bidType, rootBid: selectedBid?._id }
      })
      if (response?.data.status === 200) {
        toast.success(`${response?.data?.message}`)
        setIsBidHistoryModalVisible(false)
        setPage(1)
        setForceUpdate(prev => !prev)
        reset()
      }
    } catch (error: any) {
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message)
      }
    }
  }

  return { onSubmit }
}

export default useBidHistoryModal

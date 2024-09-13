import { useState } from 'react'

export const useUserPublishData = (setValue: any) => {
  const [toggleValue, setToggleValue] = useState('Bid')

  const handleToggleChange = () => {
    setValue('auctionStartDate', '')
    setValue('auctionEndDate', '')
    setToggleValue(prevValue => {
      setValue('auctionType', prevValue === 'Buy' ? 'Bid' : 'Buy')
      return prevValue === 'Buy' ? 'Bid' : 'Buy'
    })
  }

  return { toggleValue, handleToggleChange, setToggleValue }
}

export default useUserPublishData

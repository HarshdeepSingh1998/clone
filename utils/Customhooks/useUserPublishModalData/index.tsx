import { useState } from 'react'

export const useUserPublishData = (setValue: any) => {
  const [toggleValue, setToggleValue] = useState('Bid')

  const handleToggleChange = () => {
    if (toggleValue === 'Bid') {
      return
    }

    setValue('auctionStartDate', '')
    setValue('auctionEndDate', '')
    setToggleValue(() => {
      setValue('auctionType', 'Bid')
      return 'Bid'
    })
  }

  return { toggleValue, handleToggleChange }
}

export default useUserPublishData

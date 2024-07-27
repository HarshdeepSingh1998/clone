import { useState, useEffect } from 'react'
import { ProductList } from '@/utils/ApiTypes/ProductList'

const useActionButton = (modelDetails: ProductList | undefined) => {
  const [descriptionDetails, setDescriptionDetails] = useState<any>()

  useEffect(() => {
    setDescriptionDetails([
      { title: 'Manufacturer:', content: modelDetails?.manufacturer, unit: '' },
      { title: 'Status:', content: modelDetails?.productStatus, unit: '' },
      { title: 'Power:', content: modelDetails?.power, unit: 'KW' },
      {
        title: 'Cooling:Power:',
        content:
          modelDetails?.cooling &&
          modelDetails.cooling.charAt(0).toUpperCase() +
            modelDetails?.cooling.slice(1),
        unit: ''
      },
      { title: 'Hashrate:', content: modelDetails?.hashRate, unit: 'TH/s' },
      { title: 'Efficiency:', content: modelDetails?.efficiency, unit: '' }
    ])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modelDetails])

  return {
    descriptionDetails
  }
}

export default useActionButton

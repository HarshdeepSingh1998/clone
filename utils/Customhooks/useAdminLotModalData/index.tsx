import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import { UseInventoryProductInterface } from '@/views/Admin/InventorymanagementPage/Desktop/types'

export interface UseAdminLotModalDataInterface {
  lotProducts: ProductList[] | undefined
  toggleValue: string
  unitAskingPrice: number
  setUnitAskingPrice: Dispatch<SetStateAction<number>>
  checkboxSelected: boolean
  hostingType: any
  contract: any
  auctionDate: any
  askPrice: any
  auctionType: any
  ContractIdOptions:
    | {
        label: string
        value: any
      }[]
    | undefined
  handleToggleChange: () => void
  handleAskPriceChange: () => void
  handleHeaderCheckboxToggle: () => void
}

export const useAdminLotModalData = (
  inventoryData: UseInventoryProductInterface,
  watch: any,
  setValue: any,
  reset: any,
  getValues: any
): UseAdminLotModalDataInterface => {
  const [lotProducts, setLotProducts] = useState<ProductList[] | undefined>(
    undefined
  )
  const [toggleValue, setToggleValue] = useState('Bid')
  const [unitAskingPrice, setUnitAskingPrice] = useState(0)
  const [checkboxSelected, setCheckboxSelected] = useState(false)
  const contractListLength = inventoryData.contractList?.length ?? 0
  const hostingType = watch('hosting')
  const contract = watch('contract')
  const auctionDate = watch('auctionStartDate')
  const askPrice = watch('askPrice')
  const auctionType = watch('auctionType')

  useEffect(() => {
    const filteredProducts = (inventoryData.productList || [])?.filter(
      product => inventoryData.selectedProductIds?.includes(product._id)
    )
    setLotProducts(filteredProducts)
  }, [inventoryData.productList, inventoryData.selectedProductIds])

  useEffect(() => {
    if (hostingType === 'with_hosting') {
      setToggleValue(() => {
        setValue('auctionType', 'Bid')
        return 'Bid'
      })
    } else {
      setToggleValue(() => {
        setValue('auctionType', 'Buy')
        return 'Buy'
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hostingType])

  useEffect(() => {
    const contractDetails: any = inventoryData.contractList?.find(
      (contractInfo: any) => contractInfo._id === contract
    )
    setValue(`location`, contractDetails?.location)
    setValue(`hostRate`, contractDetails?.hostRate)
    setValue(`depositPrice`, contractDetails?.depositPrice)
    setValue(`setupPrice`, contractDetails?.setupPrice)
    setValue(`expirationDate`, contractDetails?.expirationDate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contract])

  useEffect(() => {
    if (hostingType) {
      reset()
      setValue('hosting', hostingType)
      setUnitAskingPrice(0)
      setCheckboxSelected(false)
    }
  }, [hostingType, reset, setValue])

  const ContractIdOptions =
    contractListLength > 0
      ? inventoryData.contractList?.map((contract: any) => {
          return {
            label: `Contract ID - ${contract.contractId}`,
            value: contract._id
          }
        })
      : []

  const handleToggleChange = () => {
    setValue('auctionStartDate', '')
    setValue('auctionEndDate', '')
    setToggleValue(prevValue => {
      setValue('auctionType', prevValue === 'Buy' ? 'Bid' : 'Buy')
      return prevValue === 'Buy' ? 'Bid' : 'Buy'
    })
    setCheckboxSelected(false)
  }

  const handleAskPriceChange = () => {
    const askPrice = getValues('askPrice')
    const numericAskPrice = Number(askPrice)
    const calculatedUnitAskingPrice =
      numericAskPrice * inventoryData.selectedProductIds.length
    setUnitAskingPrice(calculatedUnitAskingPrice)
  }

  const handleHeaderCheckboxToggle = () => {
    setCheckboxSelected(prev => !prev)
  }

  return {
    lotProducts,
    toggleValue,
    unitAskingPrice,
    setUnitAskingPrice,
    checkboxSelected,
    hostingType,
    contract,
    auctionDate,
    askPrice,
    auctionType,
    ContractIdOptions,
    handleToggleChange,
    handleAskPriceChange,
    handleHeaderCheckboxToggle
  }
}

export default useAdminLotModalData

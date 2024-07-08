import { useState, useEffect } from 'react'
import useGet from 'hooks/useGet'
import { ContractList } from '@/utils/ApiTypes/ContractList'

export const usePublishData = (watch: any, setValue: any, reset: any) => {
  const [contractList, setContractList] = useState<ContractList[] | undefined>(
    undefined
  )
  const [toggleValue, setToggleValue] = useState('Bid')
  const [calenderClick, setCalenderClick] = useState(false)
  const [checkboxSelected, setCheckboxSelected] = useState(false)

  const { data: contractData, refetch: fetchContractData } = useGet(
    'contractData',
    `/api/getContracts`,
    true
  )

  useEffect(() => {
    fetchContractData()
  }, [fetchContractData])

  useEffect(() => {
    const contractsList = contractData?.data?.contracts || []
    setContractList(contractsList)
  }, [contractData])
  const contractTypeOptions =
    (contractList || [])?.length > 0
      ? contractList?.map(contract => {
          return {
            label: `Contract ID - ${contract.contractId}`,
            value: contract._id
          }
        })
      : []

  const hostingType = watch('hosting')

  const auctionDate = watch('auctionStartDate')

  const contract = watch('contract')
  const askPrice = watch('askPrice')

  const auctionType = watch('auctionType')

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
  }, [hostingType, setValue])

  useEffect(() => {
    const contractDetails: any = contractList?.find(
      (contractInfo: any) => contractInfo._id === contract
    )
    setValue(`location`, contractDetails?.location)
    setValue(`hostRate`, contractDetails?.hostRate)
    setValue(`depositPrice`, contractDetails?.depositPrice)
    setValue(`setupPrice`, contractDetails?.setupPrice)
    setValue(`expirationDate`, contractDetails?.expirationDate)
  }, [contractList, contract, setValue])

  useEffect(() => {
    if (hostingType) {
      reset()
      setValue('hosting', hostingType)
      setCheckboxSelected(false)
    }
  }, [hostingType, reset, setValue])

  const handleToggleChange = () => {
    setValue('auctionStartDate', '')
    setValue('auctionEndDate', '')
    setToggleValue(prevValue => {
      setValue('auctionType', prevValue === 'Buy' ? 'Bid' : 'Buy')
      return prevValue === 'Buy' ? 'Bid' : 'Buy'
    })
    setCheckboxSelected(false)
  }

  const handleHeaderCheckboxToggle = () => {
    setCheckboxSelected(prev => !prev)
  }

  return {
    contractList,
    contractTypeOptions,
    toggleValue,
    calenderClick,
    setCalenderClick,
    checkboxSelected,
    hostingType,
    auctionDate,
    contract,
    askPrice,
    auctionType,
    handleToggleChange,
    handleHeaderCheckboxToggle
  }
}

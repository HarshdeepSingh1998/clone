/* eslint-disable no-console */
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { selectContractData } from '@/store/contractSlice'
import { ContractList } from '@/utils/ApiTypes/ContractList'

export const useAddContractData = (
  isEditModalOpen: boolean,
  setValue: any,
  contractDetails: ContractList | undefined
) => {
  const contractData = useSelector(selectContractData)
  useEffect(() => {
    if (isEditModalOpen) {
      const foundContract = contractData?.data?.contracts?.find(
        (contract: ContractList) =>
          contract.contractId === contractDetails?.contractId
      )

      if (foundContract) {
        setValue('contractId', foundContract?.contractId || '')
        setValue('location', foundContract?.location || '')
        setValue('hostRate', (foundContract?.hostRate || '').toString())
        setValue('depositPrice', (foundContract?.depositPrice || '').toString())
        setValue('setupPrice', (foundContract?.setupPrice || '').toString())
        setValue(
          'expirationDate',
          dayjs(foundContract?.expirationDate).format('YYYY-MM-DD') || ''
        )

        if (foundContract?.document) {
          fetch(foundContract.document)
            .then(response => response.blob())
            .then(blob => {
              const file = new File([blob], 'contract.pdf', {
                type: 'application/pdf'
              })
              setValue('document', file)
            })
            .catch(error => {
              console.error('Error fetching document:', error)
            })
        }
      }
    }
  }, [isEditModalOpen, contractData, contractDetails, setValue])
}

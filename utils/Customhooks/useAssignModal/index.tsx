import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useGet from 'hooks/useGet'
import { UsersList } from '@/utils/ApiTypes/UsersList'
import { ContractList } from '@/utils/ApiTypes/ContractList'
import DEFAULT_PROFILE_URL from 'assets/images/images/default-profile.png'

export const useUserData = () => {
  const { productId } = useRouter().query as {
    productId: string
    page?: string
  }

  const [userDataList, setUserDataList] = useState<UsersList[] | undefined>(
    undefined
  )
  const [userPage, setUserPage] = useState(1)

  const { data: usersData, refetch: fetchUsersData } = useGet(
    `userList/${productId}`,
    `/api/getUsers?role=user&limit=10&status=&page=${userPage}&requiredProducts=${true}`,
    true
  )

  const totalCount = usersData?.data?.meta?.totalResults

  useEffect(() => {
    fetchUsersData()
  }, [fetchUsersData, userPage])

  useEffect(() => {
    const list = usersData?.data?.users || []
    setUserDataList(prev => [...(prev || []), ...list])
  }, [usersData, setUserDataList])

  useEffect(() => {
    if (!(userDataList || []).length) return
    if ((userDataList || []).length < totalCount) {
      setUserPage(prev => prev + 1)
    }
  }, [userDataList, totalCount])

  const [contractList, setContractList] = useState<ContractList[] | undefined>(
    undefined
  )

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

  const assignOption =
    (userDataList || [])?.length > 0
      ? (userDataList || [])?.map(user => {
          return {
            img: (
              <Image
                src={user?.profileImage || DEFAULT_PROFILE_URL}
                alt="profile-image"
                width={50}
                height={50}
              />
            ),
            label: user?.name || user.email,
            value: user?._id
          }
        })
      : []

  const contractTypeOptions =
    (contractList || [])?.length > 0
      ? contractList?.map(contract => {
          return {
            label: `Contract ID - ${contract.contractId}`,
            value: contract._id
          }
        })
      : []

  return {
    userDataList,
    contractList,
    totalCount,
    assignOption,
    contractTypeOptions
  }
}

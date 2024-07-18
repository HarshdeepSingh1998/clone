import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useGet from '@/hooks/useGet'
import { MemberDetailsList } from '@/utils/ApiTypes/MemberDetailsList'
import { MemberDetailsDataInterface } from '@/views/Admin/MembersPage/MemberDetailsPage/Desktop/types'

const useMemberDetails = (): MemberDetailsDataInterface => {
  const { query } = useRouter()
  const { memberId } = query as { memberId: string }

  const [loading, setLoading] = useState(false)
  const [displayedRows, setDisplayedRows] = useState<number>(5)
  const [active, setActive] = useState('1')
  const [memberDetailsData, setMemberDetailsData] = useState<
    MemberDetailsList | undefined
  >(undefined)

  const { data, refetch: fetchData } = useGet(
    `memberDetails/${memberId}`,
    `/api/getUserInfo?userId=${memberId}`,
    true
  )

  useEffect(() => {
    if (!data) return

    setMemberDetailsData(data.data)
  }, [data])

  const handleShowMoreRows = () => {
    setLoading(true)
    setDisplayedRows(displayedRows + 5)
    setLoading(false)
  }

  useEffect(() => {
    if (memberId) fetchData()
  }, [fetchData, memberId])

  return {
    loading,
    displayedRows,
    active,
    memberDetailsData,
    handleShowMoreRows,
    setActive,
    data
  }
}

export default useMemberDetails

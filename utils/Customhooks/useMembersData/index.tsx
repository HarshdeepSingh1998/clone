import { useState, useEffect, useCallback } from 'react'
import router from 'next/router'
import useGet from '@/hooks/useGet'
import { MemberDataInterface } from '@/views/Admin/MembersPage/Desktop/types'
import { MemberList } from '@/utils/ApiTypes/MemberList'
import EditModal from '@/assets/images/images/edit-modal.png'

const useMemberData = (): MemberDataInterface => {
  const [showAddMemberModal, setShowAddMemberModal] = useState(false)
  const [actionButtonData, setActionButtonData] = useState<any>([])
  const itemsPerPage = 10
  const [page, setPage] = useState(1)
  const [loadMoreButtonClicked, setLoadMoreButtonClicked] = useState(false)
  const [forceUpdate, setForceUpdate] = useState(false)
  const [memberList, setMemberList] = useState<MemberList[] | undefined>(
    undefined
  )
  const [selectedMember, setSelectedMember] = useState<MemberList | undefined>(
    undefined
  )
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const { data: membersList, refetch: fetchUsersData } = useGet(
    'membersList',
    `/api/getUsers?role=user&requiredProducts=true&page=${page}&limit=${itemsPerPage}`,
    true
  )

  const fetchUsers = useCallback(() => {
    fetchUsersData()
  }, [fetchUsersData])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers, page, forceUpdate])

  useEffect(() => {
    const list = membersList?.data?.users || []

    if (loadMoreButtonClicked) {
      setMemberList(prev => [...(prev || []), ...list])
      setLoadMoreButtonClicked(false)
    } else {
      setMemberList(list)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [membersList])

  const handleLoadMoreClick = () => {
    setPage(prev => prev + 1)
    setLoadMoreButtonClicked(true)
  }

  const addMember = () => {
    setShowAddMemberModal(true)
  }

  const closeAddProductModal = () => {
    setShowAddMemberModal(false)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleButtonClick = () => {
    selectedMember &&
      router.push(`/admin/members/memberDetails?memberId=${selectedMember._id}`)
    handleClose()
  }

  useEffect(() => {
    setActionButtonData([
      {
        key: 'view',
        title: 'View Details',
        handleClick: handleButtonClick,
        image: EditModal
      }
    ])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memberList, selectedMember])

  return {
    showAddMemberModal,
    memberList,
    handleLoadMoreClick,
    addMember,
    closeAddProductModal,
    forceUpdate,
    setForceUpdate,
    membersList,
    setAnchorEl,
    handleClose,
    anchorEl,
    open,
    actionButtonData,
    setSelectedMember
  }
}

export default useMemberData

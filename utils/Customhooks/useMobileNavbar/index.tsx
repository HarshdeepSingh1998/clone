/* eslint-disable no-unused-vars */
import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import { getParamValue, getsidebarData } from '@/components/Sidebar/data'
import { SideBarDataInterface } from '@/components/Sidebar/types'

const useMobileNavbar = (
  logout: () => Promise<void>,
  handleEditClick: () => void,
  handleChangePassword: () => void,
  userRole: string,
  setSideBarData: Dispatch<SetStateAction<SideBarDataInterface[]>>,
  setMenuSliderOpen: (isOpen: any) => void,
  setPdfUrl: Dispatch<SetStateAction<string>>,
  setOpenPdfViewer: (isOpen: any) => void
) => {
  const router = useRouter()
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  )
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  useEffect(() => {
    const pathSegments = router.pathname.split('/').filter(Boolean)
    const lastSegment = pathSegments[pathSegments.length - 1]
    setSideBarData(getsidebarData(userRole))
    setSelectedIndex(selectedItemIndex || getParamValue(lastSegment, userRole))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userRole, router.pathname, selectedItemIndex])

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index)
  }
  const handleLogoutClick = () => {
    logout()
  }
  const handleEditClickUser = () => {
    handleEditClick()
  }
  const handleChangePasswordUse = () => {
    handleChangePassword()
  }

  const openPdfView = (pdfURL: string) => {
    setMenuSliderOpen(false)
    if (pdfURL) {
      setPdfUrl(pdfURL)
      setOpenPdfViewer(true)
    }

    return
  }

  return {
    selectedIndex,
    handleItemClick,
    openPdfView,
    handleLogoutClick,
    handleEditClickUser,
    handleChangePasswordUse
  }
}

export default useMobileNavbar

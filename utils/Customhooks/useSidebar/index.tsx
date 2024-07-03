import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import { getParamValue, getsidebarData } from '@/components/Sidebar/data'
import { SideBarDataInterface } from '@/components/Sidebar/types'

const useCustomSidebar = (
  userRole: string,
  setOpenPdfViewer: Dispatch<SetStateAction<boolean>>,
  setSideBarData: Dispatch<SetStateAction<SideBarDataInterface[]>>
) => {
  const router = useRouter()
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  )
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const [pdfUrl, setPdfUrl] = useState<string>('')

  useEffect(() => {
    const pathSegments = router.pathname.split('/').filter(Boolean)
    const lastSegment = pathSegments[pathSegments.length - 1]
    setSideBarData(getsidebarData(userRole))
    setSelectedIndex(selectedItemIndex || getParamValue(lastSegment, userRole))
  }, [userRole, router.pathname, selectedItemIndex])

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index)
  }

  const openPdfView = (pdfURL: string) => {
    if (pdfURL) {
      setPdfUrl(pdfURL)
      setOpenPdfViewer(true)
    }
  }

  const closePdfModal = () => {
    setOpenPdfViewer(false)
  }

  return {
    selectedItemIndex,
    selectedIndex,
    pdfUrl,
    handleItemClick,
    openPdfView,
    closePdfModal
  }
}

export default useCustomSidebar

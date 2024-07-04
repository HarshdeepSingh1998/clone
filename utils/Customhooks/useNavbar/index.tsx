import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import useGet from '@/hooks/useGet'
import { selectUser } from '@/store/userSlice'
import DEFAULT_PROFILE_URL from 'assets/images/images/default-profile.png'

const useNavbar = (
  setMenuModalOpen: Dispatch<SetStateAction<boolean>>,
  setMenuSliderOpen: Dispatch<SetStateAction<boolean>>,
  setOpenPdfViewer: Dispatch<SetStateAction<boolean>>
) => {
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false)
  const [showEditProfileModal, setShowEditProfileModal] = useState(false)
  const [pdfUrl, setPdfUrl] = useState<string>('')
  const { refetch: fetchData } = useGet('logout', '/api/logout', true)
  const router = useRouter()
  const userData = useSelector(selectUser)
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData>(
    DEFAULT_PROFILE_URL
  )

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined
    const isModalShown = localStorage.getItem('isEditProfileModalShown')
    if (Number(userData?.data?.profileCompletion) === 0 && !isModalShown) {
      setShowEditProfileModal(true)
      setMenuModalOpen(true)
      localStorage.setItem('isEditProfileModalShown', 'true')
    } else {
      setSelectedImage(
        userData?.data?.personalData?.profileImage || DEFAULT_PROFILE_URL
      )
    }

    return () => clearTimeout(timeoutId)
  }, [setMenuModalOpen, userData])

  const handleEditProfileClick = (popupState: { close: () => void }): void => {
    setShowEditProfileModal(true)
    popupState.close()
    setMenuModalOpen(true)
  }

  const handleChangePassword = (): void => {
    setShowChangePasswordModal(true)
    setMenuModalOpen(true)
    setMenuSliderOpen(false)
  }

  const handleEditClick = (): void => {
    setShowEditProfileModal(true)
    setMenuModalOpen(true)
    setMenuSliderOpen(false)
  }

  const handleChangePasswordClick = (popupState: {
    close: () => void
  }): void => {
    setShowChangePasswordModal(true)
    popupState.close()
    setMenuModalOpen(true)
  }

  const logoutClick = async (): Promise<void> => {
    try {
      const response = await fetchData()
      if (response?.status === 'success') {
        toast.success('Logged out successfully')
        localStorage.clear()
        router.push('/signin')
      } else {
        toast.error('An error occurred. Please try again later.')
      }
    } catch (error) {
      toast.error('An error occurred during logout. Please try again.')
    }
  }

  const handleLogoutClick = (popupState: { close: () => void }): void => {
    logoutClick()
    popupState.close()
  }

  const closePdfModal = () => {
    setOpenPdfViewer(false)
  }

  return {
    showChangePasswordModal,
    setShowChangePasswordModal,
    showEditProfileModal,
    setShowEditProfileModal,
    selectedImage,
    setSelectedImage,
    handleEditProfileClick,
    handleChangePassword,
    handleEditClick,
    handleChangePasswordClick,
    handleLogoutClick,
    logoutClick,
    pdfUrl,
    setPdfUrl,
    closePdfModal
  }
}

export default useNavbar

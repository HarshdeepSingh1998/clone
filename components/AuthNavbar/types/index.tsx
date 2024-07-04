import { Dispatch, SetStateAction } from 'react'
import { StaticImageData } from 'next/image'
import { UserState } from '@/store/userSlice'

/* eslint-disable no-unused-vars */
export interface NavbarInterface {
  background?: string
  setMenuModalOpen: (isOpen: any) => void
  showMenuSlider: boolean
  openPdfViewer: boolean
  setMenuSliderOpen: (isOpen: any) => void
  setOpenPdfViewer: (isOpen: any) => void
  userRole: string
  userData: UserState
}

export interface RightContainerInterface {
  showMenuSlider: boolean
  setMenuSliderOpen: (isOpen: any) => void
  userRole: string
  selectedImage: string | StaticImageData
  handleEditProfileClick: (popupState: { close: () => void }) => void
  handleChangePasswordClick: (popupState: { close: () => void }) => void
  handleLogoutClick: (popupState: { close: () => void }) => void
}
export interface PopupInterface {
  userRole: string
  selectedImage: string | StaticImageData
  handleEditProfileClick: (popupState: { close: () => void }) => void
  handleChangePasswordClick: (popupState: { close: () => void }) => void
  handleLogoutClick: (popupState: { close: () => void }) => void
}

export interface MobileNavbarInterface {
  userRole: string
  handleLogoutClick: () => Promise<void>
  handleEditClick: () => void
  handleChangePassword: () => void
  setMenuSliderOpen: (isOpen: any) => void
  setPdfUrl: Dispatch<SetStateAction<string>>
  setOpenPdfViewer: (isOpen: any) => void
}
export interface SideBarDataInterface {
  route: string
  data: {
    id: number
    restricted: boolean
    title: string
    icon: JSX.Element
    link: string
  }[]
}

export interface ModalDataInterface {
  showChangePasswordModal: boolean
  setShowChangePasswordModal: Dispatch<SetStateAction<boolean>>
  setMenuModalOpen: Dispatch<SetStateAction<boolean>>
  showEditProfileModal: boolean
  setShowEditProfileModal: Dispatch<SetStateAction<boolean>>
  selectedImage: string | StaticImageData
  setSelectedImage: Dispatch<SetStateAction<string | StaticImageData>>
  userData: UserState
}

/* eslint-disable no-unused-vars */

import { StaticImageData } from 'next/image'
import { UserState } from '@/store/userSlice'
import { Dispatch, MutableRefObject, SetStateAction } from 'react'

export interface ModalInterface {
  showModal: (value: boolean) => void
  selectedImage: string | StaticImageData | File
  setSelectedImage: React.Dispatch<
    React.SetStateAction<string | StaticImageData>
  >
  userData: UserState
  setMenuModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface HeaderInterface {
  setRemoveImageClicked: Dispatch<SetStateAction<boolean>>
  setAddImageClicked: Dispatch<SetStateAction<boolean>>
  showModal: (value: boolean) => void
  setSelectedImage: Dispatch<SetStateAction<string | StaticImageData>>
  userData: UserState
  setMenuModalOpen: Dispatch<SetStateAction<boolean>>
}

export interface ProfileInterface {
  profileImageUpdated: string | StaticImageData | File
  hiddenFileInputRef: MutableRefObject<HTMLInputElement | null>
  setProfileImageUpdated: Dispatch<
    SetStateAction<string | StaticImageData | File>
  >
  setSelectedImage: Dispatch<SetStateAction<string | StaticImageData>>
  setAddImageClicked: Dispatch<SetStateAction<boolean>>
  setRemoveImageClicked: Dispatch<SetStateAction<boolean>>
  handleButtonClick: () => void
  handleRemoveImage: () => void
  removeButtonDisabled: boolean
}

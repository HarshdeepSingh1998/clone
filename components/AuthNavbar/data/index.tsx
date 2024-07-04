import React from 'react'
import { ModalDataInterface } from 'components/AuthNavbar/types'
import ChangePasswordModal from '@/components/ChangePasswordModal'
import EditProfileModal from '@/components/EditProfileModal'

export const getModalConfigurations = ({
  showChangePasswordModal,
  setShowChangePasswordModal,
  setMenuModalOpen,
  showEditProfileModal,
  setShowEditProfileModal,
  selectedImage,
  setSelectedImage,
  userData
}: ModalDataInterface) => [
  {
    isOpen: showChangePasswordModal,
    onRequestClose: () => setShowChangePasswordModal(false),
    ariaHideApp: false,
    style: {
      content: {
        overflow: 'hidden',
        height: '100%',
        width: '100%',
        inset: 0,
        padding: '0px'
      }
    },
    content: (
      <ChangePasswordModal
        showModal={setShowChangePasswordModal}
        setMenuModalOpen={setMenuModalOpen}
      />
    )
  },
  {
    isOpen: showEditProfileModal,
    onRequestClose: () => setShowEditProfileModal(false),
    ariaHideApp: false,
    style: { content: { overflow: 'hidden', height: '100%' } },
    content: (
      <EditProfileModal
        showModal={setShowEditProfileModal}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        userData={userData}
        setMenuModalOpen={setMenuModalOpen}
      />
    )
  }
]

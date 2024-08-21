/* eslint-disable no-unused-vars */
import { UseInventoryProductInterface } from '@/views/Admin/InventorymanagementPage/Desktop/types'
import { Dispatch, SetStateAction } from 'react'

export interface CsvModalProps {
  isModalOpen: boolean
  closeModal: Dispatch<SetStateAction<boolean>>
  inventoryData: UseInventoryProductInterface
  setPage: Dispatch<SetStateAction<number>>
  setForceUpdate: Dispatch<SetStateAction<boolean>>
  selectedFiles: FileList | null
  setSelectedFiles: Dispatch<SetStateAction<FileList | null>>
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  fileUploadError: string
  setFileUploadError: Dispatch<SetStateAction<string>>
}

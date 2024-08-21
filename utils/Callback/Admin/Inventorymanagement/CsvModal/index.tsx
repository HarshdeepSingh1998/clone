import { Dispatch, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import usePost from '@/hooks/usePost'
import { UseInventoryProductInterface } from '@/views/Admin/InventorymanagementPage/Desktop/types'

const useSubmitForm = (
  selectedFiles: FileList | null,
  inventoryPage: boolean,
  setPage: Dispatch<SetStateAction<number>>,
  setForceUpdate: Dispatch<SetStateAction<boolean>>,
  inventoryData: UseInventoryProductInterface
) => {
  const { mutateAsync } = usePost()
  const onSubmit = async (): Promise<void> => {
    const formData = new FormData()

    try {
      if (selectedFiles && selectedFiles?.length > 0) {
        formData.append('csv', selectedFiles[0])

        const response = await mutateAsync({
          url: '/api/bulkProductUpload',
          payload: formData
        })
        if (response.status === 200) {
          toast.success(`${response?.data?.message}`)
          if (inventoryPage) {
            setPage(1)
            setForceUpdate(prev => !prev)
          } else {
            inventoryData.fetchData()
          }

          inventoryData.setImportCsvModalVisible(false)
          inventoryData.setSelectedFiles(null)
        }
      } else {
        return
      }
    } catch (error: any) {
      if (!error?.response?.data?.message) {
        toast.error(`Oops! Something went wrong. Please try again later`)
      } else {
        toast.error(`${error?.response?.data?.message}`)
      }
    }
  }

  return { onSubmit }
}

export default useSubmitForm

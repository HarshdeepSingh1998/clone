/* eslint-disable no-console */
import { StaticImageData } from 'next/image'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import { dataURLtoBlob } from 'utils/HelperFunctions/HandleDataUrlToBlob'
export const handleImageChange = (
  event: ChangeEvent<HTMLInputElement>,
  setProfileImageUpdated: Dispatch<
    SetStateAction<string | File | StaticImageData>
  >,
  setSelectedImage: Dispatch<SetStateAction<string | StaticImageData>>,
  setAddImageClicked: Dispatch<SetStateAction<boolean>>,
  setRemoveImageClicked: Dispatch<SetStateAction<boolean>>
): void => {
  const files = event.target.files

  if (files && files.length > 0) {
    const file = files[0]

    if (file.type === 'image/png') {
      const reader = new FileReader()

      const fileSizeExceeded = Array.from(files).every(
        file => file.size > 2 * 1024 * 1024
      )

      if (fileSizeExceeded) {
        toast.error(`Maximum file size allowed is ${2}MB`)
        return
      }

      reader.onload = e => {
        const result = e.target?.result as string | null
        if (result) {
          const blob = dataURLtoBlob(result)
          const imageFile = new File([blob], file.name, { type: file.type })
          const imageURL = URL.createObjectURL(imageFile)
          setProfileImageUpdated(imageFile)
          setSelectedImage(imageURL)
          setAddImageClicked(true)
          setRemoveImageClicked(false)
        } else {
          console.error('Failed to read file.')
        }
      }

      reader.readAsDataURL(file)
    } else {
      console.error('Invalid file type. Please select a PNG image.')
    }
  } else {
    console.error('No file selected.')
  }
}

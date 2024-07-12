/* eslint-disable no-console */
import { toast } from 'react-toastify'
import { useState, useEffect } from 'react'
import Image from 'next/image'
// import { useRouter } from 'next/router'
import usePost from '@/hooks/usePost'
import { ProductList } from '@/utils/ApiTypes/ProductList'

interface AddProductInterface {
  productDetails: ProductList | null
  watch: any
}

const useAddProduct = ({ productDetails, watch }: AddProductInterface) => {
  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const [modelName, setModelName] = useState('')
  const [power, setPower] = useState('')
  const [hashRate, setHashRate] = useState('')
  const [manufacturer, setManufacturer] = useState<null | string>(null)
  const watchedModelName = watch('modelName')
  const watchedPower = watch('power')
  const watchedHashRate = watch('hashRate')
  const watchedManufacturer = watch('manufacturer')
  const [files, setFiles] = useState<File[] | FileList | string>([])
  const { mutateAsync } = usePost()

  useEffect(() => {
    setModelName(watchedModelName)
    setPower(watchedPower)
    setHashRate(watchedHashRate)
    setManufacturer(watchedManufacturer)
  }, [watchedModelName, watchedPower, watchedHashRate, watchedManufacturer])

  useEffect(() => {
    if (productDetails && productDetails.images) {
      setSelectedImages([...productDetails.images])
      convertUrlsToFiles(productDetails.images)
        .then(fileArray => {
          setFiles(fileArray)
        })
        .catch(error => {
          console.error('Error converting image URLs to Files:', error)
        })
    }
  }, [productDetails])

  const convertUrlsToFiles = async (imageUrls: string[]): Promise<File[]> => {
    const files: File[] = []

    for (const imageUrl of imageUrls) {
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const file = new File([blob], imageUrl.split('/').pop() || 'image.png', {
        type: blob.type
      })

      files.push(file)
    }

    return files
  }

  const handleEditImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const fileArrayFormat: File[] | string = Array.from(e.target.files)
      const allowedFormats = ['image/png', 'image/jpeg', 'image/jpg']
      const isValidFormat = fileArrayFormat.every(file =>
        allowedFormats.includes(file.type)
      )

      if (!isValidFormat) {
        toast.error('Only PNG/JPEG/JPG files are allowed')
        return
      }

      const fileSizeExceeded = fileArrayFormat.every(
        file => file.size > 2 * 1024 * 1024
      )

      if (fileSizeExceeded) {
        toast.error(`Maximum file size allowed is ${2}MB`)
        return
      }

      if (e.target.files?.length > 5 || selectedImages?.length >= 5) {
        toast.error(`Maximum 5 images can be uploaded`)
        return
      }

      try {
        const formData = new FormData()
        fileArrayFormat.forEach(file => {
          formData.append('images', file)
        })
        const response = await mutateAsync({
          url: `/api/uploadProductImages/${productDetails?._id}`,
          payload: formData
        })
        if (response?.data.status === 200) {
          setSelectedImages(prev => [...prev, ...response.data.data.imageUrls])
          setFiles(prevFiles => [...prevFiles, ...fileArrayFormat] as File[])
        }
      } catch (error) {
        toast.error('An error occurred.')
      }
    }
  }

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArrayFormat: File[] | string = Array.from(e.target.files)
      const allowedFormats = ['image/png', 'image/jpeg', 'image/jpg']
      const isValidFormat = fileArrayFormat.every(file =>
        allowedFormats.includes(file.type)
      )

      if (!isValidFormat) {
        toast.error('Only PNG/JPEG/JPG files are allowed')
        return
      }

      const fileSizeExceeded = fileArrayFormat.every(
        file => file.size > 2 * 1024 * 1024
      )

      if (fileSizeExceeded) {
        toast.error(`Maximum file size allowed is ${2}MB`)
        return
      }

      if (e.target.files?.length > 5 || selectedImages?.length >= 5) {
        toast.error(`Maximum 5 images can be uploaded`)
        return
      }

      setFiles(prevFiles => [...prevFiles, ...fileArrayFormat] as File[])
      const fileArray: string[] = Array.from(e.target.files)?.map(file =>
        URL.createObjectURL(file)
      )

      setSelectedImages(prev => {
        if (productDetails) {
          return [...prev.concat(fileArray)]
        } else {
          return [...prev.concat(fileArray)]
        }
      })

      Array.from(e.target.files)?.map((file: File) =>
        URL.revokeObjectURL(file as unknown as string)
      )
    }
  }

  const handleRemoveImage = (index: number) => {
    setSelectedImages(prev => {
      const newImages = [...prev]
      newImages.splice(index, 1)
      return newImages
    })

    setFiles((prevFiles: any) => {
      const newFiles = [...prevFiles]
      newFiles.splice(index, 1)
      return newFiles
    })
  }

  const renderPhoto = (source: string[]) => {
    return source?.map((photo, index) => (
      <div key={photo} className="image-container">
        <Image src={photo} alt="photo" width={48} height={48} />
        <div className="tooltip" onClick={() => handleRemoveImage(index)}>
          &times;
        </div>
      </div>
    ))
  }

  return {
    selectedImages,
    files,
    handleEditImageChange,
    handleImageChange,
    handleRemoveImage,
    renderPhoto,
    modelName,
    power,
    hashRate,
    manufacturer
  }
}

export default useAddProduct

/* eslint-disable no-unused-vars */
import { Dispatch, MutableRefObject, SetStateAction, useState } from 'react'
import { StaticImageData } from 'next/image'
import { toast } from 'react-toastify'
import usePost from '@/hooks/usePost'
import usePatch from '@/hooks/usePatch'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import { UserState, fetchUser } from '@/store/userSlice'
import DEFAULT_PROFILE_URL from 'assets/images/images/default-profile.png'

const useSubmitForm = (
  selectedImage: string | StaticImageData | File,
  userData: UserState,
  showModal: (value: boolean) => void,
  setMenuModalOpen: Dispatch<SetStateAction<boolean>>,
  setSelectedImage: Dispatch<SetStateAction<string | StaticImageData>>,
  hiddenFileInputRef: MutableRefObject<HTMLInputElement | null>
) => {
  const { mutateAsync } = usePost()
  const { mutateAsync: mutatePatchAsync } = usePatch()
  const dispatch: AppDispatch = useDispatch()
  const [disable, setDisable] = useState(false)
  const [addImageClicked, setAddImageClicked] = useState(false)
  const [removeImageClicked, setRemoveImageClicked] = useState(false)
  const [profileImageUpdated, setProfileImageUpdated] = useState(selectedImage)
  const removeButtonDisabled = !userData?.data?.personalData?.profileImage
    ? true
    : false
  const handleButtonClick = (): void => {
    // setAddImageClicked(true)
    // setRemoveImageClicked(false)
    hiddenFileInputRef.current?.click()
  }
  const handleRemoveImage = (): void => {
    setRemoveImageClicked(true)
    setAddImageClicked(false)
    setSelectedImage(DEFAULT_PROFILE_URL)
    setProfileImageUpdated(DEFAULT_PROFILE_URL)
  }

  const onSubmit = async (values: {
    name?: string
    phonenumber?: string
    username?: string
  }): Promise<void> => {
    setDisable(true)
    const formData = new FormData()
    formData.set('image', profileImageUpdated as string)
    try {
      const response = await mutateAsync({
        url: '/api/userUpdate',
        payload: values.username
          ? {
              data: {
                name: values.name,
                phone: values.phonenumber || '',
                username: values.username
              }
            }
          : {
              data: {
                name: values.name,
                phone: values.phonenumber || ''
              }
            }
      })

      if (addImageClicked) {
        const imageUploadResponse = await mutateAsync({
          url: '/api/uploadUserImage',
          payload: formData
        })

        if (response.status === 200 && imageUploadResponse.status === 200) {
          toast.success(`${response?.data?.message}`)
          showModal(false)
          setMenuModalOpen(false)
        }
      } else if (removeImageClicked) {
        const imageRemoveResponse = await mutatePatchAsync({
          url: '/api/removeUserImage'
        })

        if (response.status === 200 && imageRemoveResponse.status === 200) {
          toast.success(`${response?.data?.message}`)
          showModal(false)
          setMenuModalOpen(false)
        }
      } else if (response.status === 200) {
        toast.success(`${response?.data?.message}`)
        showModal(false)
        setMenuModalOpen(false)
      }

      dispatch(fetchUser())
      setAddImageClicked(false)
      setRemoveImageClicked(false)
    } catch (error) {
      const axiosError = error as any
      const errorMessage = axiosError?.response?.data?.message
      if (errorMessage) {
        toast.error(errorMessage)
      } else {
        toast.error('Oops! Something went wrong. Please try again later')
      }
    } finally {
      setDisable(false)
    }
  }

  return {
    onSubmit,
    disable,
    removeButtonDisabled,
    handleButtonClick,
    handleRemoveImage,
    setRemoveImageClicked,
    setAddImageClicked,
    profileImageUpdated,
    setProfileImageUpdated
  }
}

export default useSubmitForm

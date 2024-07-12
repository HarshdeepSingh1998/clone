/* eslint-disable no-unused-vars */
export interface UseAddProductInterface {
  selectedImages: string[]
  files: File[] | FileList | string
  handleEditImageChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => Promise<void>
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>
  handleRemoveImage: (index: number) => void
  renderPhoto: (source: string[]) => JSX.Element[]
  modelName: string
  power: string
  hashRate: string
  manufacturer: string | null
}

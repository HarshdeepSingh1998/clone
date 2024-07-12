// useContactForm.ts

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ADD_PRODUCT_VALIDATION_SCHEMA } from '@/utils/Validation/Admin/AddProductPage'
import { ProductList } from '@/utils/ApiTypes/ProductList'

export const useAddProductForm = (productDetails: ProductList | null) => {
  return useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(ADD_PRODUCT_VALIDATION_SCHEMA),
    defaultValues: {
      modelName: productDetails?.modelName || '',
      serialNumber: productDetails?.serialNumber || '',
      description: productDetails?.description || '',
      manufacturer: productDetails?.manufacturer || '',
      efficiency: productDetails?.efficiency || null,
      power: productDetails?.power || null,
      cooling: productDetails?.cooling || '',
      hashRate: productDetails?.hashRate || null,
      productStatus: productDetails?.productStatus || '',
      availability: productDetails?.availability || ''
    }
  })
}

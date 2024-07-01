// userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductList } from '@/utils/ApiTypes/ProductList'

interface ProductState {
  productDetails: ProductList | null
}

const initialState: ProductState = {
  productDetails: null
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductDetail: (
      state,
      action: PayloadAction<ProductList>
    ) => {
      state.productDetails = action.payload
    }
  }
})

export const { setProductDetail } = productSlice.actions

export default productSlice.reducer

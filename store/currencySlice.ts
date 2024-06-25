import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
  toggleValue: string
}

const initialState: UIState = {
  toggleValue: 'Bid'
}

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setToggleValue(state, action: PayloadAction<string>) {
      state.toggleValue = action.payload
    }
  }
})

export const { setToggleValue } = currencySlice.actions
export default currencySlice.reducer

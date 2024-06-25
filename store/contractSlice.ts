import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

interface ContractState {
  data: any // Define the type of your contract data
  loading: boolean
  error: string | null
}

const initialState: ContractState = {
  data: null,
  loading: false,
  error: null
}

const contractSlice = createSlice({
  name: 'contract',
  initialState,
  reducers: {
    fetchContractStart(state) {
      state.loading = true
      state.error = null
    },
    fetchContractSuccess(state, action: PayloadAction<any>) {
      state.loading = false
      state.data = action.payload
    },
    fetchContractFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {
  fetchContractStart,
  fetchContractSuccess,
  fetchContractFailure
} = contractSlice.actions

export const selectContractData = (state: RootState) => state.contract.data
export const selectContractLoading = (state: RootState) =>
  state.contract.loading
export const selectContractError = (state: RootState) => state.contract.error

export default contractSlice.reducer

// userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface MachineState {
  machineId: string | null
}

const initialState: MachineState = {
  machineId: null
}

const machineSlice = createSlice({
  name: 'machine',
  initialState,
  reducers: {
    setMachineDetail: (state, action: PayloadAction<string>) => {
      state.machineId = action.payload
    }
  }
})

export const { setMachineDetail } = machineSlice.actions

export default machineSlice.reducer

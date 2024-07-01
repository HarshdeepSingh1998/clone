import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import router from 'next/router'
import axiosInstance from '@/services/axiosInstance'
import { GetUserInterface } from '@/utils/ApiTypes/getUser'

export interface UserState {
  data: GetUserInterface | null
  status: 'idle' | 'loading' | 'error'
}

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading'
})

const initialState: UserState = {
  data: null, // Assuming null as the initial state
  status: STATUSES.IDLE
}

export const fetchUser = createAsyncThunk<GetUserInterface | null>(
  'user/fetch',
  async () => {
    const url = '/api/getUserInfo'
    try {
      const token = localStorage.getItem('token')
      const response = await axiosInstance.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (response?.data?.data?.role === 'admin') {
        router.push('/admin/marketplace')
      } else if (
        response?.data?.data?.role === 'user' &&
        !response?.data?.data?.termsAgreed
      ) {
        router.push('/user/terms')
      } else {
        router.push('/user/marketplace')
      }

      return response?.data?.data as GetUserInterface
    } catch (error) {
      return null
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<GetUserInterface | null>) {
      state.data = action.payload
    },
    setStatus(state, action: PayloadAction<'idle' | 'loading' | 'error'>) {
      state.status = action.payload
    },
    resetUserState(state, action: PayloadAction<GetUserInterface | null>) {
      state.data = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, state => {
        state.status = STATUSES.LOADING
      })
      .addCase(
        fetchUser.fulfilled,
        (state, action: PayloadAction<GetUserInterface | null>) => {
          state.data = action.payload
          state.status = STATUSES.IDLE
        }
      )
      .addCase(fetchUser.rejected, state => {
        state.status = STATUSES.ERROR
      })
  }
})

export const { setUser, setStatus, resetUserState } = userSlice.actions

export const selectUser = (state: { user: UserState }) => state.user

export default userSlice.reducer

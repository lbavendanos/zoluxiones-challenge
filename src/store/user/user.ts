import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './../index'

export interface User {
  name?: string
  gender?: string
  documentType?: string
  documentNumber?: string
  phone?: string
  placa?: string
  term?: boolean
}

interface UserState {
  value: User
}

const initialState: UserState = {
  value: {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.value = action.payload
    },
    removeUser: (state) => {
      state.value = {}
    },
  },
})

export const { addUser, removeUser } = userSlice.actions

export const selectUser = (state: RootState) => state.user.value

export default userSlice.reducer

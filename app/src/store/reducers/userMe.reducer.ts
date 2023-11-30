import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { InitialStateType, UserType } from '@/types'

const initialState: InitialStateType<UserType> = {
  loading: false,
  data: {} as UserType
}

const reducers = {
  setUserMe: (state: InitialStateType<UserType>, action: PayloadAction<UserType>) => {
    state.data = action.payload
  },
  setProfilePicture: (state: InitialStateType<UserType>, action: PayloadAction<string>) => {
    state.data.profilePicture = action.payload
  },
  setLoadingUserMe: (state: InitialStateType<UserType>, action: PayloadAction<boolean>) => {
    state.loading = action.payload
  },
}

const userMeSlice = createSlice({
  name: 'userMe',
  initialState,
  reducers
})

export const { setUserMe, setLoadingUserMe, setProfilePicture } = userMeSlice.actions

export default userMeSlice.reducer
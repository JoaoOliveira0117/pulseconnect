import { createSlice } from "@reduxjs/toolkit";
import { InitialStateType, UserType } from "@/types";

const initialState: InitialStateType<UserType> = {
	loading: false,
	data: {} as UserType
}

const reducers = {
	setUserMe: (state: InitialStateType<UserType>, action: any) => {
		state.data = action.payload
	},
	setLoadingUserMe: (state: InitialStateType<boolean>, action: any) => {
		state.loading = action.payload
	}
}

const userMeSlice = createSlice({
	name: 'userMe',
	initialState,
	reducers
})

export const { setUserMe, setLoadingUserMe } = userMeSlice.actions

export default userMeSlice.reducer
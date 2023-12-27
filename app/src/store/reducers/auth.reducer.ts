import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthType, InitialStateType } from '@/types';

const initialState: InitialStateType<AuthType> = {
	loading: false,
	data: {} as AuthType,
};

const reducers = {
	setAccessToken: (state: InitialStateType<AuthType>, action: PayloadAction<string>) => {
		state.data.accessToken = action.payload;
	},
	setLoadingAuth: (state: InitialStateType<AuthType>, action: PayloadAction<boolean>) => {
		state.loading = action.payload;
	},
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers,
});

export const { setAccessToken, setLoadingAuth } = authSlice.actions;

export default authSlice.reducer;

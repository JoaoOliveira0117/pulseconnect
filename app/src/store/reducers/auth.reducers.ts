import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthType, InitialStateType } from '@/types';

const initialState: InitialStateType<AuthType> = {
	loading: false,
	fetching: false,
	data: {} as AuthType,
};

const reducers = {
	setAccessToken: (state: InitialStateType<AuthType>, { payload }: PayloadAction<string>) => {
		state.data.accessToken = payload;
	},
	setLoadingAuth: (state: InitialStateType<AuthType>, { payload }: PayloadAction<boolean>) => {
		state.loading = payload;
	},
	setFetchingAuth: (state: InitialStateType<AuthType>, { payload }: PayloadAction<boolean>) => {
		state.fetching = payload;
	},
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers,
});

export const { setAccessToken, setLoadingAuth, setFetchingAuth } = authSlice.actions;

export default authSlice.reducer;

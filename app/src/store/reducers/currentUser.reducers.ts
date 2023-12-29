import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialStateType, UserType } from '@/types';

type CurrentUserInitialState = InitialStateType<UserType | null>;

const initialState: CurrentUserInitialState = {
	loading: false,
	fetching: false,
	data: null,
};

const reducers = {
	setCurrentUser: (state: CurrentUserInitialState, { payload }: PayloadAction<UserType | null>) => {
		state.data = payload;
	},
	setLoadingCurrentUser: (state: CurrentUserInitialState, { payload }: PayloadAction<boolean>) => {
		state.loading = payload;
	},
	setFetchingCurrentUser: (state: CurrentUserInitialState, { payload }: PayloadAction<boolean>) => {
		state.fetching = payload;
	},
};

const currentUserSlice = createSlice({
	name: 'currentUser',
	initialState,
	reducers,
});

export const { setCurrentUser, setLoadingCurrentUser, setFetchingCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;

import { AnyAction, ThunkAction, configureStore } from '@reduxjs/toolkit'
import userMeReducer from './reducers/userMe.reducer'

const store = configureStore({
	reducer: {
		userMe: userMeReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.getState
export type AppThunkDispatch = ThunkAction<void, {}, {}, AnyAction>

export default store

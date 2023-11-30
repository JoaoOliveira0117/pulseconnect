import { AnyAction, ThunkAction, configureStore } from '@reduxjs/toolkit'
import userMeReducer from './reducers/userMe.reducer'
import postsReducer from './reducers/posts.reducer'

const store = configureStore({
  reducer: {
    userMe: userMeReducer,
    posts: postsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunkDispatch = ThunkAction<void, object, object, AnyAction>

export default store

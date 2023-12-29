import { AnyAction, ThunkAction, configureStore } from '@reduxjs/toolkit';
import postsReducers from './reducers/posts.reducers';
import authReducers from './reducers/auth.reducers';
import currentUserReducers from './reducers/currentUser.reducers';
import repliesReducers from './reducers/replies.reducers';

const store = configureStore({
	reducer: {
		auth: authReducers,
		currentUser: currentUserReducers,
		posts: postsReducers,
		replies: repliesReducers,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkAction<void, object, object, AnyAction>;

export default store;

import { AnyAction, ThunkAction, configureStore } from '@reduxjs/toolkit';
import userMeReducer from './reducers/userMe.reducer';
import trendingPostsReducer from './reducers/trendingPosts.reducer';
import personalPostsReducer from './reducers/personalPosts.reducer';
import commentReducer from './reducers/comment.reducer';
import authReducer from './reducers/auth.reducer';

const store = configureStore({
	reducer: {
		auth: authReducer,
		userMe: userMeReducer,
		trendingPosts: trendingPostsReducer,
		personalPosts: personalPostsReducer,
		comment: commentReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkAction<void, object, object, AnyAction>;

export default store;

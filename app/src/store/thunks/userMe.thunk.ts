import { Dispatch } from '@reduxjs/toolkit';
import { getUserMe, postUserProfilePicture } from '@/services/user';
import { setLoadingUserMe, setProfilePicture, setUserMe } from '../reducers/userMe.reducer';
import { UserType } from '@/types';

const getUserMeAction = (cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setUserMe({} as UserType & void));
	dispatch(setLoadingUserMe(true));
	try {
		const { data, errors } = await getUserMe(cookie);
		if (errors) {
			throw errors;
		}

		return await dispatch(setUserMe(data));
	} catch (err) {
		dispatch(setUserMe({} as UserType & void));
		return err;
	} finally {
		dispatch(setLoadingUserMe(false));
	}
};

const removeUserMeAction = () => async (dispatch: Dispatch) => {
	dispatch(setLoadingUserMe(true));
	await dispatch(setUserMe({} as UserType & void));
	dispatch(setLoadingUserMe(false));
};

const updateUserMeProfilePictureAction = (file: FormData, cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setLoadingUserMe(true));
	try {
		const { body, errors } = await postUserProfilePicture(file, cookie);
		if (errors) {
			throw errors;
		}

		return await dispatch(setProfilePicture(body.profilePicture as string));
	} catch (err) {
		return err;
	} finally {
		dispatch(setLoadingUserMe(false));
	}
};

export { getUserMeAction, removeUserMeAction, updateUserMeProfilePictureAction };

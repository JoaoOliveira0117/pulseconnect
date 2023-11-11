import {  Dispatch } from "@reduxjs/toolkit";
import { getUserMe } from "@/services/user";
import { setLoadingUserMe, setUserMe } from "../reducers/userMe.reducer";
import { UserType } from "@/types";

const getUserMeAction = (cookie?: string) => async (dispatch: Dispatch) => {
	dispatch(setUserMe({} as UserType & void));
	dispatch(setLoadingUserMe(true));
	try {
		const { data, errors } = await getUserMe(cookie);
		if (errors) {
			throw errors;
		}

		return await dispatch(setUserMe(data.user));
	} catch (err) {
		dispatch(setUserMe({} as UserType & void));
		return err
	} finally {
		dispatch(setLoadingUserMe(false));
	}
};

const removeUserMeAction = () => async (dispatch: Dispatch) => {
	dispatch(setLoadingUserMe(true));
	try {
		return await dispatch(setUserMe({} as UserType & void));
	} catch (err) {
		dispatch(setUserMe({} as UserType & void));
		return err
	} finally {
		dispatch(setLoadingUserMe(false));
	}
}

export { getUserMeAction, removeUserMeAction }
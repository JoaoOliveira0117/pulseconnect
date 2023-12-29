/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

type FnProps<T> = (dispatch: Dispatch, ...rest: any[]) => Promise<T>;

type LoadingProps = (loading: boolean) => AnyAction;
type FetchingProps = (fetching: boolean) => AnyAction;

const dispatchHelper =
	<T>(fn: FnProps<T>, setLoading: LoadingProps, setFetching?: FetchingProps) =>
	async (dispatch: Dispatch, ...rest: any[]) => {
		dispatch(setLoading(true));
		setFetching && dispatch(setFetching(true));
		try {
			return fn(dispatch, ...rest);
		} finally {
			dispatch(setLoading(false));
			setFetching && dispatch(setFetching(false));
		}
	};

export default dispatchHelper;

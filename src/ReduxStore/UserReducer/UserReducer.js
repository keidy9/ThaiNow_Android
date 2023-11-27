// export const userReducer = (state) => state.userReducer;

import { ACCOUNT_OBJ, PROFILE_OBJ } from "../../Util/constVar";
import {
	DISPATCH_PATCH_ACCOUNT_INFO,
	DISPATCH_PATCH_PROFILE_INFO,
} from "./UserActionType";

/**
 * helper method
 * @returns
 */
const getStorageProfile = () => {
	return {
		...(JSON.parse(localStorage.getItem(PROFILE_OBJ)) || {}),
	};
};

const getStorageAccount = () => {
	return {
		...(JSON.parse(localStorage.getItem(ACCOUNT_OBJ)) || {}),
	};
};

const initialState = {
	[`${PROFILE_OBJ}`]: getStorageProfile(),
	[`${ACCOUNT_OBJ}`]: getStorageAccount(),
};

const patchProfileInfo = (state, { profile = {}, replace = false }) => {
	const profileObj = replace
		? profile
		: {
				...state?.profile,
				...profile,
		  };

	return {
		...state,
		profileObj,
	};
};

const patchAccountInfo = (
	state,
	{ [`${ACCOUNT_OBJ}`]: account = {}, replace = false }
) => {
	const accountObj = {
		...(replace ? {} : state?.[`${ACCOUNT_OBJ}`]),
		...account,
	};

	return {
		...state,
		accountObj,
	};
};

// export const userReducer = (state) => state.userReducer;

const reducer = (state = initialState, action) => {
	switch (action?.type) {
		case DISPATCH_PATCH_PROFILE_INFO:
			return patchProfileInfo(state, action);
		case DISPATCH_PATCH_ACCOUNT_INFO:
			return patchAccountInfo(state, action);
		// default
		default:
			return state;
	}
};

export default reducer;

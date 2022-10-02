import { signinAxios } from "../../Axios/axiosPromise";
import { saveProfileInfo, saveUserInfo } from "../../Util/Util";
import { errorMessage, loadingMessage, successMessage } from "./useMessage";
import useUrls from "./useUrls";

function useSignin() {
	const { forwardUrl } = useUrls();

	/* return sample :
			Promise.resolve({
			access_token:
				"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4YjQ3YTI0Yy1kNjc3LTQ5YmMtOGU3Ni1iYTUzNDM4MmE2OWUiLCJpYXQiOjE2NjQyMjA1NjAsImV4cCI6MTY2NDIyMDYyMH0.xQiu0TPv7k18LMnsBL2RX9nyS6Im8FFVhYTWJ7GbOzzOdEkR4tpV6GkJQD7fxz2Ao9S7sieNqjdbSqVpSBoRzw",

			profile: {
				id: 1331,
				info: {
					picture: 'https://firebasestorage.googleapis.com/v0/b/mono-thainow.appspot.com/o/thainow-service-worker%2F0817531b-7c27-4a11-ae0a-c56b3d99abfd.png?alt=media',
					createdOn: '2022-09-26 12:26:56',
					name: '(626) 877-3222'
				},
				avgRating: 0,
				totalReview: 0,
				type: 'USER_PROFILE'
			},
		})
	
	*/
	const thainowSignin = (
		channel = "",
		value = "",
		password = "",
		forward = false,
		closeUrl = "",
		continueUrl = ""
	) => {
		loadingMessage("Signing in ...", 0);
		return signinAxios(channel, value, password)
			.then((res) => {
				// save user
				saveUserInfo({
					access_token: res.access_token,
				});

				// save profile
				saveProfileInfo(res.profile);

				successMessage("Signing in successfully", 1).then(() =>
					forward ? forwardUrl(closeUrl, continueUrl) : Promise.resolve()
				);

				// if (forward) {
				// 	;
				// } else return Promise.resolve();
			})
			.catch((e) => errorMessage(e));
	};

	return {
		thainowSignin,
	};
}

export default useSignin;

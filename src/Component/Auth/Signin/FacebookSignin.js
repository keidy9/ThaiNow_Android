import { Button } from "antd";
import i18next from "i18next";
import { useEffect } from "react";
import { svgFacebookLogo } from "../../../Assest/Asset";
import {
	FORWARD_SUCCESS,
	SIGNIN_CHANNEL_FACEBOOK,
} from "../../../Util/ConstVar";
import useMessage from "../../Hook/MessageHook/useMessage";
import useImage from "../../Hook/useImage";
import useSignin from "../../Hook/useSignin";

function FacebookSignin() {
	const { onSigninHandle } = useSignin();
	const { errorMessage } = useMessage();

	function getFacebookInfo() {
		// Calling Graph API after login to get user info
		window.FB.api("/me?fields=id,name,email", function (response) {
			if (!response || response.error) {
				errorMessage(response.error?.message);
			} else {
				onSigninHandle(
					SIGNIN_CHANNEL_FACEBOOK,
					response,
					true,
					FORWARD_SUCCESS
				);
				// console.log(response);
				// console.log("Successful login for: " + response.name);
			}
		});
	}
	const { image } = useImage();

	const statusChangeCallback = (response) => {
		// Called with the results from FB.getLoginStatus().
		if (response.status === "connected") {
			// Logged into your webpage and Facebook.
			getFacebookInfo();
		}
	};

	window.checkLoginState = () => {
		// Called when a person is finished with the Login Button.
		window.FB.getLoginStatus(function (response) {
			// See the onlogin handler
			statusChangeCallback(response);
		});
	};

	const facebookConnectLoaded = () => {
		// init facebook sdk
		window.fbAsyncInit = function () {
			window.FB.init({
				appId: "390544463217297",
				cookie: true,
				xfbml: true,
				version: "v18.0",
			});
		};
	};

	// load facebook sdk
	useEffect(() => {
		var id = "facebook-jssdk";
		var js;
		js = document.createElement("script");
		js.id = id;
		js.async = true;
		js.crossOrigin = "anonymous";
		js.type = "text/javascript";
		js.src = `https://connect.facebook.net/${
			i18next.language === "th" ? "th_TH" : "en_US"
		}/sdk.js`;

		document.getElementsByTagName("body")[0].appendChild(js);
		js.addEventListener("load", () => facebookConnectLoaded());
	});

	const app = (
		// <div
		// className="fb-login-button"
		// data-max-rows="1"
		// data-size="large"
		// data-button-type="continue_with"
		// data-use-continue-as="true"
		// data-scope="public_profile, email"
		// data-onlogin="checkLoginState();"
		// onClick={() => {
		// 	window.FB.login(statusChangeCallback, {
		// 		scope: "public_profile,email",
		// 	});
		// }}
		// >
		// </div>
		<Button className="border-0">
			{image({
				src: svgFacebookLogo,
				className: "custom-center d-block p-0",
				width: 36,
				onClick: () =>
					window.FB.login(statusChangeCallback, {
						scope: "public_profile,email",
					}),
			})}
		</Button>
	);
	return app;
}
export default FacebookSignin;
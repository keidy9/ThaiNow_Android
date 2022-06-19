import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import * as axiosPromise from "../../Axios/axiosPromise";
import ClassicSignupSuccess from "../../Component/Signup/ClassicSignupSuccess";

function SignupSuccessContainer() {
	const location = useLocation();
	let [searchParams] = useSearchParams();
	const navigate = useNavigate();

	const {
		channel = "",
		email = "",
		phone = "",
		password = "",
		username = "",
	} = location.state || {};

	console.log(location);

	const continueURL = searchParams.get("continue") || "/";

	const loginHanlder = () => {
		axiosPromise
			.getPromise(axiosPromise.loginPromise(channel, email, phone, password))
			.then(() => {
				navigate(continueURL, { replace: true });
			});
	};

	const app = (
		<ClassicSignupSuccess loginHanlder={loginHanlder} username={username} />
	);
	return app;
}

export default SignupSuccessContainer;

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../Component/Global/NotFoundPage";
import { patchProfileInfoPromise } from "../../redux-store/dispatchPromise";
import { THAINOW_PROFILE_OBJ } from "../../Util/ConstVar";
import { emptyProject } from "../../Util/Util";
import SignupRouteContainer from "../AuthContainer/SignupRouteContainer";
import UserSigninContainer from "../AuthContainer/UserSigninContainer";
import ErrorContainer from "../ErrorContainer";
import ProfileContainer from "../ProfilePanelContainer/ProfileContainer";
import SearchContainer from "../SearchContainer/SearchContainer";
import SwitchProfileContainer from "../SwitchProfileContainer";
import AuthContainer from "./AuthContainer";
import LayoutContainer from "./LayoutContainer";

function RouteBuilder() {
	// load profile
	const profile = useSelector(
		(state) => state.thainowReducer[`${THAINOW_PROFILE_OBJ}`] || {}
	);

	useEffect(() => {
		const storedProfile =
			JSON.parse(localStorage.getItem(THAINOW_PROFILE_OBJ)) || {};

		if (emptyProject(profile) && !emptyProject(storedProfile)) {
			patchProfileInfoPromise(JSON.parse(storedProfile));
		}
	}, [profile]);

	const routes = (
		<>
			<Routes>
				<Route path="/" element={<LayoutContainer />} />
				<Route path="/register/*" element={<SignupRouteContainer />} />
				<Route path="/signin" element={<UserSigninContainer />} />
				<Route path="/myprofile/:id" element={<ProfileContainer />} />
				<Route path="/search" element={<SearchContainer />} />
				<Route
					path="/switch-profile"
					element={
						<AuthContainer>
							<SwitchProfileContainer />
						</AuthContainer>
					}
				/>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	);

	const app = (
		<>
			<main id="main">{routes}</main>

			<div>
				<ErrorContainer />
			</div>
		</>
	);

	return app;
}

export default RouteBuilder;

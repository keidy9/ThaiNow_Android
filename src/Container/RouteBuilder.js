import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import NotFoundPage from "../Component/Global/NotFoundPage";
import LoginContainer from "./LoginContainer";
import ErrorContainer from "./ErrorContainer";
import LandingPageContainer from "./LandingPageContainer";
import Signup from "../Component/Signup/Signup";

import * as constVar from "../Util/ConstVar";
import { useState } from "react";
import { useEffect } from "react";
import ClassicSignupContainer from "./SignupContainer/ClassicSignupContainer";

function RouteBuilder() {
	const location = useLocation();

	const [user, setUser] = useState();

	const thaiNowObj = localStorage.getItem(constVar.THAINOW_USER_STORRAGE_OBJ);

	useEffect(() => {
		if (thaiNowObj && !user) setUser(JSON.parse(thaiNowObj));
	}, [thaiNowObj, user, location]);

	const routes = (
		<Routes>
			{/* <Route
				path="/"
				element={
					<Form className="m-5 w-50">
						<GoogleAutoComplete />
					</Form>
				}
			/> */}
			<Route path="/" element={<LandingPageContainer user={user} />} />
			<Route path="/login" element={<LoginContainer user={user} />} />
			<Route path="/signup" element={<Signup />}></Route>
			<Route path="/signup/classic" element={<ClassicSignupContainer />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);

	const app = (
		<>
			<main>{routes}</main>
			<div>
				<ErrorContainer />
			</div>
		</>
	);

	return app;
}

export default RouteBuilder;

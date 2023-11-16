import React from "react";
import { ButtonGroup, Col, Row } from "react-bootstrap";
import NavBrand from "../Navbar/NavBrand";

import IconLinkButton from "../Button/IconLinkButton";

import thainowLogo from "../../Assest/Image/Brand/thainowLogo.png";
import languageIcon from "../../Assest/Image/Icon/language-icon.png";
import notiIcon from "../../Assest/Image/Icon/noti-icon.png";
import HeaderProfileButton from "../Button/HeaderProfileButton";

function LandingPageHeader({ formatFrames = false, user }) {
	const navbrandObjList = [
		{
			src: thainowLogo,
			alt: "ThaiNow Logo",
			size: "100",
		},
	];

	const navbrandCompList = navbrandObjList.map((navbrand, idx) => (
		<NavBrand
			key={idx}
			src={navbrand.src}
			alt={navbrand.alt}
			width={navbrand.size}
			height={navbrand.size}
		/>
	));

	const headerRightButtonGroup = (
		<ButtonGroup aria-label="Navigation Button Group" className="custom-center">
			<IconLinkButton
				btnAriaLabel="Notification"
				btnVariant={`${formatFrames ? "secondary" : ""} `}
				imgSrc={notiIcon}
			/>

			<IconLinkButton
				btnAriaLabel="Language"
				btnVariant={`${formatFrames ? "secondary" : ""} `}
				imgSrc={languageIcon}
				btnClassName="mx-3"
			/>

			<HeaderProfileButton formatFrames={formatFrames} user={user} />
		</ButtonGroup>
	);

	const app = (
		<Row className={`${formatFrames ? "bg-success" : ""} px-5 my-4`}>
			<Col
				xs={4}
				id="header-left"
				className={`${formatFrames ? "bg-primary" : ""} `}
			>
				{navbrandCompList}
			</Col>

			<Col
				xs={8}
				id="header-right"
				className={`${formatFrames ? "bg-danger" : ""} custom-center-right`}
			>
				<div className="float-end ">{headerRightButtonGroup}</div>
			</Col>
		</Row>
	);
	return app;
}

export default LandingPageHeader;
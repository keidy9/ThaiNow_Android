import { Col, Divider, Flex, Row, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { svgLoginPic } from "../../../Assest/Asset";
import {
	REDIRECT_URI,
	REGISTER_PATH,
	SIGN_IN_PATH,
} from "../../../Util/constVar";
import TermAgreement from "../../Form/TermAgreement";
import useAuth from "../../Hook/AuthHook/useAuth";
import TopPageHeader from "../../Layout/Header/TopPageHeader";
import ThaiNowSignin from "./ThaiNowSignin";
import ThirdPartySignin from "./ThirdPartySignin";

function Signin() {
	const navigate = useNavigate();
	const { t } = useTranslation();

	const { auth } = useAuth();
	const [loading, setLoading] = useState(true);

	const Title = () => (
		<Typography.Title
			level={3}
			className="text-center"
			style={{ textTransform: "capitalize", minWidth: "30rem" }}
		>
			{t("signin_msg")}
			<span className="px-2" style={{ color: "#E94833" }}>
				ThaiNow
			</span>
			{t("account_msg")}
		</Typography.Title>
	);

	const NoAccountMessage = () => (
		<Row justify="center">
			<Col>
				<Space size={10} style={{ fontSize: "1rem" }}>
					<div style={{ textTransform: "capitalize" }}>
						{t("q_do_not_have_account_msg")}
					</div>
					<Typography.Link
						underline
						onClick={() =>
							navigate(
								`${REGISTER_PATH}?${REDIRECT_URI}=${SIGN_IN_PATH.slice(1)}`
							)
						}
						style={{ fontSize: "1rem", textTransform: "capitalize" }}
					>
						{t("register_now_msg")}
					</Typography.Link>
				</Space>
			</Col>
		</Row>
	);

	useEffect(() => {
		if (loading) {
			auth(false).catch(() => {
				setLoading(false);
			});
		}
	});

	const app = (
		<>
			<TopPageHeader />
			<Flex id="user-signin" justify="space-between">
				<img
					alt="avatar"
					src={svgLoginPic}
					style={{
						minHeight: "100vh",
					}}
				/>
				<Flex justify="center" className="w-100">
					<Flex
						vertical
						gap="large"
						style={{
							padding: "0 5rem",
							paddingTop: "3rem",
						}}
					>
						<Title />
						<NoAccountMessage />
						<Divider orientation="left">
							<span style={{ textTransform: "capitalize" }}>
								{t("continue_with_msg")}{" "}
							</span>
						</Divider>
						<ThirdPartySignin />
						<Divider>
							<span style={{ textTransform: "uppercase" }}>{t("or_msg")}</span>
						</Divider>
						<ThaiNowSignin />
						<TermAgreement />
					</Flex>
				</Flex>
			</Flex>
		</>
	);

	return app;
}

export default Signin;

import { MenuOutlined } from "@ant-design/icons";
import { Button, Dropdown, Form, Grid, Menu } from "antd";
import { useForm } from "antd/lib/form/Form";
import $ from "jquery";
import { useEffect, useState } from "react";
import { Navbar, Stack } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { imageGuestAvatar, imageThainowLogo } from "../../../Assest/Asset";
import { PICTURE_PROP, SEARCH_INPUT_PROP } from "../../../Util/ConstVar";
import { isObjectEmpty } from "../../../Util/Util";
import useSearchKeyword from "../../Hook/FormHook/useSearchKeyword";
import useCurrentLocation from "../../Hook/useCurrentLocation";
import useImage from "../../Hook/useImage";
import useProfile from "../../Hook/useProfile";
import OffCanvasProfile from "../../Profile/OffCanvasProfile";
import OffCanvasSearch from "../../Search/OffCanvasSearch";

function DefaultTopBar() {
	const [searchParams] = useSearchParams();
	const { useBreakpoint } = Grid;
	const screens = useBreakpoint();
	const [form] = useForm();
	const { image } = useImage();
	const { displayLocation } = useCurrentLocation(false);
	const { profile } = useProfile();
	const [showSearch, setShowSearch] = useState(false);
	const [showProfile, setShowProfile] = useState(false);

	const menu = (
		<Menu
			items={[
				{
					key: "1",
					label: (
						<a href="/help-center" className="p-2">
							Help Center
						</a>
					),
				},
				{
					key: "2",
					label: (
						<a href="/aboutus" className="p-2">
							About Us
						</a>
					),
				},
			]}
		/>
	);

	const keywordInput = useSearchKeyword(
		{
			onClick: () => setShowSearch(true),
		},
		{
			onChange: () => setShowSearch(true),
		}
	);

	useEffect(() => {
		$("#layout main").css("margin-top", $("#layout header").height() + 20);
		const keywordParam = searchParams.get("keywords") || "";
		form.setFieldValue(SEARCH_INPUT_PROP, keywordParam);
	});

	const app = (
		<>
			<Stack direction="horizontal" gap={4}>
				<Navbar.Brand
					as="div"
					className="tedkvn-center"
					onClick={() => window.open("/", "_self")}
					style={{ cursor: "pointer" }}
				>
					{image({
						src: imageThainowLogo,
						width: 55,
						className: "my-2",
					})}
				</Navbar.Brand>

				{!screens?.xs ? (
					<>
						<div id="searchbar" className="ms-auto w-100 ">
							<Stack direction="horizontal" gap={4}>
								<Form form={form} style={{ width: "60%" }}>
									{keywordInput}
								</Form>
								{displayLocation({
									onClick: () => setShowSearch(true),
									containerClassName: "text-white w-25 h-100",
								})}
							</Stack>
						</div>

						<Dropdown overlay={menu} placement="bottomRight" arrow>
							<Button className="tedkvn-center bg-white text-primary">
								<MenuOutlined />
							</Button>
						</Dropdown>
					</>
				) : (
					<div className="ms-auto">
						<div className="tedkvn-center">
							{image({
								width: 35,
								className: "rounded-circle bg-white",
								style: { padding: ".15rem" },
								src: isObjectEmpty(profile)
									? imageGuestAvatar
									: profile?.info?.[`${PICTURE_PROP}`],
								onClick: () => setShowProfile(true),
							})}
						</div>
					</div>
				)}
			</Stack>

			{screens?.xs && (
				<div
					id="mobile-searchbar"
					className="w-100 mt-1"
					style={{
						lineHeight: "normal",
					}}
				>
					<Form form={form}>{keywordInput}</Form>
					{displayLocation({
						onClick: () => setShowSearch(true),
						containerClassName: "w-75",
						iconStyle: { margin: "1rem .1rem" },
					})}
				</div>
			)}

			<OffCanvasSearch show={showSearch} onHide={() => setShowSearch(false)} />
			<OffCanvasProfile
				show={showProfile}
				onHide={() => setShowProfile(false)}
			/>
		</>
	);
	return app;
}

export default DefaultTopBar;
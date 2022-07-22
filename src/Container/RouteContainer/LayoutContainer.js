import { Stack } from "react-bootstrap";
import RightBar from "../../Component/RightBar/RightBar";
import TopBarNavigation from "../../Component/TopBarNavigation/TopBarNavigation";

function LayoutContainer() {
	const app = (
		<>
			<TopBarNavigation />
			<Stack
				direction="horizontal"
				className="w-100"
				gap={3}
				style={{ marginTop: "5rem" }}
			>
				<div id="left-bar" className="d-none d-md-block col-8 px-5"></div>
				<div id="right-bar" className="col-12 col-md-4 h-100 px-3">
					<RightBar />
				</div>
			</Stack>
		</>
	);

	return app;
}

export default LayoutContainer;

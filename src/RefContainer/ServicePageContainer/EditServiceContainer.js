import { isEmptyObject } from "jquery";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import usePageHeader from "../../Component/Hook/FormHook/usePageheader";
import { errorMessage, loadingMessage } from "../../Component/Hook/useMessage";
import usePost from "../../Component/Hook/usePost";
import useUrls from "../../Component/Hook/useUrls";
import EditDeal from "../../Component/PageLayout/EditService/EditDeal";
import EditHousing from "../../Component/PageLayout/EditService/EditHousing";
import EditJob from "../../Component/PageLayout/EditService/EditJob";
import EditMarketplace from "../../Component/PageLayout/EditService/EditMarketplace";
import SkeletonCard from "../../Component/Skeleton/SkeletonCard";
import { thainowReducer } from "../../redux-store/reducer/thainowReducer";
import {
	CREATE_PROP,
	DEAL_POST_TYPE_PROP,
	EDIT_PROP,
	FORWARD_CLOSE,
	FORWARD_SUCCESS,
	HOUSING_POST_TYPE_PROP,
	ID_PROP,
	JOB_POST_TYPE_PROP,
	MARKETPLACE_POST_TYPE_PROP,
	POST_OWNER_PROP,
	PROFILE_OBJ,
	SEARCH_DEAL,
	SEARCH_HOUSING,
	SEARCH_JOB,
	SEARCH_MARKETPLACE,
	SEARCH_TYPE_PROP,
} from "../../Util/ConstVar";
import AuthContainer from "../AuthContainer/AuthContainer";

function EditServiceContainer() {
	const location = useLocation();

	const {
		id = -1,
		[`${SEARCH_TYPE_PROP}`]: type = "",
		action = CREATE_PROP,
	} = useParams();
	const requestId = Number(id);

	const { [`${PROFILE_OBJ}`]: { [`${ID_PROP}`]: ownerId = null } = {} } =
		useSelector(thainowReducer);

	const { findService: findPost } = usePost();

	const [service, setService] = useState({});

	const fetchServiceType = () => {
		switch (type) {
			case SEARCH_DEAL:
				return DEAL_POST_TYPE_PROP;
			case SEARCH_JOB:
				return JOB_POST_TYPE_PROP;
			case SEARCH_HOUSING:
				return HOUSING_POST_TYPE_PROP;
			case SEARCH_MARKETPLACE:
				return MARKETPLACE_POST_TYPE_PROP;
			default:
				break;
		}
	};

	const { forwardUrl } = useUrls();

	const renderServicePage = (props = {}) => {
		switch (type) {
			case SEARCH_DEAL:
				return <EditDeal {...props} />;
			case SEARCH_JOB:
				return <EditJob {...props} />;
			case SEARCH_HOUSING:
				return <EditHousing {...props} />;
			case SEARCH_MARKETPLACE:
				return <EditMarketplace {...props} />;
			default:
				forwardUrl(FORWARD_CLOSE);
		}
	};

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});

		if (action === EDIT_PROP) {
			if (ownerId) {
				if (service?.[`${POST_OWNER_PROP}`]?.[`${ID_PROP}`] !== ownerId)
					errorMessage("Forbidden Access").catch(() =>
						forwardUrl(FORWARD_CLOSE)
					);
				findPost(requestId, ownerId, fetchServiceType()).then((res) =>
					res?.[`${POST_OWNER_PROP}`]?.[`${ID_PROP}`] !== ownerId
						? errorMessage("Forbidden Access").catch(() =>
								forwardUrl(FORWARD_CLOSE)
						  )
						: !isEmptyObject(res)
						? setService(res)
						: loadingMessage(
								"Loading.... If it is loading too long, please contact administrators or try again later!",
								0
						  )
				);
			}
		}
	}, [id, ownerId]);

	const header = usePageHeader(
		{
			title: "Modify Service ",
			className: "pb-2",
		},
		async () => {},
		FORWARD_SUCCESS
	);

	const app = (
		<AuthContainer continueUrl="/signin">
			{action === EDIT_PROP && !service?.[`${ID_PROP}`] ? (
				<SkeletonCard />
			) : (
				<>
					{header}
					{renderServicePage({
						ownerId: ownerId,
						editing: action === EDIT_PROP ? true : false,
						service: service,
					})}
				</>
			)}
		</AuthContainer>
	);
	return app;
}

export default EditServiceContainer;
import { Button } from "antd";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
	SEARCH_BUSINESS,
	SEARCH_DEAL,
	SEARCH_FILTER,
	SEARCH_HOUSING,
	SEARCH_JOB,
	SEARCH_MARKETPLACE,
	SEARCH_TYPE_PROP,
} from "../../../Util/ConstVar";
import ModalBusinessFilter from "./ModalBusinessFilter";
import ModalDealFilter from "./ModalDealFilter";
import ModalHousingFilter from "./ModalHousingFilter";
import ModalJobFilter from "./ModalJobFilter";
import ModalMarketplaceFilter from "./ModalMarketplaceFilter";

function SearchFilter({ buttonProps = {} } = {}) {
	const [searchParams] = useSearchParams();
	const searchTypeParam = searchParams.get(SEARCH_TYPE_PROP) || "";
	const filterParam = searchParams.get(SEARCH_FILTER) || false;

	const [openFilter, setOpenFilter] = useState(false);

	const fetchFilter = () => {
		const props = {
			open: openFilter,
			onHide: () => setOpenFilter(false),
		};

		switch (searchTypeParam) {
			case SEARCH_DEAL:
				return <ModalDealFilter {...props} />;
			case SEARCH_JOB:
				return <ModalJobFilter {...props} />;
			case SEARCH_HOUSING:
				return <ModalHousingFilter {...props} />;
			case SEARCH_MARKETPLACE:
				return <ModalMarketplaceFilter {...props} />;
			case SEARCH_BUSINESS:
				return <ModalBusinessFilter {...props} />;
		}
	};

	const filterButton = () => (
		<Button
			type="primary"
			className={`${!filterParam ? "bg-white text-dark" : "border-0"}`}
			style={{ borderRadius: "1rem" }}
			onClick={() => setOpenFilter(true)}
			{...buttonProps}
		>
			{filterParam ? "Filter Applied" : "Add Filter"}
		</Button>
	);

	const app = (
		<>
			{filterButton()}
			{openFilter && fetchFilter()}
		</>
	);
	return app;
}

export default SearchFilter;
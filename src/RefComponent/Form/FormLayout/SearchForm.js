import SearchInputFormControlContainer from "../../../Container/FormContainer/FormControlContainer/SearchFormControlContainer/SearchInputFormControlContainer";
import FormGroupControl from "../FormGroupControl/FormGroupControl";

import { Stack } from "react-bootstrap";
import * as asset from "../../../Assest/Asset";
import SearchLocationFormControlContainer from "../../../Container/FormContainer/FormControlContainer/SearchFormControlContainer/SearchLocationFormControlContainer";
import * as constVar from "../../../Util/ConstVar";
import LoadingButton from "../../Button/LoadingButton";
import AddressFromGroupControl from "../FormGroupControl/AddressFormGroupControl";

function SearchForm({ direction = "", gap = 3, isLoading = false }) {
	const searchInput = (
		<FormGroupControl
			withIcon={false}
			iconSrc={asset.icons[`${constVar.ICON_USER_READER}`]}
			RenderFormControl={SearchInputFormControlContainer}
			id="searchinput-topbar"
		/>
	);

	const searchLocation = (
		<AddressFromGroupControl
			withIcon={false}
			iconSrc={asset.icons[`${constVar.ICON_LOCATION}`]}
			RenderFormControl={SearchLocationFormControlContainer}
			placeholder="at street, city, or zipcode?"
			id="searchlocation-topbar"
		/>
	);

	const searchButton = (
		<LoadingButton
			id="searchbutton"
			isLoading={isLoading}
			withIcon={true}
			iconSrc={asset.icons[`${constVar.ICON_SEARCH_WHITE}`]}
			size="md"
			title="Search"
			buttonStyle={{ background: "#E94833" }}
			className="px-2"
		/>
	);

	const app = (
		<Stack
			{...(direction && { direction: direction })}
			gap={gap}
			className="w-100"
		>
			<div>{searchInput}</div>
			<div>{searchLocation}</div>
			<div>{searchButton}</div>
		</Stack>
	);

	return app;
}

export default SearchForm;
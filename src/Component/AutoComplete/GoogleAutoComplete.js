import { useCallback, useEffect, useState } from "react";
import DropDownFormControl from "../Form/FormControl/DropDownFormControl";

function GoogleAutoComplete({
	id = "",
	required = false,
	value = "",
	placeholder = "Address",
	onMergeStorageSession = () => {},
	onLoadDefaultValue = () => {},
}) {
	const [loading, setLoading] = useState(true);

	const [autoComplete, setAutoComplete] = useState({});

	const initAutocomplete = async () => {
		setAutoComplete(new window.google.maps.places.AutocompleteService());
	};

	const init = useCallback(() => {
		if (JSON.stringify(autoComplete) === "{}" && window.google) {
			initAutocomplete();
		}
	}, [autoComplete]);

	const getPlacePredictionPromise = (address) => {
		return autoComplete.getPlacePredictions({
			input: address,
			componentRestrictions: { country: "US" },
			types: ["geocode"],
		});
	};

	const [predictions, setPredictions] = useState([]);

	const onAddressChangeHandler = (description = "") => {
		// merge to storage session with description only, remove placeid
		onMergeStorageSession(description);
	};

	const onUpdatePredictionHanlder = (value, onSelect = false) => {
		const description = onSelect ? value.description : value || "";

		// update predictions
		if (onSelect || description === "") {
			setPredictions([]);
		} else {
			getPlacePredictionPromise(description).then((res) => {
				setPredictions(
					res.predictions.map((prediction) => {
						return {
							description: prediction.description,
							placeid: prediction.place_id,
						};
					})
				);
			});
		}
	};

	useEffect(() => {
		if (loading) {
			// init autocomplate
			init();

			setLoading(false);
		}
	}, [init, loading, setLoading, onLoadDefaultValue]);

	const app = !loading && (
		<DropDownFormControl
			{...(id && { id: id })}
			required={required}
			value={value}
			placeholder={placeholder}
			dropdownItems={predictions || []}
			onLoadDefaultValue={onLoadDefaultValue}
			onMergeStorageSession={onMergeStorageSession}
			onUpdatePrediction={onUpdatePredictionHanlder}
		/>
	);

	return app;
}

export default GoogleAutoComplete;

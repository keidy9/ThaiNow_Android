import { useSelector } from "react-redux";
import FormControlControlled from "../../../../Component/Form/FormControl/FormControlControlled";
import * as dispatchPromise from "../../../../redux-store/dispatchPromise";
import * as constVar from "../../../../Util/ConstVar";
import * as util from "../../../../Util/Util";

function CompanyInformalCheckFormControlContainer({
	id = "",
	className = "",
	required = false,
	disabled = false,
	storageObjName = constVar.THAINOW_COMPANY_SIGN_UP_OBJ,
}) {
	const informalStore = useSelector(
		(state) =>
			state.thainowReducer[`${storageObjName}`]?.[
				`${constVar.COMPANY_INFORMAL_PROP}`
			] || false
	);

	const getSessionIsOnline = () => {
		return (
			util.getSessionStorageObj(storageObjName)[
				`${constVar.COMPANY_INFORMAL_PROP}`
			] || false
		);
	};

	const updateReduxStoreIsOnline = (informalStore = false) => {
		dispatchPromise.patchSignupCompanyInfoPromise({
			[`${constVar.COMPANY_INFORMAL_PROP}`]: informalStore,
		});
	};

	const updateSessionIsOnline = (informalStore = false) => {
		util.saveToSessionStore(
			storageObjName,
			constVar.COMPANY_INFORMAL_PROP,
			informalStore
		);
	};

	const onClickHanlder = () => {
		// update store
		updateReduxStoreIsOnline(!informalStore);

		// update storage
		updateSessionIsOnline(!informalStore);
	};

	const onLoadDefaultValueHandler = () => {
		// get information from the first time load
		const isDefaultOnline = getSessionIsOnline();

		if (informalStore !== isDefaultOnline) {
			updateReduxStoreIsOnline(isDefaultOnline);
		}
	};

	// console.log(informalStore);

	const app = (
		<FormControlControlled
			{...(id && { id: id })}
			type="checkbox"
			label="My business doesn't have a physical location."
			className={`${className}`}
			required={required}
			disabled={disabled}
			onClick={onClickHanlder}
			onLoadDefaultValue={onLoadDefaultValueHandler}
			value={informalStore}
		/>
	);
	return app;
}

export default CompanyInformalCheckFormControlContainer;
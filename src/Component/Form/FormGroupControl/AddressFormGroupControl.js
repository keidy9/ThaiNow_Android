import React, { useState } from "react";
import { Form } from "react-bootstrap";

function AddressFromGroupControl({
	id = "",
	formGroupClassName = "",
	sessionStorageObjName = "",
	placeholder = "",
	required = false,
	displayWaningMessage = true,
	RenderFormControl = () => {},
}) {
	const [warningMessage, setWarningMessage] = useState("");

	const onAddressValidationHanlder = (isValidEmail = true) => {
		if (isValidEmail) setWarningMessage("");
		else setWarningMessage("Please select a valid address.");
	};

	const app = (
		<Form.Group className={`tedkvn-formGroupControl ${formGroupClassName}`}>
			<RenderFormControl
				{...(id && { id: id })}
				{...(placeholder && { placeholder: placeholder })}
				sessionStorageObjName={sessionStorageObjName}
				required={required}
				onAddressValidation={onAddressValidationHanlder}
			/>
			{displayWaningMessage && warningMessage.length > 0 && (
				<Form.Text className="text-muted">
					<span className="text-danger">{warningMessage}</span>
				</Form.Text>
			)}
		</Form.Group>
	);
	return app;
}

export default AddressFromGroupControl;
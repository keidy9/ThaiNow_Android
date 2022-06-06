import React, { useState } from "react";
import { Form, Row } from "react-bootstrap";
import PhoneFormControl from "../FormControl/PhoneFormControl";

function PhoneFromGroupControl({
	id = "",
	withLabel = true,
	label = "Phone",
	labelClassName = "",
	formGroupClassName = "",
	required = false,
	disabled = false,
	landlineWarning = false,
	displayWaningMessage = true,
	sessionStorageObjName = "",
}) {
	const [warningMessage, setWarningMessage] = useState("");

	const onPhoneValidationHanlder = (isValidPhone = true) => {
		if (isValidPhone) setWarningMessage("");
		else setWarningMessage("Sorry, your phone number is invalid.");
	};

	const app = (
		<Row>
			<Form.Group className={`tedkvn-formGroupControl ${formGroupClassName}`}>
				{withLabel && (
					<Form.Label
						{...(id && { htmlFor: id })}
						className={`formLabel ${labelClassName} ${
							required && "tedkvn-required"
						} }`}
					>
						{label}
					</Form.Label>
				)}

				<PhoneFormControl
					{...(id && { id: id })}
					required={required}
					disabled={disabled}
					onPhoneValidation={onPhoneValidationHanlder}
					sessionStorageObjName={sessionStorageObjName}
				/>

				{displayWaningMessage && warningMessage.length > 0 && (
					<Form.Text className="text-muted">
						<span className="text-danger">{warningMessage}</span>
					</Form.Text>
				)}

				{landlineWarning && (
					<Form.Group>
						<Form.Text className="text-mute">
							This phone is for login credential and OTP verification (if any){" "}
							<br />
							<small className="text-danger">
								Please don't use any landline phone number!
							</small>
						</Form.Text>
					</Form.Group>
				)}
			</Form.Group>
		</Row>
	);
	return app;
}

export default PhoneFromGroupControl;

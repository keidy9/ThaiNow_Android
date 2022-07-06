import { Form } from "react-bootstrap";
import LoadingButton from "../../Button/LoadingButton";

function SubmitButtonFormGroupControl({
	id = "",
	formGroupClassName = "",
	title = "Next",
	size = "md",
	isLoading = false,
	className = "",
	variant = "primary",
	customSubmit = false,
	withIcon = false,
	iconSrc = "",
	onClick = () => {},
	buttonStyle = "",
}) {
	const app = (
		<Form.Group className={`tedkvn-formGroupControl ${formGroupClassName}`}>
			<LoadingButton
				{...(id && { id: id })}
				size={size}
				className={`tedkvn-formNavigationBtn ${className}`}
				{...(!customSubmit && { type: "submit" })}
				{...(customSubmit && { onClick: onClick })}
				title={title}
				isLoading={isLoading}
				variant={variant}
				withIcon={withIcon}
				iconSrc={iconSrc}
				buttonStyle={buttonStyle}
			/>
		</Form.Group>
	);
	return app;
}

export default SubmitButtonFormGroupControl;

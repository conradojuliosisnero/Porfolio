import { useState } from "react";
import ButtonContact from "./Button.contact";
import Form from "./contac.me";

function MyForm() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		contactNumber: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const inputFields = [
		{ name: "firstName", placeholder: "", label: "first name", type: "text" },
		{ name: "lastName", placeholder: "", label: "last name", type: "text" },
		{ name: "email", placeholder: "", label: "email", type: "email" },
		{
			name: "contactNumber",
			placeholder: "",
			label: "contact number",
			type: "tel",
		},
		{ name: "message", placeholder: "", label: "message", type: "text" },
	];

	return (
		<Form className="form">
			<div className="flex">
				{inputFields.map((field) => (
					<label key={field.name}>
						<input
							className="input"
							type={field.type}
							placeholder={field.placeholder}
							required
							name={field.name}
							value={formData[field.name]}
							onChange={handleChange}
						/>
						<span>{field.label}</span>
					</label>
				))}
			</div>
			<ButtonContact />
		</Form>
	);
}

export default MyForm;

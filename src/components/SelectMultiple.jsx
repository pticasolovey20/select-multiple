import React from "react";

const options = [
	{ id: 1, label: "Real Estate / Construction" },
	{ id: 2, label: "Manufacturing" },
	{ id: 3, label: "Financial" },
	{ id: 4, label: "Consumer Products" },
	{ id: 5, label: "High Technology" },
	{ id: 6, label: "Retail Services" },
	{ id: 7, label: "Professional Services" },
	{ id: 8, label: "Health Care" },
	{ id: 9, label: "Transportation" },
	{ id: 10, label: "Raw Materials / Energy" },
	{ id: 11, label: "Other" },
];

const SelectMultiple = ({ register, errors }) => {
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
			<p>
				Please describe the main business or industry you are associated with or would like to be associated
				with within the community
			</p>

			{options.map(({ id, label }) => (
				<div key={id}>
					<input type="checkbox" />
					<span>{label}</span>
				</div>
			))}

			{errors?.select ? <span className="error">Please select your core business</span> : null}
		</div>
	);
};

export default SelectMultiple;

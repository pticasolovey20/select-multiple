import React from "react";
import DropDownTrigger from "../drop-down-trigger";
import DropDownItem from "../drop-down-item";
import styles from "./SelectMultiple.module.scss";

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

const SelectMultiple = ({ isOpen, setIsOpen, selected, setSelected, error }) => {
	const handleOpen = () => setIsOpen(!isOpen);

	const handleSelect = (label) => {
		if (selected.includes(label)) {
			setSelected(selected.filter((item) => item !== label));
		} else {
			setSelected([...selected, label]);
		}
	};

	return (
		<div className={styles.formRow}>
			<p>
				Please describe the main business or industry you are associated with or would like to be associated
				with within the community
			</p>

			<div className={styles.dropdownContainer} style={{ gap: selected.length > 0 && isOpen && "10px" }}>
				<div
					style={{
						borderBottom: selected.length > 0 && isOpen && "1px solid #b0b1b5",
						position: "relative",
						cursor: "pointer",
					}}
					onClick={handleOpen}
				>
					<div className={`${styles.customInput} ${isOpen || selected.length ? styles.focused : null}`}>
						{selected.map((element, index) => (
							<span key={element}>{`${element}${index < selected.length - 1 ? "," : ""} `}</span>
						))}
					</div>

					<span className={`${styles.floatingSpan} ${isOpen || selected.length ? styles.focused : null}`}>
						Choose your core business
					</span>

					<DropDownTrigger isOpen={isOpen} />
				</div>

				<div className={`${styles.dropdownList} ${isOpen ? styles.open : null}`}>
					<ul>
						{options.map((option) => (
							<DropDownItem key={option.id} selected={selected} handleSelect={handleSelect} {...option} />
						))}
					</ul>
				</div>
			</div>

			{error ? <span className={styles.errorMessage}>Please select your core business</span> : null}
		</div>
	);
};

export default SelectMultiple;

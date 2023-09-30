import React from "react";
import styles from "./DropDownItem.module.scss";

const DropDownItem = ({ selected, handleSelect, ...option }) => {
	const { id, label } = option;

	return (
		<li key={id} className={styles.dropdownItem}>
			<label className={styles.customCheckbox}>
				<input
					id={`custom-checkbox-${id}`}
					type="checkbox"
					checked={selected.includes(label)}
					onChange={() => handleSelect(label)}
				/>
				<span className={styles.checkmark}></span>
				<span className={styles.arrow}></span>
				{label}
			</label>
		</li>
	);
};

export default DropDownItem;

import React from "react";
import styles from "./DropDownTrigger.module.scss";

const DropDownTrigger = ({ isOpen, handleOpen }) => {
	return (
		<button className={styles.dropdownTrigger} onClick={handleOpen} type="button">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className={isOpen ? styles.arrowUp : styles.arrowDown}
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
			</svg>
		</button>
	);
};

export default DropDownTrigger;

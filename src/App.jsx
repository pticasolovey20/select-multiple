import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SelectMultiple from "./components/select-multiple";

const App = () => {
	const [selected, setSelected] = useState([]);
	const [error, setError] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (selected.length === 0) {
			setError(true);
			return;
		} else {
			setError(false);
			toast.success("Form has been submitted");
		}
	};

	return (
		<main>
			<Toaster />

			<form onSubmit={handleSubmit}>
				<SelectMultiple selected={selected} setSelected={setSelected} error={error} setError={setError} />

				<button type="submit" className="submit">
					apply now
				</button>
			</form>
		</main>
	);
};

export default App;

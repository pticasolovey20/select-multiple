import React from "react";
import { useForm } from "react-hook-form";

import SelectMultiple from "./components/SelectMultiple";

const App = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onChange" });

	const onSubmit = (data) => console.log(data);

	return (
		<main>
			<form onSubmit={handleSubmit(onSubmit)}>
				<SelectMultiple register={register} errors={errors} />
				<button type="submit">apply now</button>
			</form>
		</main>
	);
};

export default App;

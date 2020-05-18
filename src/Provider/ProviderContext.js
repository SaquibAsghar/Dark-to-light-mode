import React, { useState } from "react";
import ThemeContext from "../Context/ThemeContext";

export const ProviderContext = (props) => {
	const initialTheme = useState("light");

	return (
		<ThemeContext.Provider value={initialTheme}>
			{props.children}
		</ThemeContext.Provider>
	);
};

import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeTogglerButton = () => {
	const [themeMode, setThemeMode] = useContext(ThemeContext);
	return (
		<div>
			<button
				onClick={() => {
					setThemeMode(themeMode === "light" ? "dark" : "light");
				}}
			>
				Switch to {themeMode === "light" ? "Dark " : "Light "}mode
			</button>
		</div>
	);
};

export default ThemeTogglerButton;

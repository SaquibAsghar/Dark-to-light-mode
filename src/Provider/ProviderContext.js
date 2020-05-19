import React, { useState } from "react";
import ThemeContext from "../Context/ThemeContext";

export const ProviderContext = (props) => {
    const initialTheme = useState("light");
    // const [on, setOn] = useState(false)

	return (
        <ThemeContext.Provider value={initialTheme}>
            {/* <p>Turn Bulb {on ? "on" : "off"}</p>
            <button onClick={() => setOn(o => !on)}>Bulb {on ? "on": "off"}</button> */}
			{props.children}
		</ThemeContext.Provider>
	);
};

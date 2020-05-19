import { createContext } from "react";

const ThemeContext = createContext(["light", () => {}]);
// ["dark", () => { }]

export default ThemeContext;

import React, { Fragment } from "react";
import { HeroSection } from "./Components/HeroSection";
import { Header } from "./Components/Header";
import { ProviderContext } from "./Provider/ProviderContext";

export const App = () => {
	return (
		<ProviderContext>
			<Header />
			<HeroSection />
		</ProviderContext>
	);
};

export default App;

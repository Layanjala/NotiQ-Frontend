import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LandingSection from "./components/LandingSection";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<Navbar />
				<LandingSection />
			</div>
		</>
	);
}

export default App;

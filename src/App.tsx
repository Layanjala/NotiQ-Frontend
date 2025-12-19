import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import AuthLayout from "./Layouts/AuthLayout";
import Navbar from "./components/Navbar";
import LandingSection from "./Pages/LandingSection";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<Routes>
					{/* Pages WITH navbar */}
					<Route element={<MainLayout />}>
						<Route path="/" element={<LandingSection />} />
					</Route>

					{/* Pages WITHOUT navbar */}
					<Route element={<AuthLayout />}>
						<Route path="/login" element={<LogIn />} />
						<Route path="/signup" element={<SignUp />} />
					</Route>
				</Routes>
			</div>
		</>
	);
}

export default App;

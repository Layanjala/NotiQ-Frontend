import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import logo from "../assets/NotiQlogo.png";
import Buttons from "./Buttons";

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setMenuOpen(false); // close mobile menu after click
	};
	return (
		<div>
			<nav className="w-full bg-[#f9fafc] shadow">
				<div className="flex justify-between items-center h-24 max-w-screen-xl mx-auto px-4 text-black">
					<img src={logo} alt="Logo" className="w-20" />
					{/* <h1 className="font-baloo text-1xl">This should be Baloo 2</h1> */}

					<ul className="hidden md:flex space-x-6">
						<li
							className="hover:text-blue-500 cursor-pointer"
							onClick={() => scrollToSection("home")}
						>
							Home
						</li>
						<li
							className="hover:text-blue-500 cursor-pointer"
							onClick={() => scrollToSection("features")}
						>
							Features
						</li>
						<li
							className="hover:text-blue-500 cursor-pointer"
							onClick={() => scrollToSection("process")}
						>
							Process
						</li>
						<li
							className="hover:text-blue-500 cursor-pointer"
							onClick={() => scrollToSection("about")}
						>
							About
						</li>
					</ul>
					<div className="flex gap-2">
						<Buttons variant="primary" className="opacity-50 hover:opacity-100">
							Login
						</Buttons>
						<Buttons variant="primary">Sign Up</Buttons>
					</div>
					<div className="md:hidden">
						<button
							onClick={() => setMenuOpen(!menuOpen)}
							className="text-2xl focus:outline-none"
						>
							<FiMoreVertical />
						</button>
					</div>
				</div>
				{menuOpen && (
					<ul className="flex flex-col md:hidden bg-[rgba(249,250,252,0.8)] border-t border-gray-300 px-4 pt-3 pb-4 space-y-5 text-black shadow-lg">
						<li
							className="hover:text-blue-500 cursor-pointer"
							onClick={() => scrollToSection("home")}
						>
							Home
						</li>
						<li
							className="hover:text-blue-500 cursor-pointer"
							onClick={() => scrollToSection("features")}
						>
							Features
						</li>
						<li
							className="hover:text-blue-500 cursor-pointer"
							onClick={() => scrollToSection("how")}
						>
							How it Works
						</li>
						<li
							className="hover:text-blue-500 cursor-pointer"
							onClick={() => scrollToSection("about")}
						>
							About
						</li>
					</ul>
				)}
			</nav>
		</div>
	);
}

export default Navbar;

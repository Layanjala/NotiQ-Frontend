import React from "react";
import Buttons from "./Buttons";
import * as FaIcons from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import bear from "../assets/BearReading.png";

function LandingSection() {
	return (
		<div>
			<section
				id="home"
				className="min-h-screen bg-blue-100 flex items-start justify-start px-50 pt-10 pb-12"
			>
				<div className="w-full max-w-6xl -mt-(-12)">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
						{/* LEFT: Text block */}
						<div className="backdrop-blur-md bg-white/60 rounded-2xl p-8 shadow-lg">
							<h1 className="text-4xl font-bold mb-4 text-gray-900">
								Sync Your Thoughts.
							</h1>

							<p className="text-lg text-gray-700 leading-relaxed">
								Notiq unifies PDFs, annotations, and shared notes into a single
								collaborative space. Students can read together, add insights,
								and build on each other’s ideas—keeping knowledge structured,
								accessible, and up to date.
							</p>

							<div className="flex gap-4 pt-6">
								<Buttons
									variant="primary"
									className="flex items-center gap-2 hover:-translate-y-1 transition"
								>
									Get Started Free <FaIcons.FaArrowRight />
								</Buttons>

								<Buttons
									variant="nobg"
									className="flex items-center gap-2 border border-black/10 backdrop-blur-sm"
								>
									Watch Demo <FaRegCirclePlay />
								</Buttons>
							</div>
						</div>

						{/* RIGHT: Bear + stats */}
						<div className="flex flex-col items-center gap-12">
							{/* Floating bear */}
							<div className="relative">
								{/* soft glow */}
								<div className="absolute inset-0 rounded-full blur-3xl bg-blue-300/40 scale-110" />

								<img
									src={bear}
									alt="Notiq Bear"
									className="relative w-64 md:w-80 lg:w-140 mx-auto drop-shadow-2xl animate-breathe"
								/>
							</div>

							{/* Stats (NO background, only glow) */}
							<div className="relative flex gap-10 px-8 py-6">
								{/* glow behind stats */}
								<div className="absolute inset-0 blur-2xl bg-white/40 rounded-full" />

								<div className="relative text-center">
									<h2 className="text-3xl font-bold text-gray-900">12k+</h2>
									<p className="text-gray-600">Active Users</p>
								</div>

								<div className="relative text-center">
									<h2 className="text-3xl font-bold text-gray-900">5k+</h2>
									<p className="text-gray-600">PDFs Shared</p>
								</div>

								<div className="relative text-center">
									<h2 className="text-3xl font-bold text-gray-900">98%</h2>
									<p className="text-gray-600">Satisfaction</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				id="features"
				className="h-screen flex items-center justify-center bg-green-100"
			>
				<h1 className="text-4xl">Features Section</h1>
			</section>

			<section
				id="how"
				className="h-screen flex items-center justify-center bg-yellow-100"
			>
				<h1 className="text-4xl">How it Works Section</h1>
			</section>

			<section
				id="about"
				className="h-screen flex items-center justify-center bg-pink-100"
			>
				<h1 className="text-4xl">About Section</h1>
			</section>
		</div>
	);
}

export default LandingSection;

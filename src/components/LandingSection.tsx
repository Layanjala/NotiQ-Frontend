import React from "react";
import Buttons from "./Buttons";
import * as FaIcons from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import bear from "../assets/BearReading.png";
import friends from "../assets/SleepingFriends.png";
import group from "../assets/Group.jpeg";
import highlight from "../assets/highlight.png";
import colab from "../assets/Collab.png";
import frog from "../assets/Frog.png";
import porcupine from "../assets/Porcupine.png";
import earth from "../assets/SaveEarth.png";
import gardner from "../assets/Gardner.png";

function LandingSection() {
	return (
		<div className="bg-main-gradient">
			{/* bg-blue-100 */}
			<section
				id="home"
				className="relative flex items-start justify-start px-4 md:px-12 lg:px-50 pt-20 pb-12 z-10 shadow-[0_10px_30px_rgba(27,94,32,0.3)] mb-2 rounded-2xl border border-emerald-100 overflow-hidden group"
			>
				{/* Subtle animated background elements */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-emerald-50/30 animate-pulse" />
					<div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-50/20 animate-pulse delay-1000" />
					<div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-emerald-100/10 animate-pulse delay-500" />
				</div>

				<div className="w-full max-w-6xl relative z-20">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
						{/* LEFT: Text block with enhanced interactions */}
						<div className="backdrop-blur-md bg-white/60 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-white/50 group/card">
							<h1 className="text-6xl font-bold mb-4 text-gray-900 animate-fadeIn">
								Sync Your Thoughts.
								<span className="inline-block ml-2 animate-pulse">✨</span>
							</h1>

							<p className="text-lg text-gray-700 leading-relaxed mb-6">
								Notiq unifies PDFs, annotations, and shared notes into a single
								collaborative space. Students can read together, add insights,
								and build on each other's ideas—keeping knowledge structured,
								accessible, and up to date.
							</p>

							{/* Interactive feature dots */}
							<div className="flex gap-3 mb-6">
								{["PDF Sync", "Real-time Notes", "Collaborative"].map(
									(feature, i) => (
										<span
											key={feature}
											className="px-4 py-2 bg-emerald-50/50 rounded-full text-sm font-medium text-emerald-800 border border-emerald-100 hover:bg-emerald-100 hover:scale-105 transition-all duration-300 cursor-default hover:shadow-md"
											style={{ animationDelay: `${i * 200}ms` }}
										>
											{feature}
										</span>
									)
								)}
							</div>

							<div className="flex gap-4 pt-6">
								<Buttons
									variant="primary"
									className="flex items-center gap-2 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-200/50 group/btn animate-pulse-once"
								>
									<span>Get Started Free</span>
									<FaIcons.FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
								</Buttons>

								<Buttons
									variant="nobg"
									className="flex items-center gap-2 border border-black/10 backdrop-blur-sm hover:bg-white/80 hover:scale-105 transition-all duration-300"
								>
									<span>Watch Demo</span>
									<FaRegCirclePlay className="animate-pulse" />
								</Buttons>
							</div>
						</div>

						{/* RIGHT: Enhanced interactive bear and stats */}
						<div className="flex flex-col items-center gap-12">
							{/* Floating bear with PULSE animation */}
							<div className="relative group/bear">
								{/* Main pulse glow effect */}
								<div className="absolute inset-0">
									{/* Inner pulse ring */}
									<div className="absolute inset-0 rounded-full bg-blue-300/20 animate-pulse-slow scale-110" />
									{/* Outer pulse ring */}
									<div className="absolute inset-0 rounded-full bg-emerald-200/15 animate-pulse-slower scale-125" />
									{/* Static glow */}
									<div className="absolute inset-0 rounded-full bg-blue-300/40 blur-3xl scale-110" />
								</div>

								{/* Clickable bear image with gentle hover and PULSE */}
								<div className="relative animate-soft-pulse cursor-pointer hover:scale-105 transition-transform duration-500">
									<img
										src={bear}
										alt="Notiq Bear"
										className="w-64 md:w-80 lg:w-140 mx-auto drop-shadow-2xl"
										onClick={() => {
											// Add bear interaction if needed
											console.log("Bear clicked!");
										}}
									/>
								</div>

								{/* Floating chat bubble with pulse */}
								{/* <div className="absolute -top-8 -right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-emerald-100 opacity-0 group-hover/bear:opacity-100 transition-all duration-500 group-hover/bear:animate-soft-pulse">
									<p className="text-sm font-medium text-gray-700">
										Hi there! 👋
									</p>
									<div className="absolute -bottom-2 right-6 w-4 h-4 bg-white/90 transform rotate-45 border-r border-b border-emerald-100" />
								</div> */}

								{/* Small floating elements around bear */}
								<div className="absolute -top-4 left-4 w-6 h-6 rounded-full bg-emerald-300/30 animate-pulse delay-300" />
								<div className="absolute bottom-8 -right-4 w-4 h-4 rounded-full bg-blue-300/30 animate-pulse delay-700" />
							</div>

							{/* Interactive stats with pulse effects */}
							<div className="relative">
								{/* Pulse glow container */}
								<div className="absolute inset-0 blur-2xl bg-white/40 rounded-full animate-pulse-slow" />

								<div className="relative flex gap-8 md:gap-10 px-8 py-6">
									{[
										{
											value: "12k+",
											label: "Active Users",
											icon: "👥",
											delay: "0ms",
										},
										{
											value: "5k+",
											label: "PDFs Shared",
											icon: "📚",
											delay: "200ms",
										},
										{
											value: "98%",
											label: "Satisfaction",
											icon: "⭐",
											delay: "400ms",
										},
									].map((stat, index) => (
										<div
											key={stat.label}
											className="relative text-center group/stat cursor-default"
										>
											<div className="absolute -inset-3 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300" />
											<div className="relative">
												{/* Pulse animation for icons */}
												<div
													className="text-2xl mb-1 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300 group-hover/stat:animate-soft-pulse"
													style={{ animationDelay: stat.delay }}
												>
													{stat.icon}
												</div>
												{/* Value with gentle pulse on hover */}
												<h2 className="text-3xl font-bold text-gray-900 group-hover/stat:scale-110 transition-all duration-300 group-hover/stat:animate-soft-pulse">
													{stat.value}
												</h2>
												<p className="text-gray-600 group-hover/stat:text-emerald-700 transition-colors duration-300">
													{stat.label}
												</p>
											</div>
											{/* Pulsing underline on hover */}
											<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-emerald-400 group-hover/stat:w-16 transition-all duration-300 group-hover/stat:animate-pulse" />
										</div>
									))}
								</div>

								{/* Pulsing progress indicator */}
								<div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-emerald-100 rounded-full overflow-hidden">
									<div className="w-1/2 h-full bg-emerald-400 rounded-full animate-pulse" />
								</div>
							</div>

							{/* CTA hint with pulse */}
							<div className="flex items-center gap-2 text-sm text-gray-500">
								<span>Scroll to explore more</span>
								<svg
									className="w-4 h-4 animate-pulse"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 14l-7 7m0 0l-7-7m7 7V3"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* bg-[#e8fbc2]/60 */}
			<section
				id="features"
				className="relative bg-secondary-gradient shadow-[0_10px_30px_rgba(27,94,32,0.8)] mb-2 rounded-2xl border border-emerald-100 overflow-hidden"
			>
				{/* Decorative Elements */}
				<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-300 to-transparent opacity-60"></div>
				<div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-emerald-200/10 blur-3xl"></div>
				<div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-lime-200/10 blur-3xl"></div>

				<div className="relative w-full max-w-7xl mx-auto px-6 py-20">
					<div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] lg:gap-x-12 items-center">
						{/* LEFT IMAGE with enhanced container */}
						<div className="inline-block relative w-max mb-12 lg:mb-0">
							<div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-lime-400/20 rounded-3xl blur-xl"></div>
							{/* Floating elements around image */}
							<div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-300 rounded-full animate-pulse"></div>
							<div className="absolute -bottom-4 -left-4 w-6 h-6 bg-lime-300 rounded-full animate-pulse delay-300"></div>

							<img
								src={group}
								alt="Notiq Friends"
								className="relative block w-72 md:w-96 border-4 border-[#486018] rounded-2xl shadow-[0_25px_50px_-12px_rgba(27,94,32,0.6)] transform hover:scale-[1.02] transition-transform duration-300 z-10"
							/>

							{/* Image badge */}
							<div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-emerald-500 to-lime-500 text-white px-4 py-2 rounded-xl shadow-lg z-20">
								<span className="font-bold text-sm">Live Collaboration</span>
							</div>
						</div>

						{/* RIGHT CONTENT */}
						<div>
							{/* Enhanced Title */}
							<div className="relative mb-12">
								<h1 className="text-5xl font-bold text-[#6b8e23] mb-10 text-center lg:text-left relative z-10">
									What We Offer
									<div className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-24 h-1 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full"></div>
								</h1>
								<div className="absolute -top-4 -right-4 text-emerald-200 text-7xl opacity-20">
									✦
								</div>
							</div>

							{/* Enhanced CARDS with staggered animation */}
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
								{[
									{ title: "Upload & Share PDFs", img: friends },
									{ title: "Highlight & Comment", img: highlight },
									{ title: "Add Pages & Corrections", img: colab },
									{ title: "Study Smarter", img: frog },
								].map((item, i) => (
									<div
										key={i}
										className="group relative backdrop-blur-md bg-white/70 rounded-2xl border-2 border-emerald-300/50 p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center hover:border-emerald-400 hover:bg-white/80"
										style={{ animationDelay: `${i * 100}ms` }}
									>
										{/* Card accent */}
										<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-t-2xl"></div>

										{/* Hover effect background */}
										<div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-lime-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

										{/* Icon container with enhanced styling */}
										<div className="relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-4 shadow-md group-hover:shadow-lg transition-shadow duration-300">
											<img
												src={item.img}
												alt={item.title}
												className="w-full h-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
											/>
											{/* Icon glow effect */}
											<div className="absolute inset-0 bg-emerald-400/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
										</div>

										<h3 className="relative font-bold text-lg text-gray-800 mb-3 group-hover:text-emerald-800 transition-colors duration-300">
											{item.title}
											<div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-12 h-0.5 bg-emerald-400 rounded-full transition-all duration-300"></div>
										</h3>

										<p className="relative text-sm text-gray-600 leading-relaxed">
											Share ideas, collaborate instantly, and keep everything
											organized.
										</p>

										{/* Corner accent */}
										<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
											<div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Enhanced "Did You Know" section */}
					<div className="relative mt-16">
						{/* Background pattern */}
						<div className="absolute inset-0 rounded-2xl overflow-hidden">
							<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/5 rounded-full -translate-y-16 translate-x-16"></div>
							<div className="absolute bottom-0 left-0 w-40 h-40 bg-lime-200/5 rounded-full translate-y-20 -translate-x-20"></div>
						</div>

						<div className="relative backdrop-blur-md bg-white/70 rounded-2xl p-10 shadow-xl border-2 border-emerald-300/50 hover:border-emerald-400 transition-all duration-300 group">
							{/* Top decorative line */}
							<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-400 to-lime-400 w-32 h-2 rounded-full"></div>

							{/* Corner accents */}
							<div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-emerald-400 rounded-tl-lg opacity-50"></div>
							<div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-emerald-400 rounded-tr-lg opacity-50"></div>
							<div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-emerald-400 rounded-bl-lg opacity-50"></div>
							<div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-emerald-400 rounded-br-lg opacity-50"></div>

							<h1 className="text-4xl font-bold mb-6 text-[#6b8e23] text-center relative">
								Did You Know?
								<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full group-hover:w-24 transition-all duration-300"></div>
							</h1>

							<p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto relative z-10 p-2">
								<span className="inline-block transform -translate-y-1 mr-2 text-2xl text-emerald-500">
									✨
								</span>
								Students using collaborative study tools like NotiQ report a
								<span className="font-bold text-emerald-700 mx-1">
									40% improvement
								</span>
								in understanding complex topics and spend
								<span className="font-bold text-emerald-700 mx-1">
									30% less time
								</span>
								preparing for exams. Our polar bear mascot represents the calm,
								focused approach to studying that leads to success!
								<span className="inline-block transform translate-y-1 ml-2 text-2xl text-lime-500">
									🌟
								</span>
							</p>

							{/* Stats highlight */}
							<div className="flex justify-center gap-6 mt-8">
								<div className="bg-gradient-to-r from-emerald-50 to-lime-50 px-4 py-2 rounded-lg border border-emerald-200">
									<span className="font-bold text-emerald-700 text-lg">
										40%
									</span>
									<span className="text-gray-600 ml-2">
										Better Understanding
									</span>
								</div>
								<div className="bg-gradient-to-r from-lime-50 to-emerald-50 px-4 py-2 rounded-lg border border-lime-200">
									<span className="font-bold text-lime-700 text-lg">30%</span>
									<span className="text-gray-600 ml-2">Less Study Time</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* bg-yellow-100 */}
			<section
				id="process"
				className="relative mb-2 backdrop-blur-md bg-gradient-to-br from-emerald-50 to-white shadow-[0_12px_40px_rgba(27,94,32,0.25)] px-8 py-12 overflow-hidden rounded-2xl border border-emerald-100"
			>
				{/* Decorative background elements */}
				<div className="absolute top-0 left-0 w-64 h-64 bg-emerald-200/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

				{/* Title with decorative underline */}
				<div className="relative max-w-5xl mb-10">
					<h1 className="text-5xl font-bold text-[#a0522d] mb-4">
						Feel the <span className="text-[#e98a15]">Difference</span>
					</h1>
					<div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full mb-6"></div>
					<p className="text-gray-600 text-lg max-w-4xl">
						Transform your PDF collaboration experience with these powerful
						features designed for modern learners
					</p>
				</div>

				{/* Feature Grid with 5-3 layout */}
				<div className="relative max-w-7xl mb-12">
					{/* Top Row - 5 Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-6">
						{[
							{
								icon: "📚",
								title: "Collaborative PDF Management",
								desc: "Work together on documents in real-time",
								color: "bg-emerald-50 border-emerald-200",
							},
							{
								icon: "🖍️",
								title: "Interactive PDF Viewer",
								desc: "Highlight text & add sticky notes",
								color: "bg-blue-50 border-blue-200",
							},
							{
								icon: "💬",
								title: "Contextual Comments",
								desc: "Structured discussions within PDFs",
								color: "bg-purple-50 border-purple-200",
							},
							{
								icon: "🔄",
								title: "Version Tracking",
								desc: "Track changes and contributions",
								color: "bg-amber-50 border-amber-200",
							},
							{
								icon: "🔍",
								title: "Advanced PDF Search",
								desc: "Smart filtering across documents",
								color: "bg-rose-50 border-rose-200",
							},
						].map((feature, i) => (
							<div
								key={i}
								className={`${feature.color} rounded-xl border p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full `}
							>
								<div className="flex items-start space-x-4">
									<div className="text-3xl group-hover:scale-110 transition-transform duration-300">
										{feature.icon}
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors text-lg">
											{feature.title}
										</h3>
										<p className="text-sm text-gray-600">{feature.desc}</p>
									</div>
								</div>
								<div className="mt-4 pt-4 border-t border-gray-200/50">
									<div className="flex items-center text-xs text-gray-500">
										<span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
										<span>Available Now</span>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Bottom Row - 3 Cards (Centered) */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
						{[
							{
								icon: "📊",
								title: "Smart Overview",
								desc: "PDF metadata & analytics",
								color: "bg-cyan-50 border-cyan-200",
							},
							{
								icon: "⭐",
								title: "Contributor Recognition",
								desc: "Ratings and achievement system",
								color: "bg-violet-50 border-violet-200",
							},
							{
								icon: "⏱️",
								title: "Study Mode",
								desc: "Timer with cute study characters",
								color: "bg-pink-50 border-pink-200",
							},
						].map((feature, i) => (
							<div
								key={i}
								className={`${feature.color} rounded-xl border p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
							>
								<div className="flex items-start space-x-4">
									<div className="text-3xl group-hover:scale-110 transition-transform duration-300">
										{feature.icon}
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors text-lg">
											{feature.title}
										</h3>
										<p className="text-sm text-gray-600">{feature.desc}</p>
									</div>
								</div>
								<div className="mt-4 pt-4 border-t border-gray-200/50">
									<div className="flex items-center text-xs text-gray-500">
										<span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
										<span>Available Now</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Stats/Highlights Section - Centered and narrower */}
				<div className="max-w-3xl mx-auto mb-12 ml-50">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						<div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200">
							<div className="text-2xl font-bold text-emerald-700">99%</div>
							<div className="text-sm text-gray-600">User Satisfaction</div>
						</div>
						<div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200">
							<div className="text-2xl font-bold text-emerald-700">10x</div>
							<div className="text-sm text-gray-600">Faster Collaboration</div>
						</div>
						<div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200">
							<div className="text-2xl font-bold text-emerald-700">24/7</div>
							<div className="text-sm text-gray-600">Real-time Sync</div>
						</div>
						<div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200">
							<div className="text-2xl font-bold text-emerald-700">50+</div>
							<div className="text-sm text-gray-600">Active Features</div>
						</div>
					</div>
				</div>

				{/* Bottom-right Image with container - Fixed positioning */}
				<div className="absolute bottom-6 right-6 z-20">
					<div className="relative mb-10">
						{/* Floating animation container */}
						<div className="absolute -inset-4 bg-emerald-300/20 rounded-full animate-pulse"></div>
						<div className="absolute -inset-2 bg-emerald-400/10 rounded-full animate-ping"></div>

						{/* Image with decorative frame */}
						<div className="relative bg-gradient-to-br from-emerald-100 to-white p-4 rounded-2xl shadow-2xl border border-emerald-200">
							<img
								src={porcupine}
								alt="Collaborative Study Group"
								className="w-40 md:w-56 lg:w-64 rounded-xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500"
							/>

							{/* Speech bubble - Positioned to avoid overlap */}
							<div className="absolute -top-8 -left-32 z-30 bg-white px-4 py-3 rounded-2xl shadow-lg border border-gray-200 min-w-max">
								<div className="flex items-center">
									<div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
									<span className="text-sm font-medium text-gray-800">
										Let's study together!
									</span>
								</div>
								{/* Speech bubble pointer */}
								<div className="absolute -bottom-2 left-24 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-200"></div>

								{/* Additional decorative element */}
								<div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
									<div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Decorative corner accent */}
				<div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-emerald-400/10 to-transparent rounded-tl-full"></div>
			</section>
			{/* bg-pink-100 */}
			<section
				id="about"
				className="min-h-screen flex flex-col items-center justify-center px-4 md:px-12 lg:px-50 pt-10 pb-12 z-20 shadow-[0_10px_30px_rgba(27,94,32,0.8)] mb-2 rounded-2xl border border-emerald-100 overflow-hidden group"
			>
				{/* Title */}
				<div className="text-center mb-10">
					<h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FC954A] to-orange-300 mb-4">
						About Us
					</h1>
					<div className="w-24 h-1 bg-gradient-to-r from-[#FC954A] to-orange-300 mx-auto rounded-full"></div>
				</div>

				{/* First Row: Single Card with Image Left, Text Right */}
				<div className="max-w-6xl w-full mb-12 lg:mb-16">
					<div className="relative backdrop-blur-sm rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-white/10 p-8 shadow-2xl shadow-emerald-900/20 hover:shadow-emerald-900/30 transition-all duration-500">
						{/* Card inner glow */}
						<div className="absolute inset-0 bg-gradient-to-r from-[#FC954A]/5 via-transparent to-orange-300/5 rounded-3xl"></div>

						{/* Card content */}
						<div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
							{/* Image with Glow */}
							<div className="flex-shrink-0">
								<div className="relative">
									<div className="absolute -inset-4 bg-gradient-to-r from-[#FC954A]/30 to-orange-300/20 rounded-full blur-xl"></div>
									<img
										src={earth}
										alt="Earth"
										className="relative w-64 h-64 md:w-80 md:h-80 object-contain z-10"
									/>
								</div>
							</div>

							{/* Text Content */}
							<div className="flex-1">
								<div className="flex items-center gap-3 mb-6">
									<div className="w-3 h-12 bg-gradient-to-b from-[#FC954A] to-orange-300 rounded-full"></div>
									<h2 className="text-3xl md:text-4xl font-bold text-white">
										Digital Sustainability
									</h2>
								</div>
								<p className="text-[#1d6b33] text-xl leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
									This project promotes environmental sustainability by
									significantly reducing the need for printed academic
									materials. By enabling students to upload, share, annotate,
									and collaboratively improve digital PDF notes, the platform
									minimizes paper consumption and helps reduce tree cutting.
									Instead of repeatedly printing and rewriting study materials,
									users can reuse and enhance existing digital resources through
									comments, highlights, and appended notes.
								</p>

								{/* Decorative corner elements */}
								<div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#FC954A]/50 rounded-tr-2xl"></div>
								<div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#FC954A]/50 rounded-bl-2xl"></div>
							</div>
						</div>
					</div>
				</div>

				{/* Second Row: Single Card with Text Left, Image Right */}
				<div className="max-w-6xl w-full mb-12 lg:mb-16">
					<div className="relative backdrop-blur-sm rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-white/10 p-8 shadow-2xl shadow-emerald-900/20 hover:shadow-emerald-900/30 transition-all duration-500">
						{/* Card inner glow */}
						<div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 via-transparent to-green-300/5 rounded-3xl"></div>

						{/* Card content - reversed layout */}
						<div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
							{/* Text Content */}
							<div className="flex-1 order-2 lg:order-1">
								<div className="flex items-center gap-3 mb-6 ml-10">
									<div className="w-3 h-12 bg-gradient-to-b from-emerald-400 to-green-300 rounded-full mt-10"></div>
									<h2 className="text-3xl md:text-4xl font-bold text-white mt-10">
										Collaborative Improvement
									</h2>
								</div>
								<p className="text-[#e98a15] text-xl leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
									The collaborative nature of the platform improves learning
									efficiency, knowledge sharing, and academic quality, creating
									a sustainable and eco-friendly approach to modern education.
									We encourage users to share their thoughts, suggestions, and
									feedback to help us improve the platform further and support
									this initiative toward greener and smarter learning.
								</p>

								{/* Decorative corner elements */}
								<div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-emerald-400/50 rounded-tl-2xl"></div>
								<div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-emerald-400/50 rounded-br-2xl"></div>
							</div>

							{/* Image with Glow */}
							<div className="flex-shrink-0 order-1 lg:order-2">
								<div className="relative">
									<div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/30 to-green-300/20 rounded-full blur-xl"></div>
									<img
										src={gardner}
										alt="Gardner"
										className="relative w-64 h-64 md:w-80 md:h-80 object-contain z-10"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className="max-w-2xl w-full text-center mt-8">
					<div className="relative backdrop-blur-sm rounded-3xl border border-white/20 bg-gradient-to-br from-white/5 to-white/10 p-8 shadow-2xl shadow-emerald-900/20">
						{/* Subtle background pattern */}
						<div className="absolute inset-0 overflow-hidden rounded-3xl">
							<div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FC954A]/5 rounded-full blur-3xl"></div>
							<div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-400/5 rounded-full blur-3xl"></div>
						</div>

						<div className="relative">
							<p className="text-gray-900 text-lg mb-8">
								Join us in creating a sustainable future for education
							</p>
							<button className="px-12 py-4 bg-gradient-to-r from-[#FC954A] to-orange-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95 relative group">
								<span className="relative z-10">Get Started</span>
								<div className="absolute inset-0 bg-gradient-to-r from-[#FC954A] to-orange-500 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
							</button>

							{/* Decorative line */}
							<div className="mt-8 pt-8 border-t border-white/10">
								<div className="flex justify-center items-center gap-3">
									<div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#FC954A]/50"></div>
									<div className="w-2 h-2 rounded-full bg-[#FC954A] animate-pulse"></div>
									<div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-emerald-400/50"></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Decorative Elements */}
				<div className="mt-12 flex items-center gap-6">
					<div className="w-4 h-4 rounded-full bg-[#FC954A]/80 animate-pulse shadow-lg shadow-[#FC954A]/30"></div>
					<div className="w-4 h-4 rounded-full bg-emerald-400/80 animate-pulse shadow-lg shadow-emerald-400/30 delay-150"></div>
					<div className="w-4 h-4 rounded-full bg-orange-300/80 animate-pulse shadow-lg shadow-orange-300/30 delay-300"></div>
				</div>
			</section>
		</div>
	);
}

export default LandingSection;

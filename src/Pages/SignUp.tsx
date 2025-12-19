import React, { useState } from "react";
import logo from "../assets/NotiQlogo.png";
import porcupineR from "../assets/PorcupineReading.png";

function SignUp() {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Add your signup logic here
		console.log("Signup attempt:", formData);

		// Simulate API call
		setTimeout(() => {
			setIsSubmitting(false);
		}, 1000);
	};

	return (
		<div className="min-h-screen bg-secondary-gradient flex items-center justify-center p-4">
			{/* Main Card */}
			<div className="bg-emerald-gradient rounded-2xl shadow-xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row">
				{/* Left Side - Signup Form */}
				<div className="w-full md:w-1/2 p-8 md:p-10">
					<div className="mb-4">
						<h1 className="text-3xl font-bold text-gray-800 mb-2">
							Create Account
						</h1>
						<p className="text-gray-600">
							Join our community and start your journey
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-2">
						<div>
							<label
								className="block text-gray-700 text-sm font-medium mb-1"
								htmlFor="username"
							>
								Username
							</label>
							<input
								id="username"
								type="text"
								value={formData.username}
								onChange={handleChange}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
								placeholder="Choose a username"
								required
							/>
						</div>

						<div>
							<label
								className="block text-gray-700 text-sm font-medium mb-1"
								htmlFor="email"
							>
								Email Address
							</label>
							<input
								id="email"
								type="email"
								value={formData.email}
								onChange={handleChange}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
								placeholder="you@example.com"
								required
							/>
						</div>

						<div>
							<label
								className="block text-gray-700 text-sm font-medium mb-2"
								htmlFor="password"
							>
								Password
							</label>
							<input
								id="password"
								type="password"
								value={formData.password}
								onChange={handleChange}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
								placeholder="••••••••"
								required
								minLength={6}
							/>
							<p className="text-gray-500 text-xs mt-2">
								Must be at least 6 characters
							</p>
						</div>

						<div>
							<label
								className="block text-gray-700 text-sm font-medium mb-2"
								htmlFor="confirmPassword"
							>
								Confirm Password
							</label>
							<input
								id="confirmPassword"
								type="password"
								value={formData.confirmPassword}
								onChange={handleChange}
								className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
								placeholder="••••••••"
								required
							/>
						</div>

						<div className="flex items-center mb-4">
							<input
								type="checkbox"
								id="terms"
								className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
								required
							/>
							<label
								htmlFor="terms"
								className="ml-2 block text-sm text-gray-700"
							>
								I agree to the{" "}
								<a
									href="#"
									className="text-blue-600 hover:text-blue-800 font-medium"
								>
									Terms of Service
								</a>{" "}
								and{" "}
								<a
									href="#"
									className="text-blue-600 hover:text-blue-800 font-medium"
								>
									Privacy Policy
								</a>
							</label>
						</div>

						<button
							type="submit"
							disabled={isSubmitting}
							className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{isSubmitting ? (
								<span className="flex items-center justify-center">
									<svg
										className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
										></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
									Creating Account...
								</span>
							) : (
								"Sign Up"
							)}
						</button>
					</form>

					<div className="mt-6 text-center">
						<p className="text-gray-600">
							Already have an account?{" "}
							<a
								href="/login"
								className="text-blue-600 hover:text-blue-800 font-medium"
							>
								Sign In
							</a>
						</p>
					</div>

					<div className="mt-5">
						<div className="relative">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-gray-300"></div>
							</div>
							<div className="relative flex justify-center text-sm">
								<span className="px-2 bg-white text-gray-500">
									Or sign up with
								</span>
							</div>
						</div>

						<div className="mt-6 ">
							<button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
								<svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
									<path
										fill="#4285F4"
										d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
									/>
									<path
										fill="#34A853"
										d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
									/>
									<path
										fill="#FBBC05"
										d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
									/>
									<path
										fill="#EA4335"
										d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
									/>
								</svg>
								Google
							</button>
						</div>
					</div>
				</div>

				{/* Right Side - Motivational Quote Card */}
				<div className="w-full md:w-1/2 p-8 md:p-10 flex items-center justify-center bg-green-100 relative overflow-hidden">
					{/* Decorative elements */}
					<div className="absolute top-15 right-10 w-32 h-32 bg-blue-500 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
					<div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500 rounded-full -translate-x-20 translate-y-20 opacity-20"></div>

					{/* Main Quote Card */}
					<div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md border border-white/20 shadow-2xl">
						{/* Thought bubble style */}
						<div className="absolute -top-4 -right-4 w-16 h-16">
							<div className="absolute w-12 h-12 bg-white/20 rounded-full"></div>
							<div className="absolute w-8 h-8 bg-white/20 rounded-full top-2 right-2"></div>
							<div className="absolute w-6 h-6 bg-white/20 rounded-full top-4 right-4"></div>
						</div>

						{/* Quote content */}
						<div className="text-center">
							<div className="mb-0 bg-[#cadce3]/50 rounded-full w-max mx-auto">
								<img
									src={logo}
									alt="Quote Icon"
									className="w-50 h-50 mx-auto"
								/>
							</div>
							{/* Bottom welcome message */}
							<div className="mt-5 border-t border-white/20 mb-5">
								<div className="flex items-center justify-center ">
									<div className="mr-4">
										<div className="w-max mx-auto rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(40,98,73,0.6)] animate-bounce">
											<span className="text-white text-xl font-bold">
												{" "}
												<img
													src={porcupineR}
													alt="Porcupine Reading"
													className="w-20 h-20 "
												/>
											</span>
										</div>
									</div>
									<div className="text-left">
										<p className="text-[#30427f] font-semibold text-lg">
											Welcome back!
										</p>
										<p className="text-[#6478bc]">
											Have a productive day ahead!
										</p>
									</div>
								</div>
							</div>

							<h2 className="text-2xl md:text-3xl font-bold text-[rgb(40,98,73)] mb-4 leading-tight">
								The future belongs to those who believe in the beauty of their
								dreams.
							</h2>

							<p className="text-[#30677e] text-lg mb-4">
								Every great journey begins with a single step. Today is your day
								to start something amazing.
							</p>

							<div className="flex items-center justify-center">
								<div className="w-10 h-1 bg-[#30677e]/50 rounded-full"></div>
								<div className="mx-4">
									<p className="text-[#307f6a] font-medium">
										Eleanor Roosevelt
									</p>
									<p className="text-[#307f6a] text-sm">
										Inspirational Speaker
									</p>
								</div>
								<div className="w-10 h-1 bg-[#30677e]/50 rounded-full"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom decorative elements */}
			<div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent pointer-events-none"></div>
		</div>
	);
}

export default SignUp;

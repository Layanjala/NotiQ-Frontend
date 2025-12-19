import React, { useState } from "react";
import login from "../assets/LogIn.png";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function LogIn() {
	const [isLogin, setIsLogin] = useState(true);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(`${isLogin ? "Login" : "Sign Up"} attempt:`, {
			username,
			password,
		});
		// Add your authentication logic here
	};
	return (
		<div className="min-h-screen bg-secondary-gradient flex flex-col items-center justify-center p-2 relative">
			{/* Back Button - Top Left */}
			<button
				onClick={() => window.history.back()}
				className="absolute top-6 left-6 text-5xl text-gray-700 hover:text-gray-900 hover:scale-110 transition-all duration-300 z-10"
				title="Go Back"
			>
				<IoArrowBackCircleOutline />
			</button>
			{/* Main Card */}
			<div className="bg-emerald-gradient rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl flex gap-0">
				{/* Left Side - Image Placeholder */}
				<div className="hidden md:block  relative p-0">
					{/* <div
						className="absolute inset-0  shadow-inner m-4 rounded-xl"
						style={{
							boxShadow:
								"inset 0 4px 20px rgba(0, 0, 0, 0.1), 0 8px 30px rgba(0, 0, 0, 0.15)",
						}}
					> */}
					{/* You can replace this with an actual image */}
					<div className="inset-y-0 left-0 flex items-center justify-start pl-2">
						<div className="text-center p-0">
							<img
								src={login}
								alt="Login"
								className="w-64 md:w-72 max-w-full "
							/>
						</div>
					</div>
					{/* </div> */}
				</div>

				{/* Right Side - Login Form */}
				<div className="w-full md:w-1/2 p-0 md:p-5 ">
					<div className="mb-5 text-center">
						<h2 className="text-2xl font-bold text-gray-800">
							{isLogin ? "Welcome Back" : "Create Account"}
						</h2>
						<p className="text-gray-600 mt-2">
							{isLogin ? "Sync Your Thoughts" : "Sign up to get started"}
						</p>
					</div>

					{/* Google Sign In */}
					<button
						className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg py-3 px-4 mb-2 hover:bg-gray-50 transition-colors"
						onClick={() => console.log("Google sign in clicked")}
					>
						<svg className="w-5 h-5" viewBox="0 0 24 24">
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
						<span className="font-medium text-gray-700">
							Sign {isLogin ? "in" : "up"} with Google
						</span>
					</button>

					<div className="relative mb-5">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-300"></div>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-2 bg-white text-gray-500">
								Or continue with email
							</span>
						</div>
					</div>

					{/* Login Form */}
					<form onSubmit={handleSubmit}>
						<div className="mb-2">
							<label
								className="block text-gray-700 text-sm font-medium mb-2"
								htmlFor="username"
							>
								Username or Email
							</label>
							<input
								id="username"
								type="text"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
								placeholder="Enter your username or email"
								required
							/>
						</div>

						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-medium mb-2"
								htmlFor="password"
							>
								Password
							</label>
							<input
								id="password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
								placeholder="Enter your password"
								required
							/>
						</div>

						{isLogin && (
							<div className="flex justify-end mb-4">
								<a
									href="#"
									className="text-sm text-blue-600 hover:text-blue-800 font-medium"
								>
									Forgot password?
								</a>
							</div>
						)}

						<button
							type="submit"
							className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
						>
							{isLogin ? "Sign In" : "Sign Up"}
						</button>
					</form>

					{!isLogin && (
						<p className="text-gray-600 text-sm mt-6">
							By signing up, you agree to our Terms of Service and Privacy
							Policy
						</p>
					)}

					<p className="text-center text-gray-600 mt-6">
						{isLogin ? "Don't have an account? " : "Already have an account? "}
						<button
							onClick={() => navigate("/signup")}
							className="text-blue-600 hover:text-blue-800 font-medium"
						>
							{isLogin ? "Sign Up" : "Sign In"}
						</button>
					</p>
				</div>
			</div>
		</div>
	);
}

export default LogIn;

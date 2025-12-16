/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				// Cute fonts for headings and body
				baloo: ['"Baloo 2"', "cursive"],
				quicksand: ["Quicksand", "sans-serif"],
				pacifico: ["Pacifico", "cursive"],
				nunito: ["Nunito", "sans-serif"],
			},
			colors: {
				primary: "#f9fafc", // navbar / background
				secondary: "#dce6f2", // page background
			},
			keyframes: {
				breathe: {
					"0%, 100%": { transform: "scale(1)" },
					"50%": { transform: "scale(1.05)" },
				},
			},
			animation: {
				breathe: "breathe 3s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};

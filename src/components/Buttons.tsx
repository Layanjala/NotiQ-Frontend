import React from "react";

type ButtonProps = {
	children: React.ReactNode;
	variant?: "primary" | "secondary" | "danger" | "nobg"; // only these keys allowed
	onClick?: () => void;
	className?: string;
};

function Buttons({
	children,
	variant = "primary",
	onClick,
	className = "",
}: ButtonProps) {
	const base =
		"px-4 py-2 rounded-md font-semibold transition-colors duration-200";
	const styles: Record<Exclude<ButtonProps["variant"], undefined>, string> = {
		primary: "bg-[#82ab30] text-white px-4 py-2 rounded-2xl hover:bg-[#6b8e23]", // something good, do it one
		secondary: "bg-[#e98a15] text-white hover:bg-green-600", //something highlighted
		danger: "bg-[#E63B55] text-white hover:bg-red-600", //decisions like close or delete
		nobg: "bg-transparent text-black border border-[#6b8e23] hover:bg-[#6b8e23] ", //background removed
	};
	return (
		<div>
			<button
				className={`${base} ${styles[variant]} ${className}`}
				onClick={onClick}
			>
				{children}
			</button>

			{/* <div className="flex gap-2">
				<button className="bg-[#82ab30]/75 bg-opacity-100 text-white px-4 py-2 rounded-2xl hover:bg-[#6b8e23]">
					Log In
				</button>
				
			</div> */}
		</div>
	);
}

export default Buttons;

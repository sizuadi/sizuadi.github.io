/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-dark": "#1B262C",
				primary: "#1B262C",
				secondary: "#0F4C75",
				tertiary: "#3282B8",
				quaternary: "#BBE1FA",
			},
		},
		container: {
			center: true,
		},
		fontFamily: {
			body: ["Poppins"],
		},
	},
	plugins: [],
};

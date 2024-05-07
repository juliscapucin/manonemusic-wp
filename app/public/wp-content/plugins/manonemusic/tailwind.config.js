/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["../manonemusic/**/*.{js}", "../manonemusic/**/*.php"],
	theme: {
		fontFamily: {
			primary: ["var(--font-primary)"],
			secondary: ["var(--font-secondary)"],
		},
		colors: {
			primary: "rgb(var(--color-primary) / <alpha-value>)",
			secondary: "rgb(var(--color-secondary) / <alpha-value>)",
			red: "rgb(var(--color-red) / <alpha-value>)",
			"faded-5": "rgba(var(--color-secondary-rgb), 0.05)",
			"faded-10": "rgba(var(--color-secondary-rgb), 0.1)",
			"faded-30": "rgba(var(--color-secondary-rgb), 0.3)",
			"faded-70": "rgba(var(--color-secondary-rgb), 0.7)",
		},
		extend: {},
	},
	plugins: [],
};

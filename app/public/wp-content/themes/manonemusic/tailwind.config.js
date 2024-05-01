/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"../manonemusic/**/*.{html,js}",
		"../manonemusic/**/*.php",
		"../../../../../app/**/*.php",
		"../../../../../app/**/*.{html,js}",
	],
	theme: {
		fontFamily: {
			primary: ["PPSupplyMono", "monospace"],
			secondary: ["var(--font-secondary)"],
		},
		colors: {
			primary: "rgb(var(--color-primary) / <alpha-value>)",
			secondary: "rgb(var(--color-secondary) / <alpha-value>)",
			"faded-5": "rgba(var(--color-secondary-rgb), 0.05)",
			"faded-10": "rgba(var(--color-secondary-rgb), 0.1)",
			"faded-30": "rgba(var(--color-secondary-rgb), 0.3)",
			"faded-70": "rgba(var(--color-secondary-rgb), 0.7)",
		},
		extend: {},
	},
	plugins: [],
}

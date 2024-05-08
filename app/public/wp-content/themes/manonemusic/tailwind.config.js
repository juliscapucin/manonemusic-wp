/** @type {import('tailwindcss').Config} */
module.exports = {
	content: {
		relative: true,
		files: ["./../../**/*.php", "./../../**/*.js"],
	},
	theme: {
		fontFamily: {
			primary: ["var(--font-primary)"],
			secondary: ["var(--font-secondary)"],
		},
		colors: {
			red: "#CC0000",
			primary: "rgb(var(--color-primary) / <alpha-value>)",
			secondary: "rgb(var(--color-secondary) / <alpha-value>)",
			"faded-5": "rgba(var(--color-secondary-rgb), 0.05)",
			"faded-10": "rgba(var(--color-secondary-rgb), 0.1)",
			"faded-30": "rgba(var(--color-secondary-rgb), 0.3)",
			"faded-70": "rgba(var(--color-secondary-rgb), 0.7)",
		},
		extend: {
			maxWidth: {
				wide: "1600px",
			},
			minWidth: {
				screen: "100vw",
			},
		},
	},
	plugins: [],
}

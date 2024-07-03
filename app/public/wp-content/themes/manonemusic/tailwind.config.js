/** @type {import('tailwindcss').Config} */
module.exports = {
	content: {
		relative: true,
		// files: ["./../../**/*.php", "./../../**/*.js"],
		files: [
			"./../../**/*.php",
			"./src/**/*.js",
			"./templates/*.html",
			"./parts/*.html",
			"./patterns/*.php",
		],
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
			"faded-20": "rgba(var(--color-secondary-rgb), 0.2)",
			"faded-30": "rgba(var(--color-secondary-rgb), 0.3)",
			"faded-70": "rgba(var(--color-secondary-rgb), 0.7)",
		},
		fontSize: {
			displayLarge: "147px",
			displayMedium: "103px",
			displaySmall: "72px",
			headlineLarge: "81px",
			headlineMedium: "72px",
			headlineSmall: "64px",
			titleLarge: "22px",
			titleMedium: "20px",
			titleSmall: "18px",
			bodyLarge: "18px",
			bodyMedium: "16px",
			bodySmall: "14px",
			labelLarge: "14px",
			labelMedium: "12px",
			labelSmall: "10px",
		},
		extend: {
			maxWidth: {
				wide: "1600px",
			},
			minWidth: {
				screen: "100vw",
			},
			lineHeight: {
				tighter: "0.85",
			},
		},
	},
	plugins: [],
}

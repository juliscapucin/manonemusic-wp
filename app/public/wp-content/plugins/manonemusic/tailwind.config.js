/** @type {import('tailwindcss').Config} */
module.exports = {
	content: {
		relative: true,
		files: [
			"./src/**/*.php",
			"./src/**/*.js",
			"./src/**/*.jsx",
			"./src/**/*.json",
			"./src/**/*.css",
		],
	},
	theme: {
		fontFamily: {
			primary: ["var(--font-primary)"],
			secondary: ["var(--font-secondary)"],
		},
		fontSize: {
			displayLarge: "147px",
			displayMedium: "103px",
			displaySmall: "72px",
			headlineLarge: "51px",
			headlineMedium: "40px",
			headlineSmall: "32px",
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
			colors: {
				red: "#CC0000",
				primary: "rgb(var(--color-primary) / <alpha-value>)",
				secondary: "rgb(var(--color-secondary) / <alpha-value>)",
				"faded-5": "rgba(var(--color-secondary-rgb), 0.05)",
				"faded-10": "rgba(var(--color-secondary-rgb), 0.1)",
				"faded-30": "rgba(var(--color-secondary-rgb), 0.3)",
				"faded-70": "rgba(var(--color-secondary-rgb), 0.7)",
			},
			maxWidth: {
				wide: "1600px",
			},
			minWidth: {
				screen: "100vw",
			},
		},
	},
	plugins: [],
};

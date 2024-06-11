/**
 * External Dependencies
 */
const path = require("path")

/**
 * WordPress Dependencies
 */
const defaultConfig = require("@wordpress/scripts/config/webpack.config.js")

module.exports = {
	...defaultConfig,
	...{
		entry: {
			index: path.resolve(process.cwd(), "src", "index.js"),
			homepage: path.resolve(process.cwd(), "src", "js/homepage.js"),
			"assets/fonts": path.resolve(
				process.cwd(),
				"src/assets/fonts",
				"fonts.scss"
			),
			"js/gsap.min": path.resolve(process.cwd(), "src/lib", "gsap.min.js"),
			"js/ScrollTrigger.min": path.resolve(
				process.cwd(),
				"src/lib",
				"ScrollTrigger.min.js"
			),
			"js/ScrollToPlugin.min": path.resolve(
				process.cwd(),
				"src/lib",
				"ScrollToPlugin.min.js"
			),
		},
	},
}

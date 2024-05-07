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
			"assets/fonts": path.resolve(
				process.cwd(),
				"src/assets/fonts",
				"fonts.scss"
			),
			"styles/custom-core-blocks": path.resolve(
				process.cwd(),
				"src/styles",
				"custom-core-blocks.css"
			),
		},
	},
}

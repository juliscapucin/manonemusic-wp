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
			"blocks/index": path.resolve(__dirname, "src", "blocks", "index.js"),
			"blocks/custombutton/index": path.resolve(
				__dirname,
				"src",
				"blocks",
				"custombutton",
				"index.js"
			),
		},
	},
}

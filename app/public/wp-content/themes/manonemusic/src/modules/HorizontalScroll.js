class HorizontalScroll {
	constructor() {
		this.init()
	}

	init() {
		this.bindEvents()
		// console.log(siteData.root_url) // get root url from wp_localize_script in functions/files.php
	}

	bindEvents() {
		window.addEventListener("scroll", this.handleScroll)
	}

	handleScroll() {
		console.log("scrolling")
	}
}

export default HorizontalScroll

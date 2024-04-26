class HorizontalScroll {
	constructor() {
		this.init()
	}

	init() {
		this.bindEvents()
		// get root url from wp_localize_script in functions/files.php
		// console.log(siteData.root_url)
	}

	bindEvents() {
		// window.addEventListener("scroll", this.handleScroll)
	}

	handleScroll() {
		console.log("scrolling")
	}
}

export default HorizontalScroll

class HorizontalScroll {
	constructor() {
		this.init()
	}

	init() {
		this.bindEvents()
		console.log("init")
	}

	bindEvents() {
		window.addEventListener("scroll", this.handleScroll)
	}

	handleScroll() {
		console.log("scrolling")
	}
}

export default HorizontalScroll

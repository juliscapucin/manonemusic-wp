class Credits {
	constructor() {
		;["load", "init", "addEvents", "removeEvents", "animate"].forEach(
			(fn) => (this[fn] = this[fn].bind(this))
		)
		this.init()
	}

	async init() {
		await this.load()
		console.log("Website by https://juliscapucin.com")
		this.elements = document.querySelectorAll("a")
		this.addEvents()
	}

	addEvents() {
		// window.addEventListener("load", this.animate)
	}

	removeEvents() {
		window.removeEventListener("load", this.animate)
	}

	animate() {
		gsap.to(this.elements, {
			rotation: 180,
			duration: 2,
			ease: "bounce.out",
		})

		console.log("window loaded")
	}

	load() {
		document.addEventListener("DOMContentLoaded", this.init)
	}
}

export default Credits

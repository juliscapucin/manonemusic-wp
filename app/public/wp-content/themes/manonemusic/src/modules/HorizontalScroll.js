class HorizontalScroll {
	constructor() {
		;["load", "init", "addEvents", "removeEvents", "handleScroll"].forEach(
			(fn) => (this[fn] = this[fn].bind(this))
		)
		this.init()
	}

	async init() {
		await this.load()

		gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

		/* Main navigation */
		this.panelsSection = document.querySelector("#panels")
		this.panelsContainer = document.querySelector("#panels-container")
		this.headerLinks = document.querySelectorAll(".header-link")
		this.tween

		this.addEvents()

		console.log("hello from HorizontalScroll")
		// get root url from wp_localize_script in functions/files.php
		// console.log(siteData.root_url)
	}

	addEvents() {
		this.headerLinks.forEach((anchor) => {
			anchor.addEventListener("click", function (e) {
				e.preventDefault()
				let targetElem = document.querySelector(e.target.getAttribute("href")),
					y = targetElem
				if (
					targetElem &&
					panelsContainer.isSameNode(targetElem.parentElement)
				) {
					let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
						totalMovement = cont.scrollWidth - innerWidth
					y = Math.round(
						tween.scrollTrigger.start +
							(targetElem.offsetLeft / totalMovement) * totalScroll
					)
				}

				console.log("useful stuff!", y, e.target.getAttribute("href"))

				gsap.to(window, {
					scrollTo: {
						y: y,
						autoKill: false,
					},
					duration: 1,
				})
			})
		})
		window.addEventListener("scroll", this.handleScroll)
	}

	handleScroll() {
		/* Panels */
		const cont = document.querySelector("#panels-container")
		const panels = gsap.utils.toArray("#panels-container .panel")

		tween = gsap.to(panels, {
			x: () => -1 * (cont.scrollWidth - innerWidth),
			ease: "none",
			scrollTrigger: {
				trigger: "#panels-container",
				pin: true,
				start: "top top",
				scrub: 1,
				end: () => "+=" + (cont.scrollWidth - innerWidth),
				onUpdate: (self) => {
					// also useful!
					// console.log(self.progress, '/1')
					// console.log(window.scrollY, `/${document.body.scrollHeight - window.innerHeight}`)
				},
			},
		})
	}

	load() {
		document.addEventListener("DOMContentLoaded", this.init)
	}
}

export default HorizontalScroll

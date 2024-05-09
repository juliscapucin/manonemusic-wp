class HorizontalScroll {
	constructor() {
		this.panelsInnerContainer
		this.panelsOuterContainer
		this.headerLinks
		this.panels
		this.tween
		this.totalScroll

		this.load()
	}

	init() {
		gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

		/* Main navigation */
		this.panelsOuterContainer = document.querySelector(
			"#panels-outer-container"
		)
		this.panelsInnerContainer = document.querySelector(
			"#panels-inner-container"
		)
		this.headerLinks = document.querySelectorAll(".header-link")
		this.totalScroll = this.panelsInnerContainer.scrollWidth - window.innerWidth
		console.log("totalScroll", this.totalScroll)

		this.addEvents()

		// get root url from wp_localize_script in functions/files.php
		// console.log(siteData.root_url)
	}

	async addEvents() {
		if (!this.panelsInnerContainer || !this.panelsOuterContainer) return

		await this.handleScroll()
		this.headerLinks.forEach((anchor) => {
			anchor.addEventListener("click", this.handleHeaderLinks)
		})
	}

	handleHeaderLinks(e) {
		e.preventDefault()
		let targetId = e.target.closest("a").getAttribute("href")
		let targetElem = document.querySelector(targetId)

		let y = targetElem

		if (
			targetElem &&
			this.panelsInnerContainer.isSameNode(targetElem.parentElement)
		) {
			y = Math.round(
				tween.scrollTrigger.start +
					(targetElem.offsetLeft / this.panelsInnerContainer.scrollWidth -
						innerWidth) *
						this.totalScroll
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
	}

	handleScroll() {
		/* Panels */
		this.panels = gsap.utils.toArray("#panels-inner-container .panel")

		this.tween = gsap.to(this.panels, {
			x: -1 * (this.panelsInnerContainer.scrollWidth - innerWidth),
			ease: "none",
			scrollTrigger: {
				trigger: this.panelsOuterContainer,
				pin: true,
				start: "top top",
				scrub: 1,
				end: () => this.panelsInnerContainer.scrollWidth - innerWidth,
				onUpdate: (self) => {
					// also useful!
					// console.log(self.progress, '/1')
					// console.log(
					// 	window.scrollY,
					// 	`/${document.body.scrollHeight - window.innerHeight}`
					// )
				},
			},
		})

		ScrollTrigger.refresh()

		console.log("start", this.tween.scrollTrigger.start)
		console.log("end", this.tween.scrollTrigger.end)
	}

	load() {
		// wait until DOM is ready
		document.addEventListener("DOMContentLoaded", (event) => {
			console.log("DOM loaded")

			//wait until images, links, fonts, stylesheets, and js is loaded
			window.addEventListener("load", this.init(), false)
		})
	}
}

export default HorizontalScroll

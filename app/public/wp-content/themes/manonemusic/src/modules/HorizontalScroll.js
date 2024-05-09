class HorizontalScroll {
	constructor() {
		this.init = this.init.bind(this)
		this.addEvents = this.addEvents.bind(this)
		this.handleHeaderLinks = this.handleHeaderLinks.bind(this)
		document.addEventListener("DOMContentLoaded", this.init)
		this.panelsInnerContainer
		this.panelsOuterContainer
		this.headerLinks
		this.panels
		this.tween
		this.totalMovement
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
		this.totalMovement = this.panelsInnerContainer.scrollWidth - innerWidth

		this.addEvents()

		// get root url from wp_localize_script in functions/files.php
		// console.log(siteData.root_url)
	}

	addEvents() {
		this.headerLinks.forEach((anchor) => {
			anchor.addEventListener("click", this.handleHeaderLinks)
		})
		this.handleScroll()
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
			let totalScroll =
				this.tween.scrollTrigger.end - this.tween.scrollTrigger.start

			y = Math.round(
				tween.scrollTrigger.start +
					(targetElem.offsetLeft / this.totalMovement) * totalScroll
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

		console.log(
			this.panelsInnerContainer.scrollWidth,
			this.panelsInnerContainer.offsetWidth
		)

		// gsap.to(this.panels, {
		// 	x: () => -1 * this.totalMovement,
		// 	duration: 2,
		// })

		this.tween = gsap.to(this.panels, {
			x: () => -this.totalMovement,
			ease: "none",
			scrollTrigger: {
				trigger: this.panelsOuterContainer,
				pin: true,
				start: "top top",
				scrub: 1,
				end: () => "+=" + this.totalMovement,
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

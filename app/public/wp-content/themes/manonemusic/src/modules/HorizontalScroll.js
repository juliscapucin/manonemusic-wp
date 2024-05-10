class HorizontalScroll {
	constructor() {
		this.handleHeaderLinks = this.handleHeaderLinks.bind(this)
		this.handleScrollTo = this.handleScrollTo.bind(this)
		this.panelsInnerContainer
		this.panelsOuterContainer
		this.headerLinks
		this.panels
		this.tween
		this.hash
		this.scrollTarget

		this.load()
	}

	async init() {
		gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

		/* Main navigation */
		this.panelsOuterContainer = document.querySelector(
			"#panels-outer-container"
		)
		this.panelsInnerContainer = document.querySelector(
			"#panels-inner-container"
		)
		this.headerLinks = document.querySelectorAll(".header-link")
		this.panels = gsap.utils.toArray("#panels-inner-container .panel")
		this.hash = window.location.hash

		await this.handleScroll()

		if (this.hash) {
			this.scrollTarget = document.querySelector(this.hash)
			this.handleScrollTo()
		}

		this.addEvents()

		// get root url from wp_localize_script in functions/files.php
		// console.log(siteData.root_url)
	}

	addEvents() {
		if (!this.panelsInnerContainer || !this.panelsOuterContainer) return

		this.headerLinks.forEach((anchor) => {
			anchor.addEventListener("click", this.handleHeaderLinks)
		})
	}

	handleHeaderLinks(e) {
		e.preventDefault()
		this.hash = e.target.closest("a").getAttribute("href")
		this.scrollTarget = document.querySelector(this.hash)

		if (this.scrollTarget) {
			this.handleScrollTo()
		}
	}

	handleScrollTo() {
		let y = this.scrollTarget

		if (
			this.scrollTarget &&
			this.panelsInnerContainer.isSameNode(this.scrollTarget.parentElement)
		) {
			let totalScroll =
					this.tween.scrollTrigger.end - this.tween.scrollTrigger.start,
				totalMovement = this.panelsInnerContainer.scrollWidth - innerWidth
			y = Math.round(
				this.tween.scrollTrigger.start +
					(this.scrollTarget.offsetLeft / totalMovement) * totalScroll
			)
		}

		gsap.to(window, {
			scrollTo: {
				y: y,
				autoKill: false,
			},
			duration: 0.3,
			onComplete: () => {
				window.location.hash = this.hash
			},
		})
	}

	handleScroll() {
		// gsap.to(this.panels, {
		// 	xPercent: -100 * (this.panels.length - 1),
		// 	duration: 3,
		// })

		this.tween = gsap.to(this.panels, {
			xPercent: -100 * (this.panels.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: this.panelsOuterContainer,
				pin: true,
				start: "top top",
				scrub: 1,
				end: () => "+=" + this.panelsInnerContainer.scrollWidth - innerWidth,
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
	}

	load() {
		// wait until DOM is ready
		document.addEventListener("DOMContentLoaded", (event) => {
			//wait until images, links, fonts, stylesheets, and js is loaded
			window.addEventListener("load", this.init(), false)
		})
	}
}

export default HorizontalScroll

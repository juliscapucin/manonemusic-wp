import gsap from "gsap"
import { SplitText } from "gsap/dist/SplitText"

class HorizontalScroll {
	constructor() {
		this.handleHeaderLinks = this.handleHeaderLinks.bind(this)
		this.handleScrollTo = this.handleScrollTo.bind(this)
		this.panelsInnerContainer
		this.panelsOuterContainer
		this.headerLinks
		this.panels
		this.tween
		this.pathname
		this.scrollTarget
		this.panelCoordinates = [
			{ section: "home", x: 0 },
			{ section: "projects", x: null },
			{ section: "releases", x: null },
			{ section: "about", x: null },
			{ section: "contact", x: null },
		]
		this.activePanel

		this.load()
	}

	async init() {
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText)

		/* Main navigation */
		this.panelsOuterContainer = document.querySelector(
			"#panels-outer-container"
		)
		this.panelsInnerContainer = document.querySelector(
			"#panels-inner-container"
		)
		this.headerLinks = document.querySelectorAll("header a")
		this.panels = gsap.utils.toArray("#panels-inner-container .panel")
		this.pathname = window.location.pathname

		this.panelCoordinates.forEach((panel, index) => {
			panel.x = this.panels[index].offsetLeft
		})

		await this.handleScroll()

		if (this.pathname !== "/") {
			this.scrollTarget = document.querySelector(
				`#${this.pathname.replace(/^\/|\/$/g, "")}`
			)
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
		this.pathname = e.target.closest("a").getAttribute("href").substring(1)
		this.scrollTarget =
			this.pathname === "/" ? null : document.querySelector(`#${this.pathname}`)

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
				this.handlePathname()
			},
		})
	}

	handlePathname() {
		const { protocol, hostname, port } = window.location
		const newUrl = `${protocol}//${hostname}${port ? ":" + port : ""}/${
			this.pathname === "home" ? "" : this.pathname
		}`
		window.history.pushState({ path: newUrl }, "", newUrl)
	}

	handleScroll() {
		this.tween = gsap.to(this.panels, {
			xPercent: -100 * (this.panels.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: this.panelsInnerContainer,
				pin: true,
				start: "top top",
				scrub: 1,
				end: () => "+=" + this.panelsInnerContainer.scrollWidth - innerWidth,
				onUpdate: (self) => {
					// also useful!
					// console.log(self.progress, "/1")
					// console.log(
					// 	window.scrollY,
					// 	`/${document.body.scrollHeight - window.innerHeight}`
					// )
				},
			},
		})

		this.handleActivePanel()
	}

	handleActivePanel() {
		this.panels.forEach((panel, index) => {
			ScrollTrigger.create({
				trigger: panel,
				containerAnimation: this.tween,
				start: (self) =>
					self.direction === 1 ? "right center" : "left center",
				onEnter: () => {
					this.activePanel = panel
					this.pathname = this.panelCoordinates[index].section
					this.handlePathname()
					this.animateHeading()
				},
				onEnterBack: () => {
					this.activePanel = panel
					this.pathname = this.panelCoordinates[index].section
					this.handlePathname()
					this.animateHeading()
				},
			})
		})
	}

	animateHeading() {
		const headingText = this.activePanel.querySelector("h1")
		const headingTextSplit = new SplitText(headingText, { type: "chars" })
		const headingTextChars = headingTextSplit.chars
		headingTextSplit.revert()
		gsap.set(headingTextChars, { y: "100%" })
		gsap.to(headingTextChars, {
			duration: 1,
			y: "0%",
			opacity: 1,
			stagger: 0.1,
			ease: "power4.out",
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

import gsap from "gsap"
import { SplitText } from "gsap/dist/SplitText"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin"

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
		this.panelUI = [
			{ section: "home", x: 0, splitHeading: null, theme: "dark" },
			{
				section: "films",
				x: null,
				splitHeading: null,
				backgroundColor: "red",
			},
			{
				section: "commercials",
				x: null,
				splitHeading: null,
				backgroundColor: "dark",
			},
			{
				section: "projects",
				x: null,
				splitHeading: null,
				backgroundColor: "green",
			},
			{
				section: "releases",
				x: null,
				splitHeading: null,
				backgroundColor: "red",
			},
			{
				section: "about",
				x: null,
				splitHeading: null,
				backgroundColor: "dark",
			},
			{
				section: "contact",
				x: null,
				splitHeading: null,
				backgroundColor: "green",
			},
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

		if (!this.panelsInnerContainer || !this.panelsOuterContainer) return

		this.headerLinks = document.querySelectorAll("header a")
		this.panels = gsap.utils.toArray("#panels-inner-container .panel")
		this.pathname = window.location.pathname

		const headings = document.querySelectorAll(".home-heading")

		this.panelUI.forEach((panel, index) => {
			panel.x = this.panels[index].offsetLeft
			panel.splitHeading = new SplitText(headings[index], { type: "chars" }) // Create SplitText instance for each heading
		})

		await this.addScrollHandler()

		// if pathname is not root, scroll to section on load
		if (this.pathname !== "/") {
			this.scrollTarget = document.querySelector(
				`#${this.pathname.replace(/^\/|\/$/g, "")}`
			)
			this.handleScrollTo()
		}

		this.addEvents()
	}

	addEvents() {
		if (!this.panelsInnerContainer || !this.panelsOuterContainer) return

		this.headerLinks.forEach((anchor) => {
			anchor.addEventListener("click", this.handleHeaderLinks)
		})
	}

	addScrollHandler() {
		// Calculate the total width of all panels
		let totalWidth = 0
		this.panels.forEach((panel) => {
			totalWidth += panel.offsetWidth
		})

		this.tween = gsap.to(this.panels, {
			x: -totalWidth + window.innerWidth, // Adjust for the viewport width
			ease: "none",
			scrollTrigger: {
				trigger: this.panelsInnerContainer,
				pin: true,
				start: "top top",
				scrub: 0.8,
				// markers: true,
				end: () => "+=" + this.panelsInnerContainer.scrollWidth, // The bigger the end value, the slower the scroll
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

	handleHeaderLinks(e) {
		e.preventDefault()
		this.pathname = e.target.closest("a").getAttribute("href").substring(1)

		this.scrollTarget =
			this.pathname === "/" ? null : document.querySelector(`#${this.pathname}`)

		if (this.scrollTarget) {
			this.handleScrollTo()
			this.headerLinks.forEach((anchor) => {
				anchor.classList.remove("active")
			})
			e.target.closest("a").classList.add("active")
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

		this.headerLinks.forEach((anchor) => {
			anchor.classList.remove("active")
			if (anchor.getAttribute("href") === `/${this.pathname}`) {
				anchor.classList.add("active")
			}
		})

		// this.handleBackgroundColor()
	}

	handleActivePanel() {
		this.panels.forEach((panel, index) => {
			const splitHeading = this.panelUI[index].splitHeading

			gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText)

			gsap.set(splitHeading.chars, { xPercent: 0, opacity: 0 })

			// SPLIT TEXT ANIMATION
			ScrollTrigger.create({
				trigger: panel,
				containerAnimation: this.tween,
				// markers: true,
				start: () => `center-=${window.innerWidth * 0.2} right`,
				end: "right left",
				onEnter: () => {
					this.activePanel = panel
					this.pathname = this.panelUI[index].section
					this.handlePathname()
					this.animateHeading(splitHeading, "in")
				},
				onEnterBack: () => {
					this.activePanel = panel
					this.pathname = this.panelUI[index].section
					this.handlePathname()
					this.animateHeading(splitHeading, "in")
				},
				onLeave: () => {
					this.animateHeading(splitHeading, "out")
				},
				onLeaveBack: () => {
					this.animateHeading(splitHeading, "out")
				},
			})

			// PIN TITLE ANIMATION
			const heading = panel.querySelector(".home-heading")
			const cardStack = panel.querySelector(".cards-home")

			if (!cardStack) return

			const cardStackWidth = cardStack.offsetWidth

			if (cardStackWidth < window.innerWidth) return

			gsap.to(heading, {
				scrollTrigger: {
					scrub: true,
					trigger: cardStack,
					start: "left left",
					end: () => "+=" + (cardStackWidth - window.innerWidth),
					invalidateOnRefresh: true,
					// markers: true,
					containerAnimation: this.tween,
				},
				x: () => "+=" + (cardStackWidth - window.innerWidth),
				ease: "none",
			})
		})
	}

	handleBackgroundColor() {
		const panel = this.activePanel
		const panelColor = this.panelUI.find(
			(panel) => panel.section === this.pathname
		).backgroundColor

		if (panelColor) {
			document.documentElement.setAttribute("data-theme", panelColor)
		}
	}

	animateHeading(panel, direction) {
		const xTranslate = 500
		const delay = 0.2

		const tl = gsap.timeline()

		tl.fromTo(
			panel.chars,
			{
				xPercent: (index) =>
					direction === "in" ? xTranslate * (index + 1) : 0,
				opacity: () => (direction === "in" ? 0 : 1),
			},
			{
				opacity: () => (direction === "in" ? 1 : 0),
				xPercent: (index) =>
					direction === "in" ? 0 : xTranslate * (index + 1),
				duration: 0.5,
				delay: delay || 0,
				stagger: 0.05,
				ease: "expo.out",
			}
		)
	}

	debounce(func, wait) {
		let timeout
		return function () {
			const context = this,
				args = arguments
			clearTimeout(timeout)
			timeout = setTimeout(() => func.apply(context, args), wait)
		}
	}

	load() {
		// Check if the screen has a horizontal aspect ratio
		const checkWindowWidth = () => {
			if (window.innerWidth > 1024) {
				this.init()
			} else {
				this.cleanup()
			}
		}

		// wait until DOM is ready
		document.addEventListener("DOMContentLoaded", (event) => {
			// wait until images, links, fonts, stylesheets, and js are loaded
			window.addEventListener("load", checkWindowWidth, false)
			window.addEventListener(
				"resize",
				this.debounce(() => window.location.reload(), 500),
				false
			)
		})
	}

	cleanup() {
		// Remove event listeners or any other cleanup logic if needed
		if (this.headerLinks) {
			this.headerLinks.forEach((anchor) => {
				anchor.removeEventListener("click", this.handleHeaderLinks)
			})
		}
		if (this.tween) {
			this.tween.kill()
		}
		ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
	}
}

export default HorizontalScroll

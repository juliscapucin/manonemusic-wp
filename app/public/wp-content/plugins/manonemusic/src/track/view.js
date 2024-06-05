/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log("Hello World! (from track)");
/* eslint-enable no-console */

import SC from "./soundcloud-api";

function formatMilliseconds(milliseconds) {
	// Convert milliseconds to total seconds
	const totalSeconds = Math.floor(milliseconds / 1000);

	// Calculate hours, minutes, and seconds
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	// Format the time components as two-digit numbers
	const formattedHours = String(hours).padStart(2, "0");
	const formattedMinutes = String(minutes).padStart(2, "0");
	const formattedSeconds = String(seconds).padStart(2, "0");

	// Combine the formatted components into a single string
	return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

document.addEventListener("DOMContentLoaded", () => {
	const widgets = document.querySelectorAll(".sc-widget");
	const widgetInstances = [];

	widgets.forEach((element) => {
		const widget = SC.Widget(element);
		widgetInstances.push(widget);
		const parentElement = element.parentElement;
		const durationElement = parentElement.querySelector(".duration");
		const progressElement = parentElement.querySelector(".progress");
		const progressBar = parentElement.querySelector(".progress-bar");
		const progressBarWidth = progressBar.offsetWidth;
		const progressBarFill = parentElement.querySelector(".progress-bar-fill");
		const playButton = parentElement.querySelector(".play-button");
		const pauseButton = parentElement.querySelector(".pause-button");

		playButton.addEventListener("click", () => {
			// Pause all other widgets
			widgets.forEach((w) => {
				if (w !== widget) {
					const wPlay = w.parentElement.querySelector(".play-button");
					const wPause = w.parentElement.querySelector(".pause-button");

					if (wPlay.classList.contains("hidden")) {
						wPlay.classList.toggle("hidden");
						wPause.classList.toggle("hidden");
					}
				}
			});

			widget.play();
			playButton.classList.toggle("hidden");
			pauseButton.classList.toggle("hidden");
		});

		pauseButton.addEventListener("click", () => {
			widget.pause();
			pauseButton.classList.toggle("hidden");
			playButton.classList.toggle("hidden");
		});

		progressBar.addEventListener("click", (e) => {
			const clickPosition = e.offsetX;
			const clickRatio = clickPosition / progressBarWidth;

			widget.getDuration((duration) => {
				const newPosition = duration * clickRatio;
				widget.seekTo(newPosition);
			});
		});

		widget.bind(SC.Widget.Events.READY, () => {
			widget.bind(SC.Widget.Events.PLAY, () => {
				// Get information about currently playing sound
				widget.getCurrentSound((currentSound) => {
					console.log(`Sound ${currentSound.title} began to play`);
				});
			});

			widget.bind(SC.Widget.Events.PAUSE, () => {
				widget.getCurrentSound((currentSound) => {
					console.log(`Sound ${currentSound.title} was paused`);
				});
			});

			// Get current playback position
			widget.bind(SC.Widget.Events.PLAY_PROGRESS, (progress) => {
				// Get current playback position
				widget.getPosition((position) => {
					progressElement.innerText = `${formatMilliseconds(position)}`;
				});

				progressBarFill.style.width = `${progress.relativePosition * 100}%`;
			});

			// Get current level of volume
			widget.getVolume((volume) => {
				console.log(`Current volume value is ${volume}`);
			});

			widget.isPaused(() => {
				console.log("Is paused");
			});

			// Get duration
			widget.getDuration((duration) => {
				durationElement.innerText = `${formatMilliseconds(duration)}`;
			});

			// Set new volume level
			widget.setVolume(50);
		});
	});
});

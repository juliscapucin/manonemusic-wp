import { useEffect, useState } from "@wordpress/element";
import { useBlockProps, RichText, PlainText } from "@wordpress/block-editor";
import apiFetch from "@wordpress/api-fetch";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.css";

// Function to format the date
function formatDate(dateString) {
	// Ensure the input date string is 8 characters long
	if (dateString.length !== 8) {
		throw new Error("Invalid date string");
	}

	// Extract the year, month, and day from the string
	const year = dateString.substring(0, 4);
	const month = dateString.substring(4, 6);

	// Create a Date object using the extracted values
	const date = new Date(year, month - 1); // Month is zero-based in JavaScript Date

	// Format the date to "Month Year"
	const options = { year: "numeric", month: "long" };
	return date.toLocaleDateString("en-US", options);
}

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({
		className: "w-full mt-8 flex flex-col font-primary",
	});
	const { releaseDate, projectDescription, url, label } = attributes;
	const [postMeta, setPostMeta] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const { getCurrentPostId, getCurrentPostType } =
			wp.data.select("core/editor");
		const postId = getCurrentPostId();
		const postType = getCurrentPostType();

		if (postId && postType) {
			apiFetch({ path: `/wp/v2/${postType}/${postId}` })
				.then((post) => {
					if (post.acf && post.acf.release_date) {
						setPostMeta(post.acf.release_date);
						setAttributes({ releaseDate: formatDate(post.acf.release_date) });
					}
				})
				.catch((err) => {
					console.error("Error fetching post meta:", err);
					setError(err.message);
				});
		} else {
			setError("Invalid post ID or post type.");
		}
	}, []);

	return (
		<div {...blockProps}>
			{error && <p className="error-message">{error}</p>}
			<span>Released {releaseDate}</span>
			<RichText
				tagName="div"
				className="mt-2"
				value={projectDescription}
				onChange={(content) => setAttributes({ projectDescription: content })}
				placeholder="Enter project description. Leave empty if you don't want to display it."
			/>
			<div className="mt-8">
				<span className="text-labelLarge font-semibold">Add project link:</span>
				<div className="mt-2">
					<span className="text-labelLarge font-semibold">Link text:</span>
					<div className="border border-secondary p-2">
						<PlainText
							tagName="div"
							className="bg-primary"
							value={label}
							onChange={(value) => setAttributes({ label: value })}
							placeholder="Enter link label. Leave empty if you don't want to display it."
						/>
					</div>
				</div>
				<div className="mt-2">
					<span className="text-labelLarge font-semibold">Link URL:</span>
					<div className="border border-secondary p-2">
						<PlainText
							tagName="div"
							className="bg-primary"
							value={url}
							onChange={(value) => setAttributes({ url: value })}
							placeholder="Enter link url. Leave empty if you don't want to display it."
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

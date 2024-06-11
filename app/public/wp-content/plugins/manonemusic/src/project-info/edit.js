import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./../style.css";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({ className: "w-full space-y-4 mt-8" });
	const { releaseDate, projectUrl, projectDescription } = attributes;

	return (
		<div {...blockProps}>
			<RichText
				value={releaseDate}
				onChange={(content) => setAttributes({ releaseDate: content })}
			/>
			<RichText
				value={projectDescription}
				onChange={(content) => setAttributes({ projectDescription: content })}
				placeholder="Enter project description. Leave empty if you don't want to display it."
			/>
			<RichText
				value={projectUrl}
				onChange={(content) => setAttributes({ projectUrl: content })}
				placeholder="Enter project url. Leave empty if you don't want to display it."
			/>
		</div>
	);
}

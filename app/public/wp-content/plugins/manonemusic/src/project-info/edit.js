import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.css";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({ className: "w-full mt-8 mb-8" });
	const { releaseDate, projectDescription, url, label } = attributes;

	return (
		<div {...blockProps}>
			<RichText
				value={releaseDate}
				onChange={(content) => setAttributes({ releaseDate: content })}
			/>
			<RichText
				className="mt-8"
				value={projectDescription}
				onChange={(content) => setAttributes({ projectDescription: content })}
				placeholder="Enter project description. Leave empty if you don't want to display it."
			/>
			<div className="mt-8">
				<span className="text-labelLarge font-semibold">Add project link:</span>

				<div className="mt-2">
					<span className="text-labelLarge font-semibold">Link text:</span>
					<div className="border border-secondary p-2">
						<RichText
							value={label}
							onChange={(value) => setAttributes({ label: value })}
							placeholder="Enter link label. Leave empty if you don't want to display it."
						/>
					</div>
				</div>
				<div className="mt-2">
					<span className="text-labelLarge font-semibold">Link URL:</span>
					<div className="border border-secondary p-2">
						<RichText
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

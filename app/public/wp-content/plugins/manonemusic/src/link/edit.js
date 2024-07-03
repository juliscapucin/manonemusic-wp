import {
	useBlockProps,
	RichText,
	URLInputButton,
} from "@wordpress/block-editor";
import { TextControl } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./../style.css";

export default function Edit({ attributes, setAttributes }) {
	const { url, label, openInNewTab } = attributes;
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<TextControl
				label="Link Text / Label"
				value={label}
				onChange={(value) => setAttributes({ label: value })}
			/>
			<URLInputButton
				label="Link URL"
				url={url}
				onChange={(value) => setAttributes({ url: value })}
			/>
		</div>
	);
}

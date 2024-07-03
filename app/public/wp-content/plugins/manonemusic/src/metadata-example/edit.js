import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps } from "@wordpress/block-editor";
import { useSelect, useDispatch } from "@wordpress/data";
import { TextControl } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.css";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	// Fetch metadata using useSelect
	const meta = useSelect((select) => {
		const currentPostId = select("core/editor").getCurrentPostId();
		return select("core/editor").getEditedPostAttribute("meta");
	}, []);

	// Extract the specific meta field
	const clipMeta = meta ? meta.clip : "";

	// useDispatch to update meta
	const { editPost } = useDispatch("core/editor");

	const updateMetaValue = (newValue) => {
		editPost({ meta: { ...meta, clip: newValue } });
	};

	return (
		<div {...blockProps}>
			<TextControl
				label="Clip Meta"
				value={clipMeta}
				onChange={(newValue) => updateMetaValue(newValue)}
			/>
		</div>
	);
}

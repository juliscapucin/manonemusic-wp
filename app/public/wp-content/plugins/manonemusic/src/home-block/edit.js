/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

import { RichText } from "@wordpress/block-editor";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ setAttributes, attributes }) {
	// const blockProps = useBlockProps();

	// console.log(blockProps);

	function editSlogan(x) {
		setAttributes({ slogan: x });
	}

	function editParagraph(x) {
		setAttributes({ paragraph: x });
	}

	return (
		<section className="w-screen h-screen min-h-svh bg-slate-500">
			<div className="flex mt-48 w-screen pr-16">
				<RichText
					tagName={"h2"}
					className={"w-3/4 md:w-1/4 mt-32 md:mt-4"}
					value={attributes.slogan}
					onChange={editSlogan}
				/>
			</div>
			<span>Location: Amsterdam</span>
			<RichText
				tagName={"p"}
				className={"text-4xl w-3/4 md:w-1/4 mt-32 md:mt-4"}
				value={attributes.paragraph}
				onChange={editParagraph}
			/>
		</section>
	);
}

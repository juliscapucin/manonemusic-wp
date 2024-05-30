import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { RawHTML } from "@wordpress/element";

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

	const tracks = useSelect((select) => {
		const { getBlocksByName, getBlockAttributes } = select("core/block-editor");
		const blockID = getBlocksByName("manonemusic/track")[0];
		return getBlockAttributes(blockID);
	}, []);

	const blocks = useSelect((select) => {
		const { getBlocks } = select("core/block-editor");
		return getBlocks();
	}, []);

	console.log(tracks);
	console.log(blocks);

	return (
		<>
			<div {...blockProps}>
				{tracks &&
					tracks.length > 0 &&
					tracks.map((track) => {
						return <p>{blocks.attributes.content.text}</p>;
					})}
			</div>
		</>
	);
}

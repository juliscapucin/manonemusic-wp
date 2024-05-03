import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const blockPropsSave = useBlockProps.save();

	return (
		<div {...blockPropsSave}>
			<InnerBlocks.Content />
		</div>
	);
}

import {
	useBlockProps,
	InnerBlocks,
	useInnerBlocksProps,
} from "@wordpress/block-editor";

export default function Save() {
	const blockPropsSave = useBlockProps.save();
	const innerBlocksPropsSave = useInnerBlocksProps.save(blockPropsSave);

	return <div {...innerBlocksPropsSave} />;
}

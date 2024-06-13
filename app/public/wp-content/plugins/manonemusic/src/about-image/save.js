import {
	useBlockProps,
	InnerBlocks,
	useInnerBlocksProps,
} from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { tag, classes } = attributes;
	const blockPropsSave = useBlockProps.save();
	const innerBlocksPropsSave = useInnerBlocksProps.save(blockPropsSave);

	return <div {...innerBlocksPropsSave} />;
}

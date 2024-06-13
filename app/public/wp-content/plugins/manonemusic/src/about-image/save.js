import { useBlockProps } from "@wordpress/block-editor";

export default function Save() {
	const blockPropsSave = useBlockProps.save();

	return <div {...blockPropsSave} />;
}

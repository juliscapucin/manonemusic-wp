import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const blockProps = useBlockProps.save();

	return <RichText.Content {...blockProps} value={attributes.text} />;
}

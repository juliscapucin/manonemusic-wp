import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { releaseDate, projectDescription, url, label } = attributes;
	const blockProps = useBlockProps.save();

	return <div {...blockProps}></div>;
}

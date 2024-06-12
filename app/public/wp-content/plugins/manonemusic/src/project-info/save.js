import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { releaseDate, projectDescription, url, label } = attributes;
	const blockProps = useBlockProps.save({
		className: "w-full flex gap-16 mt-16",
	});

	return <div {...blockProps}></div>;
}

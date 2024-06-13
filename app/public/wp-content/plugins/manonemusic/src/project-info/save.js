import { useBlockProps, RichText, PlainText } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { releaseDate, projectDescription, url, label } = attributes;
	const blockProps = useBlockProps.save({
		className: "w-full flex gap-16 mt-16",
	});

	return (
		<div {...blockProps}>
			<RichText.Content value={projectDescription} />
			<PlainText.Content value={label} />
			<PlainText.Content value={url} />
		</div>
	);
}

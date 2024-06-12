import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { releaseDate, projectDescription, url, label, openInNewTab } =
		attributes;
	const blockProps = useBlockProps.save({
		className: "w-full flex gap-16 mt-16",
	});

	return (
		<div {...blockProps}>
			<RichText.Content tagName="p" value={releaseDate} />
			<RichText.Content tagName="p" value={projectDescription} />
			<RichText.Content tagName="a" href={url} value={label} />
		</div>
	);
}

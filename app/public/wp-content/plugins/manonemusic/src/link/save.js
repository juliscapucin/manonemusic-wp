import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { url, label, openInNewTab } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<a
				href={url}
				target={openInNewTab ? "_blank" : undefined}
				rel="noopener noreferrer"
			>
				{label}
			</a>
		</div>
	);
}

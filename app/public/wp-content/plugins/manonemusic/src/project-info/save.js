import { useBlockProps, RichText, PlainText } from "@wordpress/block-editor";

export default function Save() {
	const blockProps = useBlockProps.save({
		className: "w-full flex gap-16 mt-16",
	});

	return (
		<div {...blockProps}>
			<RichText.Content />
			<PlainText.Content />
			<PlainText.Content />
		</div>
	);
}

import { useBlockProps, RichText } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit({ setAttributes, attributes }) {
	const blockProps = useBlockProps();
	function editContent(x) {
		setAttributes({ label: x });
	}

	return (
		<div {...blockProps}>
			<RichText
				tagName={"p"}
				className={"text-3xl"}
				value={attributes.label}
				onChange={editContent}
			/>
		</div>
	);
}

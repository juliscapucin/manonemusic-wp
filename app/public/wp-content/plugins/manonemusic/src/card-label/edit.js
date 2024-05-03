import { useBlockProps, RichText } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit({ setAttributes, attributes }) {
	function editContent(x) {
		setAttributes({ label: x });
	}

	return (
		<RichText
			tagName={"p"}
			className={
				"w-3/4 md:w-1/4 mt-32 md:mt-4 font-primary text-secondary uppercase"
			}
			value={attributes.label}
			onChange={editContent}
			placeholder="Enter the project/release name here"
		/>
	);
}

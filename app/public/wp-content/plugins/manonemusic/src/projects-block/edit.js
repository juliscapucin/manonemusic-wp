import { RichText, useBlockProps, InnerBlocks } from "@wordpress/block-editor";

import "./editor.scss";

const TEMPLATE = [
	["manonemusic/custom-heading", { placeholder: "Insert Your Title Here" }],
	["manonemusic/project-card", { placeholder: "Project Card" }],
];

export default function Edit({ setAttributes, attributes }) {
	const blockProps = useBlockProps();

	function editTitle(x) {
		setAttributes({ title: x });
	}

	function editParagraph(x) {
		setAttributes({ paragraph: x });
	}

	return (
		<div {...blockProps}>
			<InnerBlocks template={TEMPLATE} templateLock="all" />
			<section className="min-w-screen h-screen min-h-svh p-8 text-secondary">
				<RichText
					tagName={"p"}
					className={"w-3/4 md:w-1/4 mt-32 md:mt-4"}
					value={attributes.paragraph}
					onChange={editParagraph}
				/>
			</section>
		</div>
	);
}

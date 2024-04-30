import { RichText, useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

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
			<section className="min-w-screen h-screen min-h-svh p-8">
				<RichText
					tagName={"h1"}
					className={"text-6xl w-3/4 md:w-1/4 mt-32 md:mt-4"}
					value={attributes.title}
					onChange={editTitle}
				/>
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

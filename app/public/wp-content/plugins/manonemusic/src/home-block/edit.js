import { RichText, useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit({ setAttributes, attributes }) {
	const blockProps = useBlockProps();

	function editSlogan(x) {
		setAttributes({ slogan: x });
	}

	function editParagraph(x) {
		setAttributes({ paragraph: x });
	}

	return (
		<div {...blockProps}>
			<section className="min-w-screen h-screen min-h-svh p-8 text-secondary">
				<div className="flex mt-48 w-screen pr-16">
					<RichText
						tagName={"h2"}
						className={"text-4xl w-3/4 md:w-1/4 mt-32 md:mt-4 font-primary"}
						value={attributes.slogan}
						onChange={editSlogan}
					/>
				</div>
				<span>Location: Amsterdam</span>
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

import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { RichText, BlockControls } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit({ setAttributes, attributes }) {
	function handleTextChange(x) {
		setAttributes({ text: x });
	}

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="heading"
						title="Heading"
						isPressed={attributes.tag === "h1"}
						onClick={() => setAttributes({ tag: "h1" })}
					/>
					<ToolbarButton
						icon="heading"
						title="Subheading"
						isPressed={attributes.tag === "h2"}
						onClick={() => setAttributes({ tag: "h2" })}
					/>
					<ToolbarButton
						icon="heading"
						title="Title"
						isPressed={attributes.tag === "h3"}
						onClick={() => setAttributes({ tag: "h3" })}
					/>
				</ToolbarGroup>
			</BlockControls>
			<RichText
				tagName={attributes.tag}
				className={`font-primary text-secondary uppercase ${attributes.size}`}
				value={attributes.text}
				onChange={handleTextChange}
				placeholder="Enter your title here"
			/>
		</>
	);
}

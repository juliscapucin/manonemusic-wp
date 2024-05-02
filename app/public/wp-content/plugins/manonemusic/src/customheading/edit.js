import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import {
	RichText,
	BlockControls,
	useBlockProps,
} from "@wordpress/block-editor";
import { useState, useEffect } from "react";

import "./editor.scss";

export default function Edit({ setAttributes, attributes }) {
	const [textSize, setTextSize] = useState("text-8xl");
	const blockProps = useBlockProps();

	function handleTextChange(x) {
		setAttributes({ text: x });
	}

	function setTag(tag) {
		setAttributes({ tag });
	}

	useEffect(() => {
		switch (attributes.tag) {
			case "h1":
				setTextSize("text-8xl");
				break;
			case "h2":
				setTextSize("text-6xl");
				break;
			case "h3":
				setTextSize("text-4xl");
				break;
			default:
				setTextSize("text-8xl");
				break;
		}
	}, [attributes.tag]);

	return (
		<div {...blockProps}>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="heading"
						title="Heading"
						isPressed={attributes.tag === "h1"}
						onClick={() => setTag("h1")}
					/>
					<ToolbarButton
						icon="heading"
						title="Subheading"
						isPressed={attributes.tag === "h2"}
						onClick={() => setTag("h2")}
					/>
					<ToolbarButton
						icon="heading"
						title="Title"
						isPressed={attributes.tag === "h3"}
						onClick={() => setTag("h3")}
					/>
				</ToolbarGroup>
			</BlockControls>
			<RichText
				tagName={attributes.tag}
				className={`font-primary text-secondary uppercase ${textSize}`}
				value={attributes.text}
				onChange={handleTextChange}
				placeholder="Enter your title here"
			/>
		</div>
	);
}

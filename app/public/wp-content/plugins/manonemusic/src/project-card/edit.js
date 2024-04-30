import "./editor.scss";
import {
	useBlockProps,
	useInnerBlocksProps,
	BlockControls,
	__experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import {
	ToolbarGroup,
	ToolbarButton,
	Popover,
	Button,
	ToggleControl,
} from "@wordpress/components";
import { useState } from "react";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps();
	const { linkObject } = attributes;

	const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false);

	function buttonHandler() {
		setIsLinkPickerVisible((prev) => !prev);
	}

	function handleLinkChange(newLink) {
		setAttributes({ linkObject: newLink });
	}

	return (
		<div {...blockProps}>
			<div {...innerBlocksProps} />
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton onClick={buttonHandler} icon="admin-links" />
				</ToolbarGroup>
			</BlockControls>
			{isLinkPickerVisible && (
				<Popover
					position="bottom-start"
					onFocusOutside={() => setIsLinkPickerVisible(false)}
				>
					<LinkControl
						settings={[]}
						value={linkObject}
						onChange={handleLinkChange}
					/>
					<Button
						variant="primary"
						onClick={() => setIsLinkPickerVisible(false)}
						style={{ display: "block", width: "100%" }}
					>
						Close Link Picker
					</Button>
				</Popover>
			)}
		</div>
	);
}

import "./editor.scss";
import {
	useBlockProps,
	useInnerBlocksProps,
	InnerBlocks,
	BlockControls,
	__experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import {
	ToolbarGroup,
	ToolbarButton,
	Popover,
	Button,
	ToggleControl,
	Placeholder,
} from "@wordpress/components";
import { link } from "@wordpress/icons";
import { useState } from "react";

const CARD_TEMPLATE = [
	["core/image", {}],
	["manonemusic/card-label", { placeholder: "Enter Project Title" }],
];

const MyPlaceholder = () => (
	<Placeholder icon={link} className="opacity-30 h-12" label="Add card link" />
);

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
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
			{isLinkPickerVisible ? (
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
			) : (
				<MyPlaceholder />
			)}
			<div className="bg-faded-10">
				<InnerBlocks
					template={CARD_TEMPLATE}
					templateLock="all"
					renderAppender={InnerBlocks.ButtonBlockAppender}
				/>
			</div>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton onClick={buttonHandler} icon="admin-links" />
				</ToolbarGroup>
			</BlockControls>
		</div>
	);
}

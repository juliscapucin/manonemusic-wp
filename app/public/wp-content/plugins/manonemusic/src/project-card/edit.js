import "./editor.scss";
import {
	useBlockProps,
	useInnerBlocksProps,
	InnerBlocks,
	BlockControls,
	InspectorControls,
	MediaPlaceholder,
	__experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import {
	ToolbarGroup,
	ToolbarButton,
	Popover,
	Button,
	ToggleControl,
	Placeholder,
	Panel,
	PanelBody,
	PanelRow,
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
			<InspectorControls>
				<Panel>
					<PanelBody title="Link Settings">
						<PanelRow>
							<LinkControl
								settings={[]}
								value={linkObject}
								onChange={handleLinkChange}
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
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
				{/* <MediaPlaceholder
					onSelect={(image) => {
						setAttributes({ image_url: image.url, image_id: image.id });
					}}
					allowedTypes={["image"]}
					multiple={false}
					labels={{ title: "CTA Image" }}
				></MediaPlaceholder> */}
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

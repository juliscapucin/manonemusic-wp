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
import { useState } from "@wordpress/element";

const CARD_TEMPLATE = [
	["core/image", {}],
	["manonemusic/card-label", { placeholder: "Enter Project Title" }],
];

const MyPlaceholder = () => (
	<Placeholder icon={link} className="opacity-30 h-12" label="Add card link" />
);

export default function Edit({ attributes, setAttributes }) {
	const { linkObject } = attributes;

	const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false);

	const blockProps = useBlockProps();

	// TODO: add code from this page: https://gutenberg.10up.com/training/inner-blocks
	const innerBlocksProps = useInnerBlocksProps(
		{},
		{
			template: [
				["core/image", {}],
				["manonemusic/card-label", { placeholder: "Enter Project Title" }],
			],
		},
	);

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
			<div className="bg-faded-10" {...innerBlocksProps} />
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton onClick={buttonHandler} icon="admin-links" />
				</ToolbarGroup>
			</BlockControls>
		</div>
	);
}

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

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.css";

const MyPlaceholder = () => (
	<Placeholder icon={link} className="opacity-30 h-12" label="Add card link" />
);

export default function Edit({ attributes, setAttributes }) {
	const { linkObject } = attributes;

	const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false);

	const blockProps = useBlockProps();

	const innerBlocksProps = useInnerBlocksProps(
		{},
		{
			template: [["core/image", {}]],
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
			<div className="w-64 h-64 mb-16">
				<div {...innerBlocksProps} />
			</div>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton onClick={buttonHandler} icon="admin-links" />
				</ToolbarGroup>
			</BlockControls>
		</div>
	);
}

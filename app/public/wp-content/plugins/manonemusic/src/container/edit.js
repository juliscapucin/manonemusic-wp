import "./editor.scss";
import {
	useBlockProps,
	useInnerBlocksProps,
	InnerBlocks,
	BlockControls,
	InspectorControls,
	MediaPlaceholder,
} from "@wordpress/block-editor";
import {
	Popover,
	Button,
	ToggleControl,
	Placeholder,
	Panel,
	PanelBody,
	PanelRow,
	TextControl,
	SelectControl,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { tag, classes } = attributes;

	const innerBlocksProps = useInnerBlocksProps(
		{},
		{
			template: [["core/image", {}]],
		},
	);

	function setClasses(classes) {
		setAttributes({ classes });
	}

	function setTag(tag) {
		setAttributes({ tag });
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title="Classes">
					<PanelRow>
						<TextControl
							label="Tailwind classes"
							help="add classes to the container element"
							value={classes}
							onChange={setClasses}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Select Control"
							value={tag}
							options={[
								{ value: "div", label: "<div>" },
								{ value: "main", label: "<main>" },
								{ value: "section", label: "<section>" },
							]}
							onChange={setTag}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className="w-64 h-64 mb-16">
					<div {...innerBlocksProps} />
				</div>
			</div>
		</>
	);
}

import "./editor.scss";
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, PanelRow, TextControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { classes } = attributes;

	const innerBlocksProps = useInnerBlocksProps(
		{},
		{
			template: [["manonemusic/project-card", {}]],
		},
	);

	function setClasses(classes) {
		setAttributes({ classes });
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
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div {...innerBlocksProps} />
			</div>
		</>
	);
}

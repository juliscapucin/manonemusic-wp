import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	TextControl,
	SelectControl,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.css";

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

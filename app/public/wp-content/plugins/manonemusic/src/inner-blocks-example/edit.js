import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	Button,
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
	const blockProps = useBlockProps({
		className:
			"absolute -top-[--header-height] w-screen h-[--container-height-desktop] max-w-wide mx-auto flex justify-center items-center -z-10",
	});

	const innerBlocksProps = useInnerBlocksProps(
		{},
		{
			template: [["core/image", {}]],
		},
	);

	function onFileSelect(media) {
		setAttributes({ image: media.id });
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title="Image">
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) => {
									onFileSelect(media);
								}}
								value={1}
								render={({ open }) => (
									<Button className="bg-primary text-secondary" onClick={open}>
										Select Image
									</Button>
								)}
							/>
						</MediaUploadCheck>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className="relative w-64 h-64 overflow-clip mb-16">
					<div {...innerBlocksProps} />
				</div>
			</div>
		</>
	);
}

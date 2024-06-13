import { useEffect, useState } from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";
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
		className: "absolute top-0 w-64",
	});
	const { imgId, imgUrl, imgAlt } = attributes;
	const [url, setUrl] = useState(imgUrl);

	function onFileSelect(media) {
		setAttributes({ imgId: media.id });
	}

	useEffect(() => {
		async function fetchImage() {
			const response = await apiFetch({
				path: `/wp/v2/media/${imgId}`,
				method: "GET",
			});
			setAttributes({
				imgURL: response.media_details.sizes.full.source_url,
				imgAlt: response.alt_text,
			});
			setUrl(response.media_details.sizes.full.source_url);
			console.log(imgId, imgAlt);
		}
		fetchImage();
	}, [imgId]);

	return (
		<>
			<InspectorControls>
				<PanelBody title="Image">
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onFileSelect}
								value={imgId}
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
					<img src={url} className="w-full h-full object-cover" alt={imgAlt} />
				</div>
			</div>
		</>
	);
}

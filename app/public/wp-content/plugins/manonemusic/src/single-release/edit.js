import "./editor.scss";
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";
import { useSelect, select } from "@wordpress/data";
import { useState, useEffect } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { section } = attributes;

	const posts = useSelect((select) => {
		const { getEntityRecords } = select("core");
		return getEntityRecords("postType", "release", {
			per_page: -1,
			_embed: true,
			order: "desc",
		});
	});

	const post = useSelect((select) => {
		const { getCurrentPost } = select("core/editor");
		return getCurrentPost();
	}, []);

	return (
		<>
			<InspectorControls>
				<PanelBody title="Settings">
					<SelectControl
						label="Select parent page / section"
						value={section}
						options={[
							{ value: "project", label: "projects" },
							{ value: "release", label: "releases" },
						]}
						onChange={(newSection) => setAttributes({ section: newSection })}
					/>
				</PanelBody>
			</InspectorControls>
			{/* BUG – Tailwind classes for root container don't work here. Added them in style.css */}
			<div {...blockProps}>
				{post && (
					<div className="block relative w-full aspect-square">
						<RichText
							tagName="h1"
							value={post.title}
							onChange={(newTitle) => (post.title = newTitle)}
						/>
					</div>
				)}
			</div>
		</>
	);
}

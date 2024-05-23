import "./editor.scss";
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { RawHTML } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { section } = attributes;

	// blockProps.className = "manonemusic-cards-stack";

	const innerBlocksProps = useInnerBlocksProps(
		{},
		{
			template: [["manonemusic/project-card", {}]],
		},
	);

	const posts = useSelect((select) => {
		const { getEntityRecords } = select("core");
		return getEntityRecords("postType", "release", {
			per_page: -1,
			_embed: true,
			order: "desc",
		});
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title="Settings">
					<SelectControl
						label="Select Control"
						value={tag}
						options={[
							{ value: "projects", label: "projects" },
							{ value: "releases", label: "releases" },
						]}
						onChange={(newSection) => setAttributes({ section: newSection })}
					/>
				</PanelBody>
			</InspectorControls>
			{/* BUG – Tailwind classes for root container don't work here. Added them in style.css */}
			<div {...blockProps}>
				{posts &&
					posts.length > 0 &&
					posts.map((post) => {
						return (
							<a
								href={post.link}
								className="block relative w-full aspect-square"
							>
								<img
									className="w-full h-full object-cover"
									src={post._embedded["wp:featuredmedia"][0].source_url}
								/>
								<p className="">
									<RawHTML>{post.title.rendered}</RawHTML>
								</p>
							</a>
						);
					})}
			</div>
		</>
	);
}

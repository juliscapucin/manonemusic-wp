import "./editor.scss";
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	TextControl,
	QueryControls,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { RawHTML } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { count } = attributes;

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

	console.log(posts);

	return (
		<>
			<InspectorControls>
				<PanelBody title="Settings">
					<QueryControls
						numberOfItems={count}
						onNumberOfItemsChange={(count) => setAttributes({ count })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				{posts &&
					posts.length > 0 &&
					posts.map((post) => {
						return (
							<div className="relative w-full aspect-square">
								<img
									className="w-full h-full object-cover"
									src={post._embedded["wp:featuredmedia"][0].source_url}
								/>
								<p className="">
									<RawHTML>{post.title.rendered}</RawHTML>
								</p>
							</div>
						);
					})}
			</div>
		</>
	);
}

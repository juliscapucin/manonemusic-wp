import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { RawHTML } from "@wordpress/element";

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
	const { section } = attributes;

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
			<div
				{...blockProps}
				className="absolute top-0 right-32 w-96 h-full overflow-y-scroll pt-16 pr-8 pb-8 space-y-8 z-40"
			>
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

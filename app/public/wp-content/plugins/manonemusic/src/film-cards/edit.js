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

export default function Edit() {
	const blockProps = useBlockProps({ className: "w-full flex gap-32 mt-8" });

	const posts = useSelect((select) => {
		const { getEntityRecords } = select("core");
		return getEntityRecords("postType", "film", {
			per_page: -1,
			_embed: true,
			order: "desc",
		});
	}, []);

	return (
		<div {...blockProps}>
			{posts &&
				posts.length > 0 &&
				posts.map((post) => {
					return (
						<div className="relative w-40 max-w-40 inline-block">
							<div className="aspect-[6/8.5] overflow-clip">
								<img
									className="w-full h-full object-cover"
									src={post._embedded["wp:featuredmedia"][0].source_url}
								/>
							</div>
							<p className="">
								<RawHTML>{post.title.rendered}</RawHTML>
							</p>
						</div>
					);
				})}
		</div>
	);
}

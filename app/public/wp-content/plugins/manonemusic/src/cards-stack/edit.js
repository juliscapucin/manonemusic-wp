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
	const { section, variant, classes } = attributes;
	const homeVariantClasses =
		"absolute top-0 right-32 w-96 h-full overflow-y-scroll pt-16 pr-8 pb-8 space-y-16 z-40";
	const detailPageVariantClasses =
		"fixed w-40 h-full top-0 right-40 overflow-y-scroll pt-16 pr-8 pb-8 space-y-16";
	const blockProps =
		variant === "home"
			? useBlockProps({ className: homeVariantClasses })
			: useBlockProps({ className: detailPageVariantClasses });

	const posts = useSelect(
		(select) => {
			const { getEntityRecords } = select("core");
			return getEntityRecords("postType", section, {
				per_page: -1,
				_embed: true,
				meta_key: "release_date",
				orderby: "meta_value",
				order: "asc",
			});
		},
		[section],
	);

	const handleVariantChange = (newVariant) => {
		const newClasses = `${
			newVariant === "home" ? homeVariantClasses : detailPageVariantClasses
		}`;
		setAttributes({
			variant: newVariant,
			classes: newClasses,
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Settings">
					<SelectControl
						label="Select section"
						value={section}
						options={[
							{ value: "film", label: "Films" },
							{ value: "commercial", label: "Commercials" },
							{ value: "project", label: "Projects" },
							{ value: "release", label: "Releases" },
						]}
						onChange={(newSection) => setAttributes({ section: newSection })}
					/>
					<SelectControl
						label="Select variant"
						value={variant}
						options={[
							{ value: "home", label: "Home" },
							{ value: "detail-page", label: "Detail Page" },
						]}
						onChange={handleVariantChange}
					/>
				</PanelBody>
			</InspectorControls>
			<div
				{...blockProps}
				style={{
					backgroundColor: "var(--color-primary)",
				}}
			>
				{posts &&
					posts.length > 0 &&
					posts.map((post) => {
						return (
							<div className="block relative w-full aspect-square">
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

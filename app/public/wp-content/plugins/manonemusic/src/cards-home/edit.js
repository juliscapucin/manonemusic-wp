import { useState } from "@wordpress/element";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
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
	const blockProps = useBlockProps({
		className: "absolute bottom-8 w-full flex gap-16 mt-16",
	});
	const { aspectRatio, section } = attributes;

	const aspectRelease = "aspect-square";
	const aspectFilm = "aspect-[6/8.5]";
	const aspectCommercial = "aspect-video";
	const aspectProject = "aspect-[16/9]";

	const posts = useSelect((select) => {
		const { getEntityRecords } = select("core");
		return getEntityRecords("postType", section, {
			per_page: -1,
			_embed: true,
			order: "desc",
		});
	}, []);

	function handleSectionChange(newSection) {
		console.log(newSection);
		const newAspect =
			newSection === "release"
				? aspectRelease
				: newSection === "film"
				? aspectFilm
				: newSection === "commercial"
				? aspectCommercial
				: newSection === "project"
				? aspectProject
				: "";
		setAttributes({ aspectRatio: newAspect, section: newSection });
	}

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
						onChange={handleSectionChange}
					/>
					{/* <SelectControl
						label="Select variant"
						value={variant}
						options={[
							{ value: "home", label: "Home" },
							{ value: "detail-page", label: "Detail Page" },
						]}
						onChange={handleVariantChange}
					/> */}
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				{posts &&
					posts.length > 0 &&
					posts.map((post) => {
						return (
							<div className="relative inline-block w-40 min-w-40 max-w-40 h-64">
								<div className={`overflow-clip ${aspectRatio}`}>
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
		</>
	);
}

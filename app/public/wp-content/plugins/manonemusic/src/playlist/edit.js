import "./editor.scss";
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";
import { useSelect } from "@wordpress/data";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { tracklist, count } = attributes;

	const post = useSelect((select) => {
		const { getCurrentPost } = select("core/editor");
		return getCurrentPost();
	}, []);

	console.log(post);

	return (
		<>
			<InspectorControls>
				<PanelBody title="Settings">
					<SelectControl
						label="Select number of tracks"
						value={count}
						options={[
							{ value: 1, label: "1" },
							{ value: 2, label: "2" },
							{ value: 3, label: "3" },
							{ value: 4, label: "4" },
							{ value: 5, label: "5" },
							{ value: 6, label: "6" },
							{ value: 7, label: "7" },
							{ value: 8, label: "8" },
							{ value: 9, label: "9" },
							{ value: 10, label: "10" },
							{ value: 11, label: "11" },
							{ value: 12, label: "12" },
						]}
						onChange={(newCount) => setAttributes({ count: newCount })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				{Array.from({ length: count }).map((item, index) => {
					return (
						<div className="mb-4">
							<RichText
								tagName="h3"
								value={item}
								onChange={(newContent) => {
									let newTracklist = [...tracklist]; // create a copy of tracklist
									newTracklist[index] = {
										...newTracklist[index],
										title: newContent,
									}; // update the title at the index position
									setAttributes({ tracklist: newTracklist });
								}}
								placeholder="Track title"
							/>
							<RichText
								tagName="p"
								value={item}
								onChange={(newContent) => {
									let newTracklist = [...tracklist]; // create a copy of tracklist
									newTracklist[index] = {
										...newTracklist[index],
										url: newContent,
									}; // update the url at the index position
									setAttributes({ tracklist: newTracklist });
								}}
								placeholder="Track url"
							/>
						</div>
					);
				})}
			</div>
		</>
	);
}

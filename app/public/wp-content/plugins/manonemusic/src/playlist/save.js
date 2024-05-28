import {
	useBlockProps,
	useInnerBlocksProps,
	RichText,
} from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { count, tracklist } = attributes;
	const blockPropsSave = useBlockProps.save();

	return (
		<div {...blockPropsSave}>
			{tracklist.map((track, index) => {
				return (
					<div className="mb-4" key={`save-tracklist-${index}`}>
						<RichText.Content />
						<RichText.Content />
					</div>
				);
			})}
		</div>
	);
}

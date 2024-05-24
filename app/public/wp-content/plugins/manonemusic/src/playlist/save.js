import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { count, tracklist } = attributes;
	const blockPropsSave = useBlockProps.save();

	return (
		<div {...blockPropsSave}>
			{Array.from({ length: count }).map((item, index) => {
				const track = tracklist[index] || {};
				return (
					<div className="mb-4" key={index}>
						<h3>{track.title || ""}</h3>
						<p>{track.url || ""}</p>
					</div>
				);
			})}
		</div>
	);
}

import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { releaseDate, projectUrl, projectDescription } = attributes;
	const blockProps = useBlockProps.save({
		className: "w-full flex gap-16 mt-16",
	});

	return (
		<div {...blockProps}>
			<RichText.Content
				tagName="div"
				className="release-date"
				value={releaseDate}
			/>
			<RichText.Content
				tagName="div"
				className="project-description"
				value={projectDescription}
			/>
			<RichText.Content
				tagName="div"
				className="project-url"
				value={projectUrl}
			/>
		</div>
	);
}

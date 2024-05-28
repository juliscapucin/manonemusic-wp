import "./editor.scss";
import { useBlockProps } from "@wordpress/block-editor";
import {
	TextControl,
	Button,
	Flex,
	FlexBlock,
	FlexItem,
} from "@wordpress/components";
import { Fragment } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { tracklist } = attributes;

	const updateTrackTitle = (index, newTitle) => {
		const newTracklist = [...tracklist];
		newTracklist[index] = { ...newTracklist[index], title: newTitle };
		setAttributes({ tracklist: newTracklist });
	};

	const updateTrackURL = (index, newURL) => {
		const newTracklist = [...tracklist];
		newTracklist[index] = { ...newTracklist[index], url: newURL };
		setAttributes({ tracklist: newTracklist });
	};

	return (
		<div
			{...blockProps}
			style={{
				padding: "2rem",
			}}
		>
			{tracklist.map((track, index) => {
				return (
					<Fragment key={`trackInput-${index}`}>
						<Flex>
							<FlexBlock>
								<TextControl
									label="Track title:"
									value={track.title}
									onChange={(newTitle) => updateTrackTitle(index, newTitle)}
									style={{
										color: "var(--color-secondary)",
										backgroundColor: "var(--color-primary)",
									}}
								/>
							</FlexBlock>

							<FlexBlock>
								<TextControl
									label="Track link:"
									value={track.url}
									onChange={(newURL) => updateTrackURL(index, newURL)}
									style={{
										color: "var(--color-secondary)",
										backgroundColor: "var(--color-primary)",
									}}
								/>
							</FlexBlock>

							<FlexItem>
								<Button variant="link">Remove Track</Button>
							</FlexItem>
						</Flex>
					</Fragment>
				);
			})}
			<Button
				variant="primary"
				icon={"plus-alt"}
				style={{
					margin: "1rem auto 0 auto",
					display: "flex",
					padding: "0 5rem",
				}}
			>
				Add New Track
			</Button>
		</div>
	);
}

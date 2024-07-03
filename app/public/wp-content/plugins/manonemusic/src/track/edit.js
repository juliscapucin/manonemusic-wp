import { useBlockProps } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import {
	TextControl,
	Button,
	Flex,
	FlexBlock,
	FlexItem,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.css";
import { post } from "@wordpress/icons";

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({
		className: "mt-8",
		style: { width: "90%" },
	});
	const { tracklist } = attributes;

	const updateTrackName = (index, newName) => {
		const newTracklist = [...tracklist];
		newTracklist[index] = { ...newTracklist[index], name: newName };
		setAttributes({ tracklist: newTracklist });
	};

	const updateTrackURL = (index, newURL) => {
		const newTracklist = [...tracklist];
		newTracklist[index] = { ...newTracklist[index], url: newURL };
		setAttributes({ tracklist: newTracklist });
	};

	const removeTrack = (index) => {
		const newTracklist = [...tracklist];
		newTracklist.splice(index, 1);
		setAttributes({ tracklist: newTracklist });
	};

	const posts = useSelect((select) => {
		const { getEntityRecords } = select("core");
		return getEntityRecords("postType", "release", {
			per_page: -1,
			_embed: true,
			order: "desc",
		});
	}, []);

	if (!posts) {
		return <div>Loading...</div>;
	} else {
		console.log(posts);
	}

	return (
		<div {...blockProps}>
			{tracklist.map((track, index) => {
				return (
					<div
						style={index > 0 ? { marginTop: "1rem" } : {}}
						key={`trackInput-${index}`}
					>
						<Flex>
							<FlexBlock>
								<TextControl
									label="Track name:"
									autoFocus={track.name == undefined}
									value={track.name}
									onChange={(newName) => updateTrackName(index, newName)}
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
								<Button
									onClick={() => removeTrack(index)}
									variant="link"
									style={{ color: "var(--color-secondary)" }}
								>
									Remove Track
								</Button>
							</FlexItem>
						</Flex>
					</div>
				);
			})}
			<Button
				onClick={() => {
					setAttributes({
						tracklist: tracklist.concat({ title: undefined, url: "" }),
					});
				}}
				variant="primary"
				icon={"plus-alt"}
				style={{
					margin: "1.5rem auto 0 auto",
					display: "flex",
					padding: "0 5rem",
				}}
			>
				Add New Track
			</Button>
		</div>
	);
}

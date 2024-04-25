import { ToolbarGroup, ToolbarButton } from "@wordpress/components"
import { registerBlockType } from "@wordpress/blocks"
import { RichText, BlockControls } from "@wordpress/block-editor"

registerBlockType("manonemusic/customheading", {
	title: "Heading Custom",
	attributes: {
		text: { type: "string" },
		size: { type: "string", default: "text-9xl" },
		tag: { type: "string", default: "h1" },
	},
	edit: EditComponent,
	save: SaveComponent,
})

function EditComponent(props) {
	function handleTextChange(x) {
		props.setAttributes({ text: x })
	}

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon='heading'
						title='Heading'
						isPressed={props.attributes.tag === "h1"}
						onClick={() => props.setAttributes({ tag: "h1" })}
					/>
					<ToolbarButton
						icon='heading'
						title='Subheading'
						isPressed={props.attributes.tag === "h2"}
						onClick={() => props.setAttributes({ tag: "h2" })}
					/>
					<ToolbarButton
						icon='heading'
						title='Title'
						isPressed={props.attributes.tag === "h3"}
						onClick={() => props.setAttributes({ tag: "h3" })}
					/>
				</ToolbarGroup>
			</BlockControls>
			<RichText
				tagName={props.attributes.tag}
				className={props.attributes.size}
				value={props.attributes.text}
				onChange={handleTextChange}
			/>
		</>
	)
}

function SaveComponent(props) {
	return (
		<RichText.Content
			tagName={props.attributes.tag}
			className={`${props.attributes.size} text-9xl text-slate-800`}
			value={props.attributes.text}
		/>
	)
}

import { registerBlockType } from "@wordpress/blocks"
import { RichText } from "@wordpress/block-editor"

registerBlockType("manonemusic/custombutton", {
	title: "Button Custom",
	attributes: {
		text: { type: "string" },
		class: { type: "string", default: "w-fit p-2 text-white bg-slate-900" },
	},
	edit: EditComponent,
	save: SaveComponent,
})

function EditComponent(props) {
	function handleTextChange(x) {
		props.setAttributes({ text: x })
	}

	return (
		<RichText
			value={props.attributes.text}
			className={props.attributes.class}
			onChange={handleTextChange}
		/>
	)
}

function SaveComponent(props) {
	return (
		<a href='#' className={props.attributes.class}>
			{props.attributes.text}
		</a>
	)
}

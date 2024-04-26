import { link } from "@wordpress/icons"
import {
	ToolbarGroup,
	ToolbarButton,
	Popover,
	Button,
	ToggleControl,
} from "@wordpress/components"
import {
	RichText,
	BlockControls,
	__experimentalLinkControl as LinkControl,
	URLPopover,
} from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"
import { useState } from "react"

registerBlockType("manonemusic/custombutton", {
	title: "Button Custom",
	attributes: {
		text: { type: "string" },
		linkObject: { type: "object", default: { url: "" } },
		className: { type: "string", default: "bg-red-400 p-2 w-fit" },
		isExternal: { type: "boolean", default: false },
	},
	editorStyle: "file:./style-index.css",
	style: "file:./style-index.css",
	edit: EditComponent,
	save: SaveComponent,
})

function EditComponent(props) {
	const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false)

	function handleTextChange(x) {
		props.setAttributes({ text: x })
	}

	function buttonHandler() {
		setIsLinkPickerVisible((prev) => !prev)
	}

	function handleLinkChange(newLink) {
		props.setAttributes({ linkObject: newLink })
	}

	function setTarget() {
		props.setAttributes({ isExternal: !props.attributes.isExternal })
	}

	function submitURL(e) {
		e.preventDefault()
		props.setAttributes({ linkObject: { url } })
		setIsLinkPickerVisible(false)
	}

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton onClick={buttonHandler} icon={link} />
				</ToolbarGroup>
			</BlockControls>
			<RichText
				allowedFormats={[]}
				tagName='a'
				className={props.attributes.className}
				value={props.attributes.text}
				onChange={handleTextChange}
			/>
			{isLinkPickerVisible && (
				<Popover
					position='bottom-start'
					onFocusOutside={() => setIsLinkPickerVisible(false)}
				>
					<LinkControl
						settings={[]}
						value={props.attributes.linkObject}
						onChange={handleLinkChange}
					/>
					<ToggleControl
						label={"Open in new tab"}
						checked={props.attributes.isExternal}
						onChange={setTarget}
						className='pl-16 bg-red-600' //TODO: fix this margin
					/>
					<Button
						variant='primary'
						onClick={() => setIsLinkPickerVisible(false)}
						style={{ display: "block", width: "100%" }}
					>
						Close Link Picker
					</Button>
				</Popover>
				// <URLPopover
				// 	onClose={() => setIsLinkPickerVisible(false)}
				// 	renderSettings={() => (
				// 		<ToggleControl
				// 			label={"Open in new tab"}
				// 			checked={props.attributes.isExternal}
				// 			onChange={setTarget}
				// 		/>
				// 	)}
				// >
				// 	<form onSubmit={submitURL}>
				// 		<input
				// 			type='url'
				// 			value={props.attributes.linkObject.url}
				// 			onChange={handleLinkChange}
				// 		/>
				// 		<Button icon={keyboardReturn} label={"Apply"} type='submit' />
				// 	</form>
				// </URLPopover>
			)}
		</>
	)
}

function SaveComponent(props) {
	return (
		<a
			href={props.attributes.linkObject.url}
			target={props.attributes.isExternal ? "_blank" : "_self"}
			className={props.attributes.className}
		>
			{props.attributes.text}
		</a>
	)
}

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
} from "@wordpress/block-editor"
import { useState } from "react"

export default function Edit(props) {
	const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false)

	console.log("custombutton")

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
			)}
		</>
	)
}

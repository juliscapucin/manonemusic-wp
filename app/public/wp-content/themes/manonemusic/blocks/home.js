import { InnerBlocks } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"
import { RichText } from "@wordpress/block-editor"

registerBlockType("manonemusic/home", {
	title: "Home",
	icon: "admin-home",
	attributes: {
		slogan: { type: "string", default: "Music & Sound Design" },
		paragraph: {
			type: "string",
			default: `Tailored sound design and audio identities that captures the spirit of your brand and resonate with your audience. Let's elevate your identity through sound.`,
		},
		align: { type: "string", default: "full" },
	},
	supports: { align: ["full"] },
	edit: EditComponent,
	save: SaveComponent,
})

function EditComponent(props) {
	function editSlogan(x) {
		props.setAttributes({ slogan: x })
	}

	function editParagraph(x) {
		props.setAttributes({ paragraph: x })
	}

	return (
		<section className='w-screen h-screen min-h-svh bg-slate-500'>
			<div className='flex mt-48 w-screen pr-16'>
				<RichText
					tagName={"h2"}
					className={"w-3/4 md:w-1/4 mt-32 md:mt-4"}
					value={props.attributes.slogan}
					onChange={editSlogan}
				/>
			</div>
			<span>Location: Amsterdam</span>
			<RichText
				tagName={"p"}
				className={"w-3/4 md:w-1/4 mt-32 md:mt-4"}
				value={props.attributes.paragraph}
				onChange={editParagraph}
			/>
		</section>
	)
}

function SaveComponent(props) {
	return (
		<section className='w-screen h-screen min-h-svh bg-slate-500'>
			<div className='flex mt-48 w-screen pr-16'>
				<RichText.Content
					tagName={"h2"}
					className={"w-3/4 md:w-1/4 mt-32 md:mt-4"}
					value={props.attributes.slogan}
				/>
			</div>
			<span>Location: Amsterdam</span>
			<RichText.Content
				tagName={"p"}
				className={"w-3/4 md:w-1/4 mt-32 md:mt-4"}
				value={props.attributes.paragraph}
			/>
		</section>
	)
}

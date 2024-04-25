import { InnerBlocks } from "@wordpress/block-editor"

wp.blocks.registerBlockType("manonemusic/home", {
	title: "Home",
	icon: "admin-home",
	edit: EditComponent,
	save: SaveComponent,
})

function EditComponent(props) {
	return (
		<section className='relative w-screen h-screen min-h-svh bg-slate-500'>
			<div className='relative flex mt-48 w-screen pr-16'>
				<h2 className='w-1/2'>Music & Sound Design</h2>
				<span>Location: Amsterdam</span>
			</div>

			<p className='w-3/4 md:w-1/4 mt-32 md:mt-4'>
				Tailored sound design and audio identities that captures the spirit of
				your brand and resonate with your audience. Let's elevate your identity
				through sound.
			</p>
		</section>
	)
}

function SaveComponent(props) {
	return (
		<section className='relative w-screen h-screen min-h-svh bg-slate-500'>
			<div className='relative flex mt-48 w-screen pr-16'>
				<h2 className='w-1/2'>Music & Sound Design</h2>
				<span>Location: Amsterdam</span>
			</div>

			<p className='w-3/4 md:w-1/4 mt-32 md:mt-4'>
				Tailored sound design and audio identities that captures the spirit of
				your brand and resonate with your audience. Let's elevate your identity
				through sound.
			</p>
		</section>
	)
}

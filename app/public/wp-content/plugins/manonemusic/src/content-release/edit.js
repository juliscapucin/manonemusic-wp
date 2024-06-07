import {
	useBlockProps,
	useInnerBlocksProps,
	InnerBlocks,
	BlockControls,
	InspectorControls,
} from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.css";

const MY_TEMPLATE = [
	[
		"core/columns",
		{},
		[
			["core/column", {}, [["core/post-featured-image"]]],
			[
				"core/column",
				{},
				[
					["core/post-title", { placeholder: "Post Title" }],
					["core/post-excerpt", { placeholder: "Released on May 2021" }],
					["manonemusic/track", {}],
				],
			],
		],
	],
];

const DEFAULT_BLOCK = {
	name: "core/paragraph",
	attributes: { content: "Lorem ipsum..." },
};

export default function Edit() {
	const blockProps = useBlockProps({
		className: "relative w-full h-64 overflow-clip",
	});

	return (
		<div {...blockProps}>
			<InnerBlocks
				template={MY_TEMPLATE}
				templateLock="all"
				directInsert={true}
			/>
		</div>
	);
}

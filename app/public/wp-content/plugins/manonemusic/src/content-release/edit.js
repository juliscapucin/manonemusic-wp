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

// const MY_TEMPLATE = [
// 	[
// 		"core/columns",
// 		{ className: "mt-32" },
// 		[
// 			["core/column", {}, [["core/post-featured-image", { width: "400px" }]]],
// 			["core/spacer", { height: "60px" }],
// 			[
// 				"core/column",
// 				{},
// 				[
// 					[
// 						"core/post-title",
// 						{
// 							placeholder: "Post Title",
// 							className: "text-headlineLarge leading-none",
// 						},
// 					],
// 					["core/spacer", { height: "60px" }],
// 					["core/post-excerpt", { placeholder: "Released on May 2021" }],
// 					["core/spacer", { height: "60px" }],
// 					["manonemusic/track", {}],
// 				],
// 			],
// 		],
// 	],
// ];

const MY_TEMPLATE = [
	[
		"core/post-title",
		{
			placeholder: "Post Title",
			className: "text-headlineLarge leading-none",
		},
	],
	["core/post-featured-image", { width: "400px" }],
	["manonemusic/project-info", {}],
	["manonemusic/track", {}],
];

export default function Edit() {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<InnerBlocks template={MY_TEMPLATE} directInsert={true} />
		</div>
	);
}

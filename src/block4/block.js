/**
 * Block Name: Test Block
*/

//  Import CSS.
import attributes from './attributes';
import edit from './edit';
import progress from './icon';
import save from './save';


const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


/**
 * Register: Test Block.
 */
registerBlockType( 'bcb/progress', {
	title: __( 'Progress' ),
	description: __( 'Progress bar can be used to show a user how far along he is in a process.' ),
	icon: {
		src: progress,
		foreground: '#7952B3'
	},
	category: 'bootstrap-components-blocks',
	keywords: [
		__( 'Progress Bar' ),
	],
	attributes, 
	edit,
	save,
} );

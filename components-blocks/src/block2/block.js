/**
 * Block Name: Button Block
*/

//  Import CSS.
import attributes from './attributes';
import edit from './edit';
import save from './save';


const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


/**
 * Register: Button Block.
 */
registerBlockType( 'bcb/button', {
	title: __( 'Button' ),
	description: __( 'button styles for actions in forms, dialogs, and more.' ),
	icon: {
		src: 'button',
		foreground: '#7952B3'
	},
	category: 'bootstrap-components-blocks',
	keywords: [
		__( 'Button' ),
	],
	attributes, 
	edit,
	save,
} );

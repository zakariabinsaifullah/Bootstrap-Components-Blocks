/**
 * Block Name: Test Block
*/

//  Import CSS.
import attributes from './attributes';
import edit from './edit';
import './editor.scss';
import alert from './icon';
import save from './save';
import './style.scss';


const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


/**
 * Register: Test Block.
 */
registerBlockType( 'bcb/alert', {
	title: __( 'Alert' ),
	description: __( 'Provide contextual feedback messages for typical user actions.' ),
	icon: {
		src: alert,
		foreground: '#7952B3'
	},
	category: 'bootstrap-components-blocks',
	keywords: [
		__( 'Test Block' ),
	],
	attributes, 
	edit,
	save,
} );

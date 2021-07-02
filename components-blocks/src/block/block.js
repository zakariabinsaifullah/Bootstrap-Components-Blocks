/**
 * Block Name: Button Block
*/

//  Import CSS.
import attributes from './attributes';
import edit from './edit';
import './editor.scss';
import icon from './icon';
import save from './save';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


/**
 * Register: Button Block.
 */
registerBlockType( 'bcb/container', {
	title: __( 'Container' ),
	description: __( 'Containers are a fundamental building block of Bootstrap.' ),
	icon: {
		src: icon,
		foreground: '#7952B3'
	},
	category: 'bootstrap-components-blocks',
	keywords: [
		__( 'Container' ),
	],
	attributes, 
	edit,
	save,
} );

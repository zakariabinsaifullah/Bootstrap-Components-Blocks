<?php
/**
 * Plugin Name: Components Blocks
 * Description: <strong>Components Blocks</strong> is a collection of custom <strong>Gutenberg Blocks</strong> that are built with <strong>Bootstrap Framework</strong>. These work with Bootstrap smoothly. 
 * Author: Zakaria Binsaifullah
 * Author URI: https://makegutenblock.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package BCB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
require_once plugin_dir_path( __FILE__ ) . 'admin/admin.php';
require_once plugin_dir_path( __FILE__ ) . 'admin/subpage.php';

/**
 * Admin CSS Enqueue
 */
function bcb_admin_page_css_init($screen){
	// print_r($screen); 
	// wp_die();
	if($screen === 'toplevel_page_bootstrap-blocks'){
		wp_enqueue_style( 'admin-css', plugins_url( 'admin/css/admin.css', __FILE__ ) );
	}
}
 add_action( 'admin_enqueue_scripts', 'bcb_admin_page_css_init' );

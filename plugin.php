<?php
/**
 * Plugin Name: Bootstrap Components Blocks
 * Description: <strong>Bootstrap Components Blocks</strong> is a collection of custom <strong>Gutenberg Blocks</strong> that are built with <strong>Bootstrap Framework</strong>. These work with Bootstrap smoothly. 
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

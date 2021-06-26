<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Blocks Class
*/

final class Bootstrap_Components_Blocks {

	private function __construct(){
		$this->definte_constants(); 
		add_action( 'init', [ $this, 'bootstrap_components_blocks_assets' ] );
		add_filter( 'block_categories', [ $this, 'custom_category' ] );
		add_action( 'enqueue_block_assets', [ $this, 'external_assets_load' ] );
	}

	/**
	 * Singleton Instanace 
	*/

	public static function init(){
		static $instance = false; 
		if( ! $instance ) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Constants Define 
	*/
	public function definte_constants(){
		define( 'BCB_FILE', __FILE__ );
		define( 'BCB_BLOCK', plugins_url( '', dirname( BCB_FILE ) ) );
		define( 'BCB_BLOCK_ASSETS', BCB_BLOCK . '/dist' );
		define( 'BCB_EXTERNAL_ASSETS', BCB_BLOCK . '/assets' );
	}

	/**
	 * Blocks Registration 
	*/
	private function single_block_register( $block, $options=array() ){
		return register_block_type(
			'bcb/'. $block, 
			array_merge(
				array(
					'editor_script' => 'bcb-editor-script',
					'editor_style'  => 'bcb-editor-style',
					'style'         => 'bcb-style',
				),
				$options
			)
		);
	}

	/**
	 * Blocks Assets + Registration 
	*/
	public function bootstrap_components_blocks_assets(){

		// Frontend + Backend Style 
		wp_register_style(
			'bcb-style',
			BCB_BLOCK_ASSETS . '/blocks.style.build.css',
			is_admin() ? array( 'wp-editor' ) : null,
			null
		);

		// Backend Style 
		wp_register_style(
			'bcb-editor-style',
			BCB_BLOCK_ASSETS . '/blocks.editor.build.css',
			array( 'wp-edit-blocks' ),
			null
		);

		// Editor Scripts
		wp_register_script(
			'bcb-editor-script',
			BCB_BLOCK_ASSETS . '/blocks.build.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
			null,
			true
		);

		// Register Single Block 
		$this->single_block_register('container');
		$this->single_block_register('alert');
		$this->single_block_register('button');
		$this->single_block_register('progress');
	
	}

	/**
	 * Block Custom Category 
	*/
	public function custom_category( $categories ){
		return array_merge(
			$categories,
			array(
				array(
					'title' => 'Bootstrap Components Blocks',
					'slug'  => 'bootstrap-components-blocks'
				)
			)
		);
	}

	/**
	 * External Assets Enqueue 
	*/
	public function external_assets_load(){
		wp_enqueue_style( 'bootstrap-css', BCB_EXTERNAL_ASSETS . '/css/bootstrap.min.css' );
		wp_enqueue_script( 'bootstrap-js', BCB_EXTERNAL_ASSETS . '/js/bootstrap.min.js' );
	}
	
}
/**
 * Initialization 
*/
function bootstrap_components_blocks(){
	return Bootstrap_Components_Blocks::init();
}

// kick-off the plugin 
bootstrap_components_blocks();
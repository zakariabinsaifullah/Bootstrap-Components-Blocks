<?php
/**
 * Setting page
*/

function bcb_setting_page() {
    add_submenu_page(
        'bootstrap-blocks',
        'Bootstrap Setting',
        'Bootstrap Setting',
        'manage_options',
        'bcb-setting-page',
        'bcb_setting_page_content'
    );
    
    //call register settings function
	add_action( 'admin_init', 'register_bootstrap_components_blocks_settings' );
}
add_action( 'admin_menu', 'bcb_setting_page' );

function register_bootstrap_components_blocks_settings() {
	register_setting( 'bcb_settings_group', 'load_bootstrap' );
}

function bcb_setting_page_content() {
?>
    <div class="wrap">
        <h3>Bootstrap Framework Settings</h3>
        <p><i>Plugin will load v5 of Boostrap Framework</i></p>
        <form method="post" action="options.php">
            <?php settings_fields( 'bcb_settings_group' ); ?>
            <?php do_settings_sections( 'bcb_settings_group' ); ?>
            <table class="form-table">
                <tr valign="top">
                    <th scope="row">
                        Load Bootstrap From Plugin
                    </th>
                    <td>
                        <input type="checkbox" name="load_bootstrap" value="1" <?php checked( get_option('load_bootstrap'), 1 ); ?> />
                    </td>
                </tr>
            </table> 
            <?php submit_button(); ?>
        </form>
    </div>
<?php } ?>
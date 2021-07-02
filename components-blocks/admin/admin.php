<?php 
/** 
 * Admin Menu page
*/
function bcp_admin_overview_page() {
    add_menu_page( 'Bootstrap Blocks', 'Bootstrap Blocks', 'manage_options', 'bootstrap-blocks', 'bcb_admin_overview_page', 'dashicons-editor-bold', 78 );
}
add_action( 'admin_menu', 'bcp_admin_overview_page' ); 

function bcb_admin_overview_page(){
    ?>
        <div class="page-content-wrapper">
            <div class="welcome-area">
                <div class="header-content">
                    <h2>Bootstrap Components Blocks</h2>
                    <p>A Great Collection of Bootstrap Components Blocks. If you are a lover of Bootstrap, you will never miss it at all.</p>
                </div>
                <div class="btn-group">
                    <a href="https://makegutenblock.com/contact" target="_blank">Request New Block</a>
                    <a href="https://makegutenblock.com/contact" target="_blank" style="background: #7d4d06; color: #fff;border-color: #7d4d06;">Build Your Block</a>
                    <a href="https://makegutenblock.com/contact" target="_blank">Get Help</a>
                </div>
            </div>
        </div>
    <?php 
}
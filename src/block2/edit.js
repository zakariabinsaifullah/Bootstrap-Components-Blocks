
const { Fragment } = wp.element;
import { InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
const { __ } = wp.i18n;

const styles = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
    { label: 'Link', value: 'link' },
];

const types = [
    { label: 'Solid', value: 'solid' },
    { label: 'Outline', value: 'outline' },
];

const Edit = ({ attributes, setAttributes }) => {
    const { label, link, type, style, newTab } = attributes; 
    const target = newTab ? 'blank' : 'self';
    const rel = target == 'blank' ? 'nofollow noopener' : 'noopener';
    const btnStyle = type == 'solid' ? style : `outline-${style}`;
    return(
        <Fragment>
            <InspectorControls>        
                <PanelBody 
                    title={__("Button Options")}
                    initialOpen= { true }
                >
                    <SelectControl
                        label={ __("Select Button Type") }
                        value={ type }
                        options={ types }
                        onChange={ ( type ) => { setAttributes( { type } ) } }
                    />

                    <SelectControl
                        label={ __("Select Button Style") }
                        value={ style }
                        options={ styles }
                        onChange={ ( style ) => { setAttributes( { style } ) } }
                    />
                </PanelBody>
                <PanelBody 
                    title={__("Button Link Options")}
                    initialOpen= { false }
                >
                    <TextControl
                        label="Button Link"
                        value={ link }
                        onChange={ ( link ) => setAttributes( { link } ) }
                    />
                    <ToggleControl
                        label="Open in New Tab"
                        checked={ newTab }
                        onChange={ () => setAttributes({ newTab: !newTab }) }
                    />
                    <TextControl
                        label="Link Relation"
                        value={ rel }
                        readOnly={ true }
                    />
                </PanelBody>
            </InspectorControls>
            <a 
                className={ `btn btn-${btnStyle}` } 
                href={ link }
                role="button"
                target={ `_${target}`}
                rel= { rel }
            >
                <RichText
                    tagName="span"
                    value={ label }
                    onChange={ ( label ) => setAttributes( { label } ) }
                    allowedFormats={ ['core/b', 'core/italic'] }
                />
            </a>
        </Fragment>
    );
}
export default Edit; 

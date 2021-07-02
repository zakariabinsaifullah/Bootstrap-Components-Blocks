
const { Fragment } = wp.element;
import { InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
const { __ } = wp.i18n;

const alertTypes = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
];

const tags = [
    { label: 'h1', value: 'h1' },
    { label: 'h2', value: 'h2' },
    { label: 'h3', value: 'h3' },
    { label: 'h4', value: 'h4' },
    { label: 'h5', value: 'h5' },
    { label: 'h6', value: 'h6' },
    { label: 'p', value: 'p' },
    { label: 'div', value: 'div' },
    { label: 'span', value: 'span' },
];

const Edit = ({ attributes, setAttributes }) => {
    const { message, type, tag, dismissable } = attributes; 
    const dismissableClass = dismissable ? 'alert-dismissible' : null; 
    return(
        <Fragment>
            <InspectorControls>        
                <PanelBody 
                    title={__("Alert Options")}
                    initialOpen= { true }
                >
                    <SelectControl
                        label={ __("Select Alert Message Tag") }
                        value={ tag }
                        options={ tags }
                        onChange={ ( tag ) => { setAttributes( { tag } ) } }
                    />
                    <SelectControl
                        label={ __("Select Alert Type") }
                        value={ type }
                        options={ alertTypes }
                        onChange={ ( type ) => { setAttributes( { type } ) } }
                    />
                    <ToggleControl
                        label="Show Dismissable Icon"
                        checked={ dismissable }
                        onChange={ () => setAttributes({ dismissable: !dismissable }) }
                    />
                </PanelBody>
            </InspectorControls>
            <div className={`alert alert-${type} ${dismissableClass}`} role="alert">
                <RichText
                    tagName={ tag }
                    value={ message }
                    onChange={ ( message ) => setAttributes( { message } ) }
                    placeholder="Write Alert Message.."
                />
                {
                    dismissable &&
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                }
            </div>
        </Fragment>
    );
}
export default Edit; 

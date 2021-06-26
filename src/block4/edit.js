
const { Fragment } = wp.element;
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl, ToggleControl } from '@wordpress/components';
const { __ } = wp.i18n;

const barTypes = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Success', value: 'success' },
    { label: 'Danger', value: 'danger' },
    { label: 'Warning', value: 'warning' },
    { label: 'Info', value: 'info' },
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
];

const barStyles = [
    { label: 'Striped Without Animation', value: 'progress-bar-striped' },
    { label: 'Striped With Animation', value: 'progress-bar-striped progress-bar-animated' },
];

const Edit = ({ attributes, setAttributes, className }) => {
    const { width, height, showLabel, type, barStyle, makeStriped } = attributes;
    const barStyleClass = makeStriped ? barStyle : null; 
    return(
        <Fragment>
            <InspectorControls>        
                <PanelBody 
                    title={__("Progress Bar Options")}
                    initialOpen= { true }
                >
                    <RangeControl
                        label="Set Progress Bar Width"
                        value={ width }
                        onChange={ ( width ) => setAttributes( { width } ) }
                        help="unit in %"
                        min={ 1 }
                        max={ 100 }
                    />
                    <RangeControl
                        label="Set Progress Bar Height"
                        value={ height }
                        onChange={ ( height ) => setAttributes( { height } ) }
                        help="unit in px"
                        min={ 1 }
                        max={ 100 }
                    />
                    <ToggleControl
                        label="Show Label"
                        checked={ showLabel }
                        onChange={ () => setAttributes({ showLabel: ! showLabel }) }
                    />
                    <SelectControl
                        label={ __("Select Progress Bar Type") }
                        value={ type }
                        options={ barTypes }
                        onChange={ ( type ) => { setAttributes( { type } ) } }
                    />
                    <ToggleControl
                        label="Make Striped Bar"
                        checked={ makeStriped }
                        onChange={ () => setAttributes({ makeStriped: ! makeStriped }) }
                    />
                    {
                        makeStriped &&
                        <SelectControl
                            label={ __("Select Progress Bar Style") }
                            value={ barStyle }
                            options={ barStyles }
                            onChange={ ( barStyle ) => { setAttributes( { barStyle } ) } }
                        />
                    }
                </PanelBody>
            </InspectorControls>
            <div className={`progress ${className}`} style={{ height: height }}>
                <div className={`progress-bar bg-${type} ${barStyleClass} `} style={{ width: `${width}%`, height: height}}>
                    {
                        showLabel&&
                        <span>{width}%</span>
                    }
                </div>
            </div>
        </Fragment>
    );
}
export default Edit; 


const { Fragment } = wp.element;
import { InnerBlocks, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { Button, ButtonGroup, ColorPalette, PanelBody, RangeControl, SelectControl, ToggleControl, __experimentalBoxControl as BoxControl } from '@wordpress/components';
const { __ } = wp.i18n;

const types = [
    { label: 'Box Container', value: 'container' },
    { label: 'Full Width Container', value: 'container-fluid' },
];

const positions = [
    { label: 'Top Center', value: 'top center' },
    { label: 'Center Center', value: 'center center' },
    { label: 'Bottom Center', value: 'bottom center' },
];

const bgSizes = [
    { label: 'Cover', value: 'cover' },
    { label: 'Contain', value: 'contain' },
];

const colors = [
    { 
        name: 'Green', 
        color: '#0e9b75'
    },
    { 
        name: 'Red', 
        color: '#ff0000'
    },
    { 
        name: 'Black', 
        color: '#000000'
    },
    { 
        name: 'White', 
        color: '#ffffff'
    },
    { 
        name: 'Light Yellow', 
        color: '#E9F7CA'
    }
];

const Edit = ({ attributes, setAttributes }) => {
    const { type, padding, pressed, notPressed, sectionBgColor, sectionBgImage, enableOverlay, bgPosition, bgRepeat, bgSize, overlayColor, opacity } = attributes; 
    return(
        <Fragment>
            <InspectorControls>        
                <PanelBody 
                    title={__("Container Settings")}
                    initialOpen= { true }
                >
                    <SelectControl
                        label={ __("Select Container Type") }
                        value={ type }
                        options={ types }
                        onChange={ ( type ) => { setAttributes( { type } ) } }
                    />
                    <BoxControl
                        values={ padding }
                        label={ __( "Container Padding" ) }
                        onChange={ 
                            ( newValue ) => setAttributes({
                                ...padding,
                                padding: {
                                    top: newValue.top,
                                    left: newValue.left,
                                    right: newValue.right,
                                    bottom: newValue.bottom,
                                } 
                            })
                        }
                    />
                </PanelBody>
                <PanelBody
                    title="Container Background"
                    initialOpen={ false }
                >
                    <div>
                        <p style={{ marginTop: 10 }}>Select Background Type</p>
                        <ButtonGroup 
                            style={{ paddingBottom: 20 }}
                        >
                            <Button 
                                isSmall = { true }
                                isPressed={ pressed }
                                onClick={ () => setAttributes({ 
                                    pressed: !pressed, 
                                    notPressed: !notPressed, 
                                    sectionBgImage: null
                                }) }
                            >
                                Color
                            </Button>
                            <Button 
                                isSmall = { true }
                                isPressed={ notPressed }
                                onClick={ () => setAttributes({ 
                                    pressed: !pressed, 
                                    notPressed: !notPressed,
                                    sectionBgColor: null
                                }) }
                            >
                                Image
                            </Button>
                        </ButtonGroup>
                    </div>
                    {
                        pressed &&
                        <ColorPalette
                            colors={ colors }
                            onChange={ ( sectionBgColor ) => setAttributes( { sectionBgColor } ) }
                            value={ sectionBgColor }
                        />
                    }
                    {
                        notPressed &&
                        <Fragment>
                            <div style={{ marginBottom: 10 }}>
                                {
                                    sectionBgImage ? 
                                        <Button
                                            style={{ border: `1px solid #ccc`}}
                                            icon="trash"
                                            onClick={ () => setAttributes({ sectionBgImage: null }) }
                                        >
                                            Delete Image
                                        </Button>
                                    :
                                    <MediaUpload
                                        onSelect={ (newImage) => setAttributes({ sectionBgImage: newImage.sizes.full.url }) }
                                        type="image"
                                        value={ sectionBgImage }
                                        render={ ( { open } ) => (
                                            <Button
                                                style={{ border: `1px solid #ccc`}}
                                                icon="upload"
                                                onClick={ open }>
                                                Add Image
                                            </Button>
                                        )}
                                    />
                                }
                            </div>
                            {
                                sectionBgImage &&
                                <img src={sectionBgImage} style={{ marginBottom: 10, marginTop: 5 }}/>
                            }
                            <SelectControl
                                label="Background Position"
                                options={ positions }
                                onChange={ ( bgPosition ) => { setAttributes( { bgPosition } ) } }
                                value={ bgPosition }
                            />
                            <SelectControl
                                label="Background Size"
                                options={ bgSizes }
                                onChange={ ( bgSize ) => { setAttributes( { bgSize } ) } }
                                value={ bgSize }
                            />
                            <ToggleControl
                                label="Background Repeat"
                                checked={ bgRepeat }
                                onChange={ () => setAttributes ({ bgRepeat: ! bgRepeat }) }
                                help="Works when Background size is Contain"
                            />
                            <ToggleControl
                                label="Enable Overlay"
                                checked={ enableOverlay }
                                onChange={ () => setAttributes ({ enableOverlay: ! enableOverlay }) }
                            />
                            {
                                enableOverlay &&
                                <Fragment>
                                    <p>Set Overlay Color</p>
                                    <ColorPalette
                                        colors={ colors }
                                        onChange={ ( overlayColor ) => setAttributes( { overlayColor } ) }
                                        value={ overlayColor }
                                    />
                                    <RangeControl
                                        label="Overlay Opacity"
                                        value={ opacity }
                                        onChange={ ( opacity ) => setAttributes( { opacity } ) }
                                        min={ .1 }
                                        max={ 1 }
                                        step={ 0.1 }
                                    />
                                </Fragment>
                            }
                        </Fragment>
                    }
                </PanelBody>
            </InspectorControls>
            <div 
                className="bcb-container-wrapper"
                style={{
                    paddingTop: padding.top,
                    paddingBottom: padding.bottom,
                    paddingLeft: padding.left,
                    paddingRight: padding.right,
                    backgroundImage: sectionBgImage ? `url(${sectionBgImage})` : null, 
                    backgroundPosition: sectionBgImage ? bgPosition : null,
                    backgroundRepeat: bgRepeat ? 'repeat' : 'no-repeat',
                    backgroundSize: bgSize,
                    backgroundColor: sectionBgImage ? null : sectionBgColor
                }}
            >
                {
                    enableOverlay &&
                    <div className="overlay" style={{backgroundColor: overlayColor, opacity: opacity }}></div>
                }
                <div className={`${type} `}>
                    <div className="row">
                        <div className="col">
                            <InnerBlocks
                                allowedBlocks={ true }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Edit; 

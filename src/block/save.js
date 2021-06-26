import { InnerBlocks } from '@wordpress/block-editor';
const { __ } = wp.i18n;

const Save = ({ attributes, className }) => {
    const { type, padding, sectionBgColor, sectionBgImage, enableOverlay, bgPosition, bgRepeat, bgSize, overlayColor, opacity } = attributes;
    return(
        <div 
            className={`bcb-container-wrapper ${className}`}
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
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Save; 
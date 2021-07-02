import { RichText } from '@wordpress/block-editor';
const { __ } = wp.i18n;

const Save = ({ attributes, className }) => {
    const { label, link, type, style, newTab, align } = attributes;
    const target = newTab ? 'blank' : 'self';
    const rel = target == 'blank' ? 'nofollow noopener' : 'noopener';
    const btnStyle = type == 'solid' ? style : `outline-${style}`;
    return(
        <div className={`${className}`} style={{ textAlign: align }}>
            <a 
                className={ `btn btn-${btnStyle}` } 
                href={ link }
                role="button"
                target={ `_${target}`}
                rel= { rel }
            >
                <RichText.Content
                    tagName="span"
                    value={ label }
                />
            </a>
        </div>
    );
}
export default Save; 
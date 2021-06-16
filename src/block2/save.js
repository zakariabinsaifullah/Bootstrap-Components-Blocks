import { RichText } from '@wordpress/block-editor';
const { __ } = wp.i18n;

const Save = ({ attributes }) => {
    const { label, link, type, style, newTab } = attributes;
    const target = newTab ? 'blank' : 'self';
    const rel = target == 'blank' ? 'nofollow noopener' : 'noopener';
    const btnStyle = type == 'solid' ? style : `outline-${style}`;
    return(
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
    );
}
export default Save; 
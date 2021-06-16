const { Fragment } = wp.element;
import { RichText } from '@wordpress/block-editor';
const { __ } = wp.i18n;


const Save = ({ attributes }) => {
    const { message, type, tag, dismissable } = attributes;
    const dismissableClass = dismissable ? 'alert-dismissible' : null; 
    return(
        <div className={`alert alert-${type} ${dismissableClass}`} role="alert">
            <RichText.Content
                tagName={ tag }
                value={ message }
            />
            {
                dismissable &&
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            }
        </div>
    );
}
export default Save; 
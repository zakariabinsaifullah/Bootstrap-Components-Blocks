const attributes= {
    message: {
        type: 'string',
    },
    type: {
        type: 'string',
        default: 'primary'
    },
    tag: {
        type: 'string',
        default: 'div'
    },
    dismissable: {
        type: 'boolean',
        default: false
    }
};

export default attributes; 

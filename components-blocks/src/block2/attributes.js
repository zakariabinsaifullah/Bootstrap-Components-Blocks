const attributes= {
    label: {
        type: 'string',
    },
    link: {
        type: 'string',
        default: '#'
    },
    type: {
        type: 'string',
        default: 'solid'
    },
    style: {
        type: 'string',
        default: 'primary'
    },
    newTab: {
        type: 'boolean',
        default: false
    },
    align: {
        type: 'string',
        default: 'center'
    }
};

export default attributes; 

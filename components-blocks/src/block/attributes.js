const attributes= {
    type: {
        type: 'string',
        default: 'container'
    },
    padding: {
        type: 'object', 
        default: {
            top: '150px',
            left: '0',
            right: '0',
            bottom: '150px',
        }
    },
    pressed: {
        type: 'boolean',
        default: true
    },
    notPressed: {
        type: 'boolean',
        default: false
    },
    sectionBgColor: {
        type: 'string',
        default: '#008EFF',
    },
    sectionBgImage: {
        type: 'string',
        default: null
    },
    bgPosition: {
        type: 'string',
        default: 'center center'
    },
    bgSize: {
        type: 'string',
        default: 'cover'
    },
    bgRepeat: {
        type: 'boolean',
        default: false
    },
    enableOverlay: {
        type: 'boolean',
        default: false
    },
    overlayColor: {
        type: 'string',
        default: '#000000'
    },
    opacity: {
        type: 'number',
        default: 0.7
    }
};

export default attributes; 

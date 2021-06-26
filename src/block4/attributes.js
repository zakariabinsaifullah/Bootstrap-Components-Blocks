const attributes= {
    width: {
        type: 'number',
        default: 70
    },
    height: {
        type: 'number',
        default: 20
    },
    showLabel: {
        type: 'boolean',
        default: true
    },
    type: {
        type: 'string',
        default: 'primary'
    },
    barStyle: {
        type: 'string',
        default: 'progress-bar-striped'
    },
    makeStriped: {
        type: 'boolean',
        default: false
    }
};

export default attributes; 

const { __ } = wp.i18n;
const Save = ({ attributes, className }) => {
    const { width, height, showLabel, type, barStyle, makeStriped } = attributes;
    const barStyleClass = makeStriped ? barStyle : null; 
    return(
        <div className={`progress ${className}`}style={{ height: height }}>
            <div className={`progress-bar bg-${type} ${barStyleClass} `} style={{ width: `${width}%`, height: height}}>
                {
                    showLabel&&
                    <span>{width}%</span>
                }
            </div>
        </div>
    );
}
export default Save; 
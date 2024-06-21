export default (styles, { prefix = "" } = {}) => {
    const cx = (styleSheet, props) => {
        const x = Array.isArray(styleSheet) ? styleSheet : [styleSheet];
        const styleSheetStyles = x.map((item) => styles[`${prefix}${item}`]).join(" ");

        const y = Array.isArray(props) ? props : [props];
        const propStyles = y.join(" ");

        return [styleSheetStyles, propStyles].join(" ");
    };

    return {
        cx,
    };
};
